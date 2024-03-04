import express from "express";
import swagger from "swagger-ui-express";
import productRouter from "./src/features/product/product.routes.js";
import userRouter from "./src/features/user/user.routes.js";
import cartRouter from "./src/features/cart/cart.routes.js";
import bodyParser from "body-parser";
// import basicAuthorizer from "./src/middlewares/basicAuth.middleware.js";
import { config } from "dotenv";
import jwtAuth from "./src/middlewares/jwt.middleware.js";
config();
import apiDocs from "./swagger.json" assert { type: "json" };
import cors from "cors";

const server = express();
const PORT = process.env.PORT;

server.use(cors());

server.use(bodyParser.json());

server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));
server.use("/api/products", jwtAuth, productRouter);
server.use("/api/cart", jwtAuth, cartRouter);
server.use("/api/users", userRouter);

server.use((req, res) => {
  res.status(404).send("API not found");
});

server.get("/", (req, res) => {
  res.send("Welcome to Nexa APIs");
});

server.listen(PORT, (err) => {
  if (err) return console.log("ERROR ----->", err);

  return console.log(`Server running on PORT: ${PORT}`);
});
