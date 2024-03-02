import CartModel from "./cart.model.js";

export default class CartController {
  add(req, res) {
    const { productId, quantity } = req.query;
    const userId = req.userId;
    CartModel.add(productId, userId, quantity);
    res.status(201).send("Cart is updated");
  }

  get(req, res) {
    const userId = req.userId;
    const cartItems = CartModel.get(userId);

    if (cartItems.length === 0) {
      return res.status(200).send("Cart is empty");
    }

    return res.status(200).send(cartItems);
  }

  delete(req, res) {
    const { cartItemId } = req.params;
    const userId = req.userId;
    const error = CartModel.delete(cartItemId, userId);
    if (error) {
      return res.status(404).send(error);
    }

    return res.status(200).send("Cart item is removed");
  }
}
