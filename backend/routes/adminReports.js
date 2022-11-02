import express from "express";
import { protect } from "../middleware/verifyToken.js";
import { getCarReport, getReport } from "../controllers/dailyCar.js";

const router = express.Router();

// DEILIBILAR
//GET ALL daily cars reports
router.get("/", protect, getCarReport);

//GET SINGLE daily car report
router.get("/:id", protect, getReport);

export default router;
