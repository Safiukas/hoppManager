import express from "express";
import { protect } from "../middleware/verifyToken.js";
import { createCarReport, getCarReport } from "../controllers/dailyCar.js";
import { registerEmployee } from "../controllers/createEmployee.js";

const router = express.Router();

//POST employee
router.post("/dashboard/team/createEmployee", protect, registerEmployee);

//GET employee

//UPDATE employee

//GET daily cara reports >>> Dashboard
router.get("/allCarReports", protect, getCarReport);

export default router;
