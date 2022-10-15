import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
});

export default mongoose.model("User", UserSchema);
