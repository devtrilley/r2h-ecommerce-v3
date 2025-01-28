// Products page: just the <main> from v1's corresponding HTML refactored to JSX

// Importing css file from v1 for products page
import { useState, useEffect } from "react";
import "../styles/products.css";

// This is the only page where the product card is used, so there's no point in making a separate component for it
export default function Products() {
  // State for products on our page
  const [products, setProducts] = useState([]); // All products

  // Sets state for our product grid filtering

  // Filtered Products, default is empty array
  const [filteredProducts, setFilteredProducts] = useState([]);
  // Price Max, default of $100
  const [priceMax, setPriceMax] = useState(80);
  // Product Type, default "" means all types
  const [productType, setProductType] = useState("");

  // useEffect to grab products from backend/server after component renders
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Store all products from DB
        setFilteredProducts(data); // Display all products initially
      })
      .catch((error) => console.error(`Error fetching products: ${error}`));
  }, []); // No dependencies, runs once

  // Necessary JS for <select> dropdown from Materialize to be functional
  useEffect(() => {
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }, []);  

  // useEffect to filter products
  useEffect(() => {
    // filteredArr = .filter() to change products being displayed on screen
    const filteredArr = products.filter((product) => {
      // Checks if our current product is less than the max price set
      const matchesPrice = product.price <= priceMax;
      // Checks the type to filter and if current product matches
      const matchesType = productType ? product.type === productType : true;
      return matchesPrice && matchesType;
    });
    // Update filtered products state to our new
    setFilteredProducts(filteredArr);
  }, [priceMax, productType, products]); // Dependencies, when one of these changes, use effect will re-execute

  return (
    <main>
      <h1 className="store-heading">Uni Store</h1>
      {/* Grid container that holds our product cards, all generated in JS */}
      <div className="container">
        {/* Filter inputs to filter the product grid */}
        <div className="filters">
          {/* Price Filter */}
          <div className="filter">
            <label htmlFor="priceMax">Maximum Price: ${priceMax}</label>
            {/* Slider input, max of 80 for most expensive product (headphones) */}
            <input
              type="range"
              id="priceMax"
              min="0"
              max="80" 
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
            />
          </div>

          {/* Product Type Filter (input-field required by materialize for <select>)*/}
          <div className="filter input-field">
            {/* "active" class placed label above selections */}
            <label htmlFor="productType" className="active">Product Type:</label>
            {/* Dropdown menu */}
            <select
              id="productType"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="">All</option>
              <option value="Tech">Tech</option>
              <option value="Clothes">Clothing</option>
              <option value="Misc">Misc.</option>
            </select>
          </div>
        </div>

        {/* The product grid itself */}
        <div className="row product-grid">
          {/* Using .map() to dynamically render each product card from filteredProducts state array, rather than our products array originally. This way only the items that pass our filter will be rendered */}
          {filteredProducts.map((product) => (
            <div key={product.id} className="col s12 m6 l4 product-card">
              <img
                src={product.image_url}
                alt={product.name}
                className="product-card__image"
              />
              <div className="product-card__name">{product.name}</div>
              <div className="product-card__price">${product.price}</div>
              <div className="product-card__description">
                {product.description}
              </div>
              <button className="product-card__button">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
