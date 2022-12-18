import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Auth/authSlice";
import accidentReducer from "../Features/accidentReport/accidentSlice";
import carReportReducer from "../Features/carReport/carReportSlice";
import teamReducer from "../Features/team/teamSlice";
import fleetReducer from "../Features/newFleet/fleetSlice";
import cargoReducer from "../Features/newFleet/cargoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    team: teamReducer,
    accident: accidentReducer,
    carReport: carReportReducer,
    fleet: fleetReducer,
    cargo: cargoReducer,
  },
});
