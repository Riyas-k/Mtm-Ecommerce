import dotenv from "dotenv";
dotenv.config();
import express from "express";
const router = express.Router();
import {adminLogin} from "../controllers/admin-controllers.js";

router.post("/login",adminLogin)

export default router;
