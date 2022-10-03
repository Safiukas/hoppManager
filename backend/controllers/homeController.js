const asyncHandler = require("express-async-handler");

// @desc    Get Captain Home page
// @route   GET /home
// @access  Private
const captainHome = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});
