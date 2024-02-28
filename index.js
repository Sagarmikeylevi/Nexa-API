import express from "express";
import productRouter from "./src/features/product/product.routes.js";
const server = express();
const PORT = 3200;

server.use("/api/products", productRouter);

server.get("/", (req, res) => {
  res.send("Welcome to Nexa APIs");
});

server.listen(PORT, (err) => {
  if (err) return console.log("ERROR ----->", err);

  return console.log(`Server running on PORT: ${PORT}`);
});
