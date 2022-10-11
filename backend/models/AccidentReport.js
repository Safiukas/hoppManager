import mongoose, { Schema } from "mongoose";

const AccidentSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  employee: {
    type: String,
    required: false,
  },
  whatHappen: {
    type: String,
    require: true,
  },
  whereHappen: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Accident", AccidentSchema);
