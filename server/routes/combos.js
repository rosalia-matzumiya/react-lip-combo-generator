const express = require("express");
const router = express.Router();

//import products
const products = require("../data/products.json");

//create category groups

//create random combo generator

//create endpoint
router.get("/random", (req, res) => {
  res.json({ messsage: "Combo generator coming soon" });
});

module.exports = router;