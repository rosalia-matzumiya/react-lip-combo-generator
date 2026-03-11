const express = require("express");
const router = express.Router();

//import products
const products = require("../data/products.json");

//create category groups
const liners = products.filter(p => p.type === "Liner");
const bases = products.filter(p =>
  ["Bullet", "Crayon"].includes(p.type)
);
const toppers = products.filter(p =>
  ["Gloss", "Balm"].includes(p.type)
);

//create random combo generator
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//create endpoint
router.get("/random", (req, res) => {
  const liner = randomItem(liners);
  const base = randomItem(bases);
  const topper = randomItem(toppers);

  res.json({
    liner,
    base,
    topper
  });
});

module.exports = router;