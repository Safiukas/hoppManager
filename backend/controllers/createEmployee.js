import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

// @desc    Register new user
// @route   POST /api/dashboard
// @access  Private
export const registerEmployee = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  // Check if user exists
  const employeeExists = await User.findOne({ email });

  if (employeeExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const employee = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  if (employee) {
    res.status(201).json({
      _id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export default {
  registerEmployee,
};