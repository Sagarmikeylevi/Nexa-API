import express from "express";
import productRouter from "./src/features/product/product.routes.js";
import userRouter from "./src/features/user/user.routes.js";
import bodyParser from "body-parser";
import basicAuthorizer from "./src/middlewares/basicAuth.middleware.js";
const server = express();
const PORT = 3200;

server.use(bodyParser.json());

server.use("/api/products", basicAuthorizer, productRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send("Welcome to Nexa APIs");
});

server.listen(PORT, (err) => {
  if (err) return console.log("ERROR ----->", err);

  return console.log(`Server running on PORT: ${PORT}`);
});
