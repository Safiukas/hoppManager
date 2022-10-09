import express from "express";
import { signin } from "../middleware/authMiddleware.js";

const router = express.Router();

// //CREATE A USER
// router.post("/signup", signup)

//SIGN IN
router.post("/login", signin);

export default router;
