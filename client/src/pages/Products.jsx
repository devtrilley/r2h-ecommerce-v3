// Products page: just the <main> from v1's corresponding HTML refactored to JSX

// Importing css file from v1 for products page
import { useState, useEffect } from "react";
import "../styles/products.css";

// This is the only page where the product card is used, so there's no point in making a separate component for it
export default function Products() {
  // State for products on our page
  const [products, setProducts] = useState([]);

  // useEffect to grab products from backend/server after component renders
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(`Error fetching products: ${error}`));
  }, []); // No dependencies, runs once

  return (
    <main>
      <h1 className="store-heading">Uni Store</h1>
      {/* Grid container that holds our product cards, all generated in JS */}
      <div className="container">
        <div className="row product-grid">
          {/* Using .map() to dynamically render each product card */}
          {products.map((product) => (
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
