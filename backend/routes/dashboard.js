import express from "express";
import { protect } from "../middleware/verifyToken.js";
import { registerEmployee } from "../controllers/createEmployee.js";

const router = express.Router();

//Create employee
router.post("/createUser", protect, registerEmployee);

export default router;
