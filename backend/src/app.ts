/** @format */

import express from "express";
import cors from "cors";
import { signIn } from "./routes/auth/sign-in";
import bodyParser from "body-parser";
import { signUp } from "./routes/auth/sign-up";
import mongoose from "mongoose";
import { getPaints } from "./routes/paints/get-paints";
import { getCart } from "./routes/cart/getcart";
import { addCartItem } from "./routes/cart/add-cartItem";
import { deleteItem } from "./routes/cart/delete-cartItem";

const app = express();
const dbURI =
  "mongodb+srv://Talha:Talha%40456@Cluster0.xqvmh.mongodb.net/mopaints?retryWrites=true&w=majority&ssl=true";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("connected to db");
    var jsonParser = bodyParser.json();
    app.use(jsonParser);
    app.use(cors());
    const port = 3000;
    signIn(app);
    signUp(app);
    getPaints(app);
    getCart(app);
    addCartItem(app);
    deleteItem(app);
    app.get("/", (req: any, res: any) => {
      res.send("Hello World!");
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
