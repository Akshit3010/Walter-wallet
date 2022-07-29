import { Router } from "express";
import { createUser } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, role } = req.body;
  const { message, status } = await createUser(name, email, role);

  if (status === "error") {
    return res.status(404).send({ message, status });
  }
  return res.status(201).send({ message, status });
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email } = req.body;
    return res
      .cookie("walter-wallet", email, {
        httpOnly: true,
        secure: false,
        expires: new Date(Date.now() + 30 * 86400 * 100),
      })
      .status(200)
      .send({ message: "login successful", status: "success" });
  } catch (err) {
    return res
      .status(404)
      .send({ message: "something went wrong", status: "error" });
  }
});

userRouter.post("/logout", async (req, res) => {
  try {
    res.clearCookie("walter-wallet");
    return res
      .status(200)
      .send({ message: "signout successful", status: "success" });
  } catch (err) {
    return res
      .status(404)
      .send({ message: "something went wrong", status: "error" });
  }
});
