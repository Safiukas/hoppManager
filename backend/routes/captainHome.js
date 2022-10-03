const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.route("/home").get(protect, getHome);

module.exports = router;
