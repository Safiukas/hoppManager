import express from "express";
import {
  createAccidentReport,
  createShiftReport,
  getAccidentReports,
} from "../controllers/captainHome.js";
import { createCarReport, getCarReport } from "../controllers/dailyCar.js";
import { protect } from "./../middleware/verifyToken.js";

const router = express.Router();

//Create Accident Report
router.post("/accidentReport", protect, createAccidentReport);
router.get("/allAccidents", getAccidentReports);
// router.get("/accidentReport/:id", protect);

//Create Shift Report
router.post("/shiftReport", protect, createShiftReport);

//Create Daily Car Report
router.post("/carReport/create", protect, createCarReport);
//GET daily cara reports >>> Dashboard
router.get("/dashboard/allCarReports", protect, getCarReport);

export default router;
