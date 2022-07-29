import { Schema, model } from "mongoose";

const BalanceSchema = new Schema({
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
});

const Balance = model("User", BalanceSchema);

module.exports = Balance;

