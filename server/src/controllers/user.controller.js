const { userModel } = require("../models/user.model");

const createUser = async (name, email, role) => {
  try {
    const newUser = {
      name,
      email,
      role,
      balanceId: [],
    };
    console.log(newUser);
    const user = new userModel(newUser);
    console.log(user);
    user.save();
    return { message: "New user created successfully", status: "success" };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

module.exports = { createUser };
