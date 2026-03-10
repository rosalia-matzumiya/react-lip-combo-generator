const express = require("express"); //create the web server
const cors = require("cors"); //allow requests from frontend

const productsRouter = require("./routes/products");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);

//define API route
app.get("/", (req, res) => {
  res.send("Lip Combo API is running");
});

//start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});