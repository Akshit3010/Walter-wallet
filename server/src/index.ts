import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import db from "../DB/db";

const app: Express = express();
app.use(cors())

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Expense Manager");
});
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  db.then((conn) => {
    console.log(`Server is running at https://localhost:${PORT}`);
  });
});
