const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
    },
    role: {
      type: String,
      required: [true, "Please add a role"],
      enum: ["merchant", "customer"],
    },
    balanceId: [{ type: Schema.Types.ObjectId, ref: "balanceModel" }],
  },
  { collection: "user" }
);

const userModel = model("userModel", UserSchema, "user");

module.exports = { userModel };
