const { userModel } = require("../models/user.model");

const createUser = async (name, email, role) => {
  try {

    const newUser = {
      name,
      email,
      role,
      balanceId: [],
    };
    const user = new userModel(newUser);
    await user.save();
    return { message: "New user created successfully", status: "success" };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

module.exports = { createUser };
