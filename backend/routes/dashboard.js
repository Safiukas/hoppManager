import express from "express";
import { protect } from "../middleware/verifyToken.js";
import { getCarReport } from "../controllers/dailyCar.js";
import { createEmployee } from "../controllers/createEmployee.js";

const router = express.Router();

//POST employee
router.post("/team/createEmployee", protect, createEmployee);

//GET employee

//UPDATE employee

//GET daily cara reports >>> Dashboard
router.get("/allCarReports", protect, getCarReport);

export default router;
