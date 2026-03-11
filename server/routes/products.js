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

router.get("/meta", (req, res) => {
  const brands = products
    .map(p => p.brand)
    .filter(brand => brand);
  const types = products
    .map(p => p.type)
    .filter(type => type);
  const colorFamilies = products
    .map(p => p.colorFamily)
    .filter(color => color);
  const finishes = products
    .map(p => p.finish)
    .filter(finish => finish);

  const uniqueBrands = [...new Set(brands)].sort();
  const uniqueTypes = [...new Set(types)].sort();
  const uniqueColorFamilies = [...new Set(colorFamilies)].sort();
  const uniqueFinishes = [...new Set(finishes)].sort();

  res.json({
    uniqueBrands,
    uniqueTypes,
    uniqueColorFamilies,
    uniqueFinishes
  });
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