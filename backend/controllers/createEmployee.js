import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

// @desc    Register new user
// @route   POST /api/dashboard
// @access  Private
export const registerEmployee = asyncHandler(async (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    phoneNumber,
    email,
    role,
    password,
    confirmPassword,
  } = req.body;

  if (
    !firstName ||
    !middleName ||
    !lastName ||
    !phoneNumber ||
    !email ||
    !role ||
    !password ||
    !confirmPassword
  ) {
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
    middleName,
    lastName,
    phoneNumber,
    email,
    role,
    password: hashedPassword,
  });

  if (employee) {
    res.status(201).json({
      _id: employee.id,
      firstName: employee.firstName,
      middleName: employee.middleName,
      lastName: employee.lastName,
      phoneNumber: employee.phoneNumber,
      email: employee.email,
      role: employee.role,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export default {
  registerEmployee,
};
