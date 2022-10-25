import mongoose, { Schema } from "mongoose";

const DailyCarReportSchema = new mongoose.Schema({
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  licensePlate: {
    type: String,
    required: true,
  },
  mileage: {
    type: String,
    require: true,
  },
  generalCheck: {
    type: [],
    require: true,
  },
  serviceCheck: {
    type: [],
    require: true,
  },
  images: [
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("DailyCarReport", DailyCarReportSchema);
