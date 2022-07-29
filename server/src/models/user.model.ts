import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  role: string;
  balaceId: string;
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please use a valid address"],
      unique: true,
    },
    role: {
      type: String,
      required: [true, "Please add a role"],
      enum: ["merchant", "costumer"],
    },
    balanceId: [{ type: Schema.Types.ObjectId }],
  },
  { collection: "user" }
);

export const userModel = model("userModel", UserSchema, "user");
