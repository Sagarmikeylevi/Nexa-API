import express from "express";
const productRouter = express.Router();
import ProductController from "./product.controller.js";
import { upload } from "../../middlewares/fileupload.middleware.js";

const productController = new ProductController();

productRouter.get("/", productController.getAllProducts);
productRouter.post(
  "/",
  upload.single("imageUrl"),
  productController.addProducts
);
productRouter.get("/:id", productController.getOneProduct);
productRouter.get("/filter", productController.filterProduct);
productRouter.post("/rate", productController.rateProduct);

export default productRouter;
