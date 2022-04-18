/** @format */

import express from "express";
import Paint from "../../../models/paints";
export function getPaints(app: express.Express) {
  app.get("/paints", async (req: any, res: any) => {
    try {
      const paints = await Paint.find();
      if (paints.length != 0) {
        res.send(paints);
        return;
      } else {
        res.send({ Error: "No paints available" });
        return;
      }
    } catch (error: any) {
      res.send({ error: error.message });
    }
  });
}
