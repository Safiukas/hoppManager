import express from "express";
import { protect } from "../middleware/verifyToken.js";
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

export default router;
