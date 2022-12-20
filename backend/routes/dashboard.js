import express from "express";
import { protect } from "../middleware/verifyToken.js";
import {
  createEmployee,
  getHoppers,
  getCaptains,
} from "../controllers/teamController.js";
import {
  createCargo,
  createFleet,
  getCargos,
  getDeilibilar,
  getDeilibilars,
} from "../controllers/fleet.js";

const router = express.Router();

//POST employee
router.post("/team/createEmployee", protect, createEmployee);

//UPDATE employee

//GET Hoppers
router.get("/team/hoppers", protect, getHoppers);

//GET Captains
router.get("/team/captains", protect, getCaptains);

// FLEET
// DEILIBILARS
//
// POST Deilibilar
router.post("/fleet/createNewDeilibilar", protect, createFleet);
// GET ALL deilibilars
router.get("/allFleet/deilibilar", protect, getDeilibilars);
// GET BY ID Deilibilar
router.get("/allFleet/deilibilar/:id", protect, getDeilibilar);

// CARGOS
// POST cargo vehicle
router.post("/fleet/createNewCargo", protect, createCargo);
// GET ALL cargo vehicles
router.get("/allFleet/cargo", protect, getCargos);

export default router;
