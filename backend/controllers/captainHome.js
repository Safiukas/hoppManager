import AccidentReport from "../models/AccidentReport.js";
import ShiftReport from "../models/ShiftReport.js";
import _, { result } from "underscore";
import User from "../models/User.js";

export const createAccidentReport = async (req, res, next) => {
  const newAccidentReport = new AccidentReport({
    userId: req.user.id,
    employee: req.body.employee,
    whatHappen: req.body.accident,
    whereHappen: req.body.location,
  });
  try {
    const savedAccident = await newAccidentReport.save();
    res.status(200).send(savedAccident);
    console.log("Accident report has been created");
  } catch (err) {
    next(err);
  }
};

export const getAccidentReports = async (req, res) => {
  try {
    const accidents = await AccidentReport.find().populate("userId");
    res.status(200).json(accidents);
  } catch (error) {}
};

export const createShiftReport = async (req, res, next) => {
  const newShiftReport = new ShiftReport({
    userId: req.userId,
    hopper: req.body.hopper,
    batteries: req.body.batteries,
    hoppHikes: req.body.hoppHikes,
    fixed: req.body.fixed,
    leftMtc: req.body.leftMtc,
    rebalance: req.body.rebalance,
    comments: req.body.comments,
  });
  try {
    const savedShiftReport = await newShiftReport.save();
    res.status(200).json(savedShiftReport);
    console.log("Shift report has been created");
  } catch (err) {
    next(err);
  }
};
