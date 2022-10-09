import AccidentReport from "../models/AccidentReport.js";
import ShiftReport from "../models/ShiftReport.js";
import User from "../models/User.js";
import { createError } from "../middleware/errorMiddleware.js";

export const createAccidentReport = async (req, res, next) => {
  const newAccidentReport = new AccidentReport({
    userId: req.userId,
    ...req.body,
  });
  try {
    const savedAccident = await newAccidentReport.save();
    res.status(200).json(savedAccident);
  } catch (err) {
    next(err);
  }
};

export const createShiftReport = async (req, res, next) => {
  const newShiftReport = new ShiftReport({
    userId: req.userId,
    ...req.body,
  });
  try {
    const savedShiftReport = await newShiftReport.save();
    res.status(200).json(savedShiftReport);
  } catch (err) {
    next(err);
  }
};
