/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const wishListSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    paintBrand: {
      type: String,
      required: true,
    },
    paintColour: {
      type: String,
      required: false,
    },
    hexCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const wishlist: any = mongoose.model("wishlist", wishListSchema);
export default wishlist;
