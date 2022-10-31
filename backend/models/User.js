import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    shiftReports: [
      {
        type: Schema.Types.ObjectId,
        ref: "ShiftReport",
      },
    ],
    accidentReports: [
      {
        type: Schema.Types.ObjectId,
        ref: "Accident",
      },
    ],
    dailyCarReports: [
      {
        type: Schema.Types.ObjectId,
        ref: "DailyCarReport",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
