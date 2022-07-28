import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import db from "../DB/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Expense Manager");
});

app.listen(port, () => {
  db.then((conn) => {
    console.log(`Server is running at https://localhost:${port}`);
  });
});
