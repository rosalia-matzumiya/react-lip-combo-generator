const express = require("express");
const router = express.Router();

const products = require("../data/products.json");


router.get("/", (req, res) => {
  res.json(products);
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

router.get("/", (req, res) => {
  const { type } = req.query;

  if (type) {
    const filteredProducts = products.filter(p => p.type === type);
    return res.json(filteredProducts);
  }

  res.json(products);
});



module.exports = router;