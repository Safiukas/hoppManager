import Fleet from "../models/Fleet.js";
import Cloudinary from "../middleware/cloudinary.js";

// POST new fleet
export const createFleet = async (req, res, next) => {
  const { licensePlate, mileage, qrCode, make, model, generalCheck, image } =
    req.body;

  try {
    //upload image to cloudinary
    let image = [...req.body.image];
    let imagesBuffer = [];

    for (let i = 0; i < image.length; i++) {
      const result = await Cloudinary.uploader.upload(image[i], {
        folder: "dailyCars",
        width: 1280,
        crop: "scale",
      });
      imagesBuffer.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.image = imagesBuffer;

    const fleetProfile = await Fleet.create(req.body);
    res.status(200).json({ success: true, fleetProfile });
    console.log("New deilibilar created!");
  } catch (error) {
    next(error);
  }
};
