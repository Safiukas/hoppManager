import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import shiftReportService from "./shiftReportService";

const initialState = {
  shiftReports: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new shift report
export const createShiftReport = createAsyncThunk(
  "home/shiftReport/create",
  async (shiftReportData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await shiftReportService.createShiftReport(shiftReportData, token);
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

export const shiftSlice = createSlice({
  name: "shiftReport",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createShiftReport.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createShiftReport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.shiftReports.push(action.payload);
      })
      .addCase(createShiftReport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = shiftSlice.actions;
export default shiftSlice.reducer;
