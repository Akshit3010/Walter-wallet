import { userModel } from "../models/user.model";

export const createUser = async (name: string, email: string, role: string) => {
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

