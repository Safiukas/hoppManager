import mongoose from "mongoose";

const ShiftReportSchema = new mongoose.Schema({
  hopper: {
    type: String,
    required: true,
  },
  batteries: {
    type: String,
    require: true,
  },
  hoppHikes: {
    type: String,
    require: true,
  },
  fixed: {
    type: String,
    require: true,
  },
  leftMtc: {
    type: String,
    require: true,
  },
  rebalance: {
    type: String,
    require: true,
  },
  comments: {
    type: String,
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

export default mongoose.model("ShiftReport", ShiftReportSchema);
