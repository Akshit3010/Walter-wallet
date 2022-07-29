const { balanceModel } = require("../models/balance.model");
const { userModel } = require("../models/user.model");

const addCustomer = async (email, user) => {
  try {
    const newCostumer = await userModel.find({ email });
    const loggedInUser = await userModel.find({ email: user });
    // console.log(newCostumer, loggedInUser);

    const newBalance = {
      to: newCostumer[0]._id, //costumer

      transaction: [
        {
          amount: 0,
          createdAt: new Date(),
          deleted: false,
        },
      ],
    };
    const balance = new balanceModel(newBalance);
    // console.log(balance);

    await userModel.findOneAndUpdate(
      { email: user },
      { $push: { balanceId: balance._id } }
    );
    await userModel.findOneAndUpdate(
      { email },
      { $push: { balanceId: balance._id } }
    );
    balance.save();
    return { message: "New user added", status: "success" };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

module.exports = { addCustomer };
