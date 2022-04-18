/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cartItemSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    paintId: { type: Schema.Types.ObjectId, ref: "paint" },
    quantity: {
      type: String,
    },
  },
  { timestamps: true }
);
const CartItem: any = mongoose.model("cartItem", cartItemSchema);
export default CartItem;
