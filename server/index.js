// Main server file for Express

// Importing npm modules
const express = require("express"); // Server
const mysql = require("mysql2"); // DB syncing
const dotenv = require("dotenv").config(); // DB creds. .config() activate it
const cors = require("cors"); // Security

const app = express();
const PORT = process.env.PORT || 3000; // Local Dev

// Middleware that parses JSON in requests
app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server is running @ http://localhost:${PORT}`)
);

// Connecting to MySQL 'ecommerceV2' DB and passes creds in obj
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Success and error messages if database connects or not
connection.connect((err) => {
  if (err) {
    console.error(`Database connection failed: ${err}`);
  } else {
    console.log("Connected to MySQL database!");
  }
});

// GETs our product information from our DB
app.get("/products", (req, res) => {
  // Query selects all products from product table
  const query = "SELECT * FROM products";

  // Run the query
  connection.query(query, (err, results) => {
    // Erro handling if we can't fetch products from table 
    if (err) {
      console.error(`Error fetching products: ${err}`);
      return res.status(500).send(err);
    }
    res.json(results);
  });
});
