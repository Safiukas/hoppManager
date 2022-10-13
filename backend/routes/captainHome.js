import express from "express";
import {
  createAccidentReport,
  createShiftReport,
  createCarReport,
} from "../controllers/captainHome.js";
import { protect } from "./../middleware/verifyToken.js";

const router = express.Router();

//Create Accident Report
router.post("/accidentReport", protect, createAccidentReport);

//Create Shift Report
router.post("/shiftReport", protect, createShiftReport);

//Create Daily Car Report
router.post("/caraReport", protect, createCarReport);

export default router;
