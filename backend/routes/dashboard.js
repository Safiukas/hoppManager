import express from "express";
import { protect } from "../middleware/verifyToken.js";
import { getCarReport } from "../controllers/dailyCar.js";
import {
  createEmployee,
  getHoppers,
  getCaptains,
} from "../controllers/teamController.js";

const router = express.Router();

//POST employee
router.post("/team/createEmployee", protect, createEmployee);

//UPDATE employee

//GET Hoppers
router.get("/team/hoppers", protect, getHoppers);

//GET Captains
router.get("/team/captains", protect, getCaptains);

//GET daily cara reports >>> Dashboard
//TODO: Create and move to reportsController
router.get("/allCarReports", protect, getCarReport);

export default router;
