import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import db from "../DB/db";
const nodemailer = require("nodemailer");

const app: Express = express();
app.use(cors())

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

// verify connection configuration
transporter.verify(function(error: any, success: any) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Expense Manager");
});
app.use("/auth", require("./routes/auth"));
app.post("/send", (req, res) => {
    const {name, email, subject, message} = req.body;
    var mail = {
        from: name,
        to: email,
        subject: subject,
        text: message
      }
    transporter.sendMail(mail, (err: any, data: any) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
          status: 'success'
        })
      }
    })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  db.then((conn) => {
    console.log(`Server is running at https://localhost:${PORT}`);
  });
});
