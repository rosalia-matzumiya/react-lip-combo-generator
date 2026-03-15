const express = require("express");
const router = express.Router();

//import products
const products = require("../data/products.json");
const { randomItem } = require("../utils/random");
const { formatProduct } = require("../utils/formatter");


//create category groups
const liners = products.filter(p => p.type === "Liner");
const bases = products.filter(p =>
  ["Bullet", "Crayon"].includes(p.type)
);
const toppers = products.filter(p =>
  ["Gloss", "Balm"].includes(p.type)
);

function generateCombo(basesFiltered, liners, toppers) {
  const liner = randomItem(liners);
  const base = randomItem(basesFiltered);
  const topper = randomItem(toppers);

  return {
    colorFamily: base.colorFamily,
    liner: formatProduct(liner),
    base: formatProduct(base),
    topper: formatProduct(topper)
  }
}

//create combo generation endpoint
router.get("/random", (req, res) => {
  const count = Number(req.query.count) || 1;
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

  if (count === 1) {
    const combo = generateCombo(basesFiltered, liners, toppers);
    return res.json(combo);

  }

  const combos = [];
  for (let i = 0; i < count; i++) {
    combos.push(generateCombo(basesFiltered, liners, toppers));

  }

  res.json({ combos });
});

module.exports = router;