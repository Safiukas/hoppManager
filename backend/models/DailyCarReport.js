const mongoose = require("mongoose");

const DailyCarReportSchema = new mongoose.Schema({
  licensePlate: {
    type: String,
    required: true,
  },
  mileage: {
    type: String,
    require: true,
  },
  checkList: {
    type: [String],
    require: true,
  },
  images: {
    type: [String],
    require: true,
  },
  cloudinaryId: {
    type: [String],
    require: true,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("DailyCarReport", DailyCarReportSchema);
