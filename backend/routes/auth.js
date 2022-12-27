import express from "express";
import { invitationLink } from "../controllers/teamController.js";
import { loginUser } from "../middleware/authMiddleware.js";

const router = express.Router();

// //CREATE A USER
// router.post("/signup", signup)

//LOG IN
//@Route POST /api/auth
//@access Public
router.post("/login", loginUser);

//  Invite link
//  @Route
//  @access Limited
router.get("/invitationLink/:id/:token", invitationLink);

//  Password change
//  @Route /invitationLink/:id/:token
//  @access limited
router.post("/invitationLink/:id/:token");

export default router;
