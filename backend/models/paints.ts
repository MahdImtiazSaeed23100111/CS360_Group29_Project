/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const paintsSchema = new Schema(
  {
    brandName: {
      type: String,
      required: true,
    },
    paintName: {
      type: String,
      required: false,
    },
    hexCode: {
      type: String,
      required: true,
    },
    paintPriceRange: {
      type: Number,
      required: true,
    },
    paintSize: {
      type: Number,
      required: true,
    },
    paintColours: {
      type: String,
      required: true,
    },
    paintQty: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Paint: any = mongoose.model("paint", paintsSchema);
export default Paint;
