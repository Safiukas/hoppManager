import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import carReportService from "./carReportService";

const initialState = {
  carReports: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new shift report
export const createCarReport = createAsyncThunk(
  "home/carReport/create",
  async (carReportData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await carReportService.createCarReport(carReportData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const cartReportSlice = createSlice({
  name: "carReport",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCarReport.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCarReport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.shiftReports.push(action.payload);
      })
      .addCase(createCarReport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = cartReportSlice.actions;
export default cartReportSlice.reducer;
