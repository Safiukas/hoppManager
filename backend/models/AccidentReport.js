const mongoose = require("mongoose");

const AccidentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
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

module.exports = mongoose.model("Accident", AccidentSchema);
