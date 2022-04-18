/** @format */

import express from "express";
import User from "../../../models/user";
export function signUp(app: express.Express) {
  app.post(
    "/signup",
    async (
      req: {
        body: {
          firstName: string;
          lastName: string;
          email: string;
          password: string;
          confirmPassword: string;
          address: string;
          phone: string;
        };
      },
      res: any
    ) => {
      try {
        if (!req.body.firstName) {
          res.send({ Message: "Please enter your first name!" });
          return;
        } else if (!req.body.email) {
          res.send({ Message: "Please provide your email!" });
          return;
        } else if (!req.body.password) {
          res.send({ Message: "Please enter your password!" });
          return;
        } else if (!req.body.confirmPassword) {
          res.send({ Message: "Please confirm your password!" });
          return;
        } else if (!req.body.address) {
          res.send({ Message: "Please enter your address!" });
          return;
        } else if (!req.body.phone) {
          res.send({ Message: "Please enter your phone number!" });
          return;
        } else {
          if (req.body.confirmPassword != req.body.password) {
            res.send({ Message: "Please make sure your passwords match." });
            return;
          }
          const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            phone: req.body.phone,
          });
          user
            .save()
            .then(() => {
              res.send({ Message: "Registration Completed" });
              return;
            })
            .catch((err: any) => {
              console.log(err.message);
              res.send({ Error: err.message });
              return;
            });
        }
      } catch (error: any) {
        res.send({ error: error.message });
        return;
      }
    }
  );
}
