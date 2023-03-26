const express = require("express");
const cors = require("cors");

const products = require('./products');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Yachi's Online Store")
})
app.get("/products", (req, res) => {
  res.send(products)
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`))