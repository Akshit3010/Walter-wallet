const { Router } = require("express");
const { addContumer } = require("../controllers/balance.controller");

const balanceRouter = Router();

balanceRouter.post("/addContumer", async (req, res) => {
  const { email } = req.body;
  const user = req.cookies.walterwallet;
  if (!user) {
    return res
      .status(401)
      .send({ message: "session expired", status: "failed" });
  }
  const { message, status } = await addContumer(email, user);
  res.send({ message, status });
});

module.exports = { balanceRouter };
