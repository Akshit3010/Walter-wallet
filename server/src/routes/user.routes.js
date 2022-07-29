const { Router } = require("express");
const { createUser } = require("../controllers/user.controller");
const { userModel } = require("../models/user.model");

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, role } = req.body;

  const { message, status } = await createUser(name, email, role);
  console.log(message, status);
  if (status === "error") {
    return res.status(404).send({ message, status });
  }
  return res.status(201).send({ message, status });
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.find({ email });
    console.log(user);
    return res
      .cookie("walterwallet", email, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: new Date(Date.now() + 30 * 86400 * 100),
      })
      .status(200)
      .send({ message: "login successful", status: "success", data: user });
  } catch (err) {
    return res
      .status(404)
      .send({ message: "something went wrong", status: "error" });
  }
});

userRouter.post("/checklogin", async (req, res) => {
  try {
    const email = req.cookies.walterwallet;
    const user = await userModel.find({ email });
    if (!user) {
      return res
        .status(401)
        .send({ message: "session expired", status: "failed" });
    }
    return res
      .status(200)
      .send({ message: "login successful", status: "success", data: user });
  } catch (err) {
    return res
      .status(404)
      .send({ message: "something went wrong", status: "error" });
  }
});

userRouter.post("/logout", async (req, res) => {
  try {
    res.clearCookie("walterwallet");
    return res
      .status(200)
      .send({ message: "signout successful", status: "success" });
  } catch (err) {
    return res
      .status(404)
      .send({ message: "something went wrong", status: "error" });
  }
});

module.exports = { userRouter };
