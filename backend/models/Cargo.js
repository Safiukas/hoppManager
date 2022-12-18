import mongoose, { Schema } from "mongoose";

const CargoSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    licensePlate: {
      type: String,
      require: true,
    },
    mileage: {
      type: Number,
      require: true,
    },
    qrCode: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    model: {
      type: String,
      require: true,
    },
    image: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Cargo", CargoSchema);
