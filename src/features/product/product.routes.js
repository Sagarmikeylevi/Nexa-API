import express from "express";
const productRouter = express.Router();
import ProductController from "./product.controller.js";

const productController = new ProductController();

productRouter.get("/", productController.getAllProducts);
productRouter.post("/", productController.addProducts);

export default productRouter;
