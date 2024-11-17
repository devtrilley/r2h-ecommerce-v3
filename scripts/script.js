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
fetch("../data/products.json") // Loads the JSON file
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((products) => {
    // forEach method that runs through products
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
  .catch((error) => console.error("Error fetching products:", error))
