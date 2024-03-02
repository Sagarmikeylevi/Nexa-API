import express from "express";
import CartController from "./cart.controller.js";
const cartRouter = express.Router();

const cartController = new CartController();

cartRouter.post("/", cartController.add);
cartRouter.get("/get", cartController.get);
cartRouter.delete("/:cartItemId", cartController.delete);

export default cartRouter;
