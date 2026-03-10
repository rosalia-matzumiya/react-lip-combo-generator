const express = require("express");
const router = express.Router();

const products = require("../data/products.json");

router.get("/", (req, res) => {
  let filteredProducts = products;

  for (const key in req.query) {
    const value = req.query[key];

    filteredProducts = filteredProducts.filter(
      product =>
        product[key] &&
        product[key].toLowerCase() === value.toLowerCase()
    );

  }

  res.json(filteredProducts);
});


router.get("/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({
      error: "Product not found"
    });
  }
  res.json(product);
});

module.exports = router;