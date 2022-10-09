import express from "express";
import {
  createAccidentReport,
  createShiftReport,
} from "../controllers/captainHome.js";
import { verifyToken } from "./../middleware/verifyToken.js";

const router = express.Router();

//Create Accident Report
router.post("/accidentReport", verifyToken, createAccidentReport);

//Create Shift Report
router.post("/shiftReport", verifyToken, createShiftReport);

//Create Daily Car Report

export default router;
