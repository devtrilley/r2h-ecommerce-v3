// jQuery Code for Materialize Navbar
// This code is used the DOM to make the sidenav appear after the page is loaded, IF we click the menu icon
$(document).ready(function () {
  $(".sidenav").sidenav();
});

// DOM Manipulation Elements
const productGrid = document.querySelector(".product-grid");

// Product Class
class Product {
  // Constructor method hold 4 parameters, all holding key product card information
  constructor(
    productName, // name of product
    productPrice, // price of product
    productDescription, // product description
    productImage, // productImage path/file
    productLink, // link to product on Amazon
    productAltText // link to product on Amazon
  ) {
    // "this" refers to the current instance. we're assigning the value of each param to their respective properties.
    this.productName = productName;
    this.productPrice = productPrice;
    this.productDescription = productDescription;
    this.productImage = productImage;
    this.productLink = productLink;
    this.productAltText = productAltText;
  }
}

// Fetching Store Product Data for products.json file
// 1) We search for the product-grid element in your HTML.
// 2) We use fetch to load the products.json file from the data folder.
// 3) We then convert our JSON product data into a JS array of Product objects {} through our Products class.
// 4) Use forEach() on each product and dynamically generate HTML for it using .innerHTML
// 6) If anything fails, we get an error mesage

fetch("../data/products.json") // Loads the JSON file
  //Response extracts data from JSON.file
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((products) => {
    // forEach method that runs through products and generates.
    products.forEach((product) => {
      productGrid.innerHTML += `
  <div class="col s12 m6 l4  card">
    <img
      class="product-card__image product-card--image"
      src="${product.productImage}"
      alt="${product.productAltText}"
    />
      <p class="product-card__name product-card--name">${product.productName}</p>
      <p class="product-card__price product-card--price">$${product.productPrice}</p>
      <p class="product-card__description product-card--description">
        ${product.productDescription}
      </p>
    <button class="product-card__button">Add to Cart</button>
  </div>`;
    });
  })
  .catch((error) => console.error("Error fetching products:", error));
