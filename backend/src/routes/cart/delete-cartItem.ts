/** @format */

import express from "express";
import CartItem from "../../../models/cart";
export function deleteItem(app: express.Express) {
  app.delete("/cartItems/:id", async (req: any, res: any) => {
    try {
      const cart = await CartItem.findOneAndDelete({ _id: req.params.id });
      res.send({ Message: "Item deleted successfully!" });
    } catch (error: any) {
      res.send({ error: error.message });
    }
  });
}
