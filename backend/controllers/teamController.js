import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import SendInvite from "../middleware/mailer.js";

// @desc    Register new user
// @route   POST /api/dashboard/team/createEmployee
// @access  Private
export const createEmployee = asyncHandler(async (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    phoneNumber,
    email,
    role,
    password,
  } = req.body;

  if (!firstName || !lastName || !phoneNumber || !email || !role || !password) {
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

//@desc Invite employee manager enters employee email to send invitation link
//@route POST /team/inviteEmployee
//@access Private
export const inviteEmployee = async (req, res) => {
  try {
    //GET user email
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(500)
        .json({ msg: "No user in database with this email!" });
    } else {
      // Access token
      const secret = process.env.JWT + User.password;
      const token = jwt.sign({ id: user._id }, secret, { expiresIn: "30m" });

      const firstName = user.firstName;
      SendInvite({ email, firstName, link });

      const link = `http://localhost:3000/api/auth/invitationLink/${user.id}/${token}`;
      await res.status(200).json({ msg: "Link has been sent to employee!" });
    }
  } catch (error) {
    console.log(error);
  }
};

//  @desc Invite employee manager enters employee email to send invitation link
//  @route GET http://localhost:3000/api/auth/invitationLink/:id/:token
//  @access LIMITED
export const invitationLink = async (req, res) => {
  const { id, token } = req.params;

  const user = await User.findById(id);

  // id exists ?
  if (!user) {
    return res.send("User not exists!");
  }

  const secret = process.env.JWT + User.password;
  try {
    const payload = jwt.verify(token, secret);
    await res.send(user.email);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

// @desc Handle new password change
// @route POST http://localhost:3000/api/auth/invitationLink/:id/:token
// @access LIMITED
export const changePassword = async (req, res) => {
  const { id, token } = req.params;
  const { password, password2 } = req.body;

  const user = await User.findById(id);

  // id exists ?
  if (!user) {
    return res.status(500).json({ msg: "User not exists!" });
  }

  const secret = process.env.JWT + User.password;

  try {
    const payload = jwt.verify(token, secret);
    const salt = bcrypt.genSaltSync(10);
    if (password === password2) {
      return res.status(500).json({ msg: "Passwords needs to match!" });
    } else {
      const hashPassword = bcrypt.hashSync(password, salt);
      await User.findOneAndUpdate({ id: id }, { password: hashPassword });
      res.status(200).json({ msg: "Password updated successfully!" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// @desc    List of Hoppers
// @route   GET /api/dashboard/team/hoppers
// @access  Private
export const getHoppers = async (req, res) => {
  try {
    const hoppers = await User.find({ role: "Hopper" });
    res.status(200).json(hoppers);
  } catch (error) {
    console.log(error);
  }
};

// @desc    List of Captains
// @route   GET /api/dashboard/team/hoppers
// @access  Private
export const getCaptains = async (req, res) => {
  try {
    const captains = await User.find({ role: "Captain" });
    res.status(200).json(captains);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getHoppers,
  getCaptains,
  createEmployee,
  inviteEmployee,
  changePassword,
};
