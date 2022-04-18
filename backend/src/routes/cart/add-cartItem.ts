/** @format */

import express from "express";
import CartItem from "../../../models/cart";
export function addCartItem(app: express.Express) {
  app.post(
    "/cartItems",
    async (
      req: {
        body: {
          userId: number;
          paintId: number;
          quantity: number;
        };
      },
      res: any
    ) => {
      try {
        const cartItem = new CartItem({
          userId: req.body.userId,
          paintId: req.body.paintId,
          quantity: req.body.quantity,
        });
        cartItem.save().then(() => {
          res.send({ Message: "OK" });
        });
      } catch (error: any) {
        res.send({ error: error.message });
      }
    }
  );
}
