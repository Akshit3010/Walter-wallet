const bcrypt = require("bcryptjs");
const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
    },
    email: {
        type: String,
        required: [true, "Please add an e-mail"],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please use a valid address'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minLenght: 6,
        select: false,
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
});

UserSchema.methods.matchPassword = async function(enteredPassword: String) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = model("User", UserSchema);

module.exports = User;
