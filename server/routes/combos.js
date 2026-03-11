const express = require("express");
const router = express.Router();

//import products
const products = require("../data/products.json");
const { randomItem } = require("../utils/random");
const { route } = require("./products");

//create category groups
const liners = products.filter(p => p.type === "Liner");
const bases = products.filter(p =>
  ["Bullet", "Crayon"].includes(p.type)
);
const toppers = products.filter(p =>
  ["Gloss", "Balm"].includes(p.type)
);


//create combo generation endpoint
router.get("/random", (req, res) => {

  const colorFamily = req.query.colorFamily;
  let basesFiltered = bases;

  if (colorFamily) {
    basesFiltered = bases.filter(
      p =>
        p.colorFamily.trim().toLowerCase() === colorFamily.trim().toLowerCase()
    );

    if (basesFiltered.length === 0) {
      basesFiltered = bases;
    }
  }
  const liner = randomItem(liners);
  const base = randomItem(basesFiltered);
  const topper = randomItem(toppers);

  res.json({
    liner,
    base,
    topper
  });
});

router.get("/meta/colorFamilies", (req, res) => {
  const colorFamilies = products
    .map(p => p.colorFamily)
    .filter(color => color);

  const uniqueColorFamilies = [...new Set(colorFamilies)];

  res.json(uniqueColorFamilies.sort());
});

module.exports = router;