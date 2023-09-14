import express from "express";
const router = express.Router();
import { userSignUp, userLogin } from "../controllers/user-controllers.js";

router.post("/sign-up", userSignUp);

router.post("/login", userLogin);

export default router;
