import express from "express";
const router = express.Router();
import register from "../controllers/register";

router.post("/register", register)

module.exports = router;