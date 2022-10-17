import AccidentReport from "../models/AccidentReport.js";
import ShiftReport from "../models/ShiftReport.js";
import _, { result } from "underscore";
import cloudinary from "../middleware/cloudinary.js";
import fs from "fs";
import DailyCarReport from "../models/DailyCarReport.js";

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

export const createCarReport = async (req, res, next) => {
  // const files = req.files;
  const newCarReport = new DailyCarReport({
    userId: req.userId,
    mileage: req.body.mileage,
    generalCheck: req.body.generalCheck,
    serviceCheck: req.body.serviceCheck,
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });
  try {
    const result = await cloudinary.uploader.upload(images, {
      folder: "dailyCars",
    });
    //upload image to cloudinary
    // let urls = [];
    // let multiple = async (path) => await upload(path);
    // for (const file of files) {
    //   const { path } = file;

    //   const newPath = await multiple(path);
    //   urls.push(newPath);
    //   fs.unlinkSync(path);
    // }
    const savedCarReport = await newCarReport.save();
    res.status(200).json(savedCarReport);
    console.log("Car report has been created");
  } catch (err) {
    next(err);
  }
};
