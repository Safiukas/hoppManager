import DailyCarReport from "../models/DailyCarReport.js";
import Cloudinary from "../middleware/cloudinary.js";

export const createCarReport = async (req, res, next) => {
  const { userId, licensePlate, mileage, generalCheck, serviceCheck, images } =
    req.body;

  try {
    //upload image to cloudinary
    let images = [...req.body.images];
    let imagesBuffer = [];

    for (let i = 0; i < images.length; i++) {
      const result = await Cloudinary.uploader.upload(images[i], {
        folder: "dailyCars",
        width: 1280,
        crop: "scale",
      });
      imagesBuffer.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesBuffer;

    const carReport = await DailyCarReport.create(req.body);
    res.status(200).json({ success: true, carReport });
    console.log("Car report has been created");
  } catch (err) {
    next(err);
  }
};

// const newCarReport = new DailyCarReport({
//   userId: req.userId,
//   licensePlate: req.body.licensePlate,
//   mileage: req.body.mileage,
//   generalCheck: req.body.generalCheck,
//   serviceCheck: req.body.serviceCheck,
//   images: imagesBuffer,
// });
