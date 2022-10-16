import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Auth/authSlice";
import shiftReducer from "../Features/shiftReport/shiftReportSlice";
import accidentReducer from "../Features/accidentReport/accidentSlice";
import dailyCarReducer from "../Features/carReport/carReportSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    shift: shiftReducer,
    accident: accidentReducer,
    carReport: dailyCarReducer,
  },
});
