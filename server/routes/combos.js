const express = require("express");
const router = express.Router();

//import products
const products = require("../data/products.json");
const { randomItem } = require("../utils/random");

//create category groups
const liners = products.filter(p => p.type === "Liner");
const bases = products.filter(p =>
  ["Bullet", "Crayon"].includes(p.type)
);
const toppers = products.filter(p =>
  ["Gloss", "Balm"].includes(p.type)
);


//create endpoint
router.get("/random", (req, res) => {

  console.log("Query:", req.query);
  console.log("ColorFamily:", req.query.colorFamily);
  const colorFamily = req.query.colorFamily;
  let basesFiltered = bases;
  console.log(bases.slice(0, 5));
  if (colorFamily) {
    basesFiltered = bases.filter(
      p =>
        p.colorFamily.trim().toLowerCase() === colorFamily.trim().toLowerCase()
    );
    console.log("Filtered bases:", basesFiltered.length);

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

module.exports = router;