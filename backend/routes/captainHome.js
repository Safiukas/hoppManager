import express from "express";
import {
  createAccidentReport,
  createShiftReport,
} from "../controllers/captainHome.js";
import { createCarReport } from "../controllers/dailyCar.js";
import { protect } from "./../middleware/verifyToken.js";

const router = express.Router();

//Create Accident Report
router.post("/accidentReport", protect, createAccidentReport);

//Create Shift Report
router.post("/shiftReport", protect, createShiftReport);

//Create Daily Car Report
router.post("/carReport/create", protect, createCarReport);

export default router;
