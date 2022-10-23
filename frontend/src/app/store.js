import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Auth/authSlice";
import accidentReducer from "../Features/accidentReport/accidentSlice";
import carReportReducer from "../Features/carReport/carReportSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accident: accidentReducer,
    carReport: carReportReducer,
  },
});
