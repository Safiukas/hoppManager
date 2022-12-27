import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (err) {
    next(err);
  }
};

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Change user password
// @route   UPDATE /api/home/profile
// @access  Private
export const changePassword = asyncHandler(async (req, res) => {
  const { password, newPassword, newPassword2 } = req.body;
  const { id } = req.params;

  const user = await User.findOne({ id });
  // Check if old password is correct

  try {
    await bcrypt.compare(password, user.password);
    if (newPassword === newPassword2) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.newPassword, salt);

      const updatedPassword = await User.findByIdAndUpdate(
        { _id: id },
        { password: hash },
        {
          new: true,
        }
      );
      updatedPassword.save();
      res.status(200).json(updatedPassword);
      console.log("Password successfully changed!");
    } else {
      res.status(400);
      throw new Error("Passwords don't match");
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
export const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate JWT
export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT, {
    expiresIn: "1d",
  });
};

export default {
  loginUser,
};
