import express from "express";
const router = express.Router();
import ProductController from "./product.controller.js";

const productController = new ProductController();

router.get("/", productController.getAllProducts);
router.post("/", productController.addProducts);

export default router;
