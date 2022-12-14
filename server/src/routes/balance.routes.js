const { Router } = require("express");
const { addCustomer } = require("../controllers/balance.controller");

const balanceRouter = Router();

balanceRouter.post("/addCustomer", async (req, res) => {
  const { email } = req.body;
  const user = req.cookies.walterwallet;
  if (!user) {
    return res
      .status(401)
      .send({ message: "session expired", status: "failed" });
  }
  const { message, status } = await addCustomer(email, user);
  res.send({ message, status });
});

module.exports = { balanceRouter };
