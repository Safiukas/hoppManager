import mongoose, { Schema } from "mongoose";

const ShiftReportSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ShiftReport", ShiftReportSchema);
