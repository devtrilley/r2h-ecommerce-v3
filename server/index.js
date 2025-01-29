// Main server file for Express

// Importing npm modules
const express = require("express"); // Server
const mysql = require("mysql2"); // DB syncing
const dotenv = require("dotenv").config(); // DB creds. .config() activate it
// Cross Origin Resource Sharing = npm module middleware that permits request from different origins (Ex) Client and Server aka Frontend and Backend)
const cors = require("cors"); // Allows frontend to fetch data from backend

const app = express();
const PORT = process.env.PORT || 3000; // Local Dev

// MIDDLEWARE = function that processes requests and responses before the reach their final destination (that being their server-side route handler, or the client/user)
// Middleware that allows data request from Vite's frontend to the backend/server
app.use(cors());

// Middleware that parses JSON in requests
app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server is running @ http://localhost:${PORT}`)
);


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the RDS MySQL database.');
});

module.exports = connection;

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
