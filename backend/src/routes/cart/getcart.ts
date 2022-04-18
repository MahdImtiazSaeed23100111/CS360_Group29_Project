/** @format */

import express from "express";
import CartItem from "../../../models/cart";
export function getCart(app: express.Express) {
  app.get("/cartItems/:id", async (req: any, res: any) => {
    try {
      console.log(req.params.id);
      const cart = await CartItem.find({ userId: req.params.id });
      if (cart.length != 0) {
        res.send(cart);
        return;
      } else {
        res.send({ Error: "Cart is Empty!" });
        return;
      }
    } catch (error: any) {
      res.send({ error: error.message });
    }
  });
}
