const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Lip Combo API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});