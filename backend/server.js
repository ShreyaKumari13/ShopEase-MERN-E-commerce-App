const express = require("express");
const cors = require("cors");
const products = require("./data/products");

const app = express();
app.use(cors());
app.use(express.json());

// API endpoint to get products
app.get("/api/products", (req, res) => {
  res.json(products);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
