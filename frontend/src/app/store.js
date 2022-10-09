import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Auth/authSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
