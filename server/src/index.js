const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();
const nodemailer = require("nodemailer");
const db = require("../DB/db");
const { userRouter } = require("./routes/user.routes");
const { balanceRouter } = require("./routes/balance.routes");
const session = require("express-session");

const app = express();
const corsOptions = {
   origin: true, //included origin as true
   credentials: true, //included credentials as true
   sameSite: "none",
};
app.set("trustproxy", 1);
app.use(cors(corsOptions));
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
app.use("/walter-wallet/dashboard", balanceRouter);

const transporter = nodemailer.createTransport({
   host: "smtp.ethereal.email",
   port: 587,
   auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
   },
});

// verify connection configuration
transporter.verify(function (error, success) {
   if (error) {
      console.log(error);
   } else {
      console.log("Server is ready to take our messages");
   }
});

app.post("/send", (req, res) => {
   const { name, email, subject, message } = req.body;
   var mail = {
      from: name,
      to: "imyash.654@gmail.com",
      subject: subject,
      text: message,
   };
   transporter.sendMail(mail, (err, data) => {
      if (err) {
         res.json({
            status: "fail",
         });
      } else {
         res.json({
            status: "success",
         });
      }
   });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   db.then((conn) => {
      console.log(`Server is running at https://localhost:${PORT}`);
   });
});
