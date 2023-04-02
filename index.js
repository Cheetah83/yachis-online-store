const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const register = require("./routes/register");
const login = require("./routes/login");

const products = require('./products');

const app = express();

require("dotenv").config()

app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);

app.get("/", (req, res) => {
  res.send("Welcome to Yachi's Online Store")
})
app.get("/products", (req, res) => {
  res.send(products)
})
const PORT = process.env.PORT || 3000;
const uri = process.env.DB_URI;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connection successful"))
.catch((err) => console.log("MongoDB connection failed", err.message));