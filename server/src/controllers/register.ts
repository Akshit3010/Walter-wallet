import { Request, Response } from "express";
const User = require("../models/user");

const register = async (req: Request, res: Response) => {
    console.log(req.body);
    // const { name, email, password } = req.body;

    // await User.create({
    //     name,
    //     email,
    //     password,
    // });

    res.status(200).json({ success: true });
};

export default register;