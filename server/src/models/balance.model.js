const { Schema, model } = require("mongoose");

const TransactionSchema = new Schema({
  amount: Number,
  createdAt: Date,
  deleted: Boolean,
});

const BalanceSchema = new Schema(
  {
    to: {
      type: Schema.Types.ObjectId,
      required: [true, "constumer"],
    },
    transaction: {
      type: [TransactionSchema ],
      required: [true, "transaction"],
    },
  },
  { collection: "balance" }
);

const balanceModel = model("balanceModel", BalanceSchema, "balance");

module.exports = { balanceModel };
