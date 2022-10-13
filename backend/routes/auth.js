import express from "express";
import { loginUser } from "../middleware/authMiddleware.js";

const router = express.Router();

// //CREATE A USER
// router.post("/signup", signup)

//LOG IN
//@Route POST /api/auth
//@access Public
router.post("/login", loginUser);

export default router;
