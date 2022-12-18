import Fleet from "../models/Fleet.js";
import Cloudinary from "../middleware/cloudinary.js";
import Cargo from "../models/Cargo.js";

// POST new deilibilar
export const createFleet = async (req, res, next) => {
  const { licensePlate, mileage, qrCode, brand, model, generalCheck, image } =
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

//Get deilibilars
export const getDeilibilars = async (req, res) => {
  try {
    const deilibilars = await Fleet.find();
    res.status(200).json(deilibilars);
  } catch (error) {
    console.log(error);
  }
};

// POST new cargo vehicle
export const createCargo = async (req, res, next) => {
  const { licensePlate, mileage, qrCode, brand, model, generalCheck, image } =
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

    const cargoProfile = await Cargo.create(req.body);
    res.status(200).json({ success: true, cargoProfile });
    console.log("New cargo vehicle created!");
  } catch (error) {
    next(error);
  }
};

//GET cargo vehicles
export const getCargos = async (req, res) => {
  try {
    const cargos = await Cargo.find();
    res.status(200).json(cargos);
  } catch (error) {
    console.log(error);
  }
};
