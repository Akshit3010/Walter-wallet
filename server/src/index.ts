import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
var cookieParser = require("cookie-parser");
import cors from "cors";
dotenv.config();
import db from "../DB/db";
import { userRouter } from "./routes/user.routes";

const app: Express = express();
const session = require("express-session");
app.use(cors());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/walter-wallet", userRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  db.then((conn) => {
    console.log(`Server is running at https://localhost:${PORT}`);
  });
});
