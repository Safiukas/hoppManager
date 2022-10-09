import mongoose from "mongoose";

const AccidentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  employee: {
    type: String,
    required: true,
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
