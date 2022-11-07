import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import carReportService from "./carReportService";

const initialState = {
  carReports: [],
  singleReport: [],
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

//GET car reports
export const getCarReports = createAsyncThunk(
  "/dashboard/allCarReports",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await carReportService.getCarReports(token);
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

// GET car report by ID
export const getCarReport = createAsyncThunk(
  "/dashboard/dailyCarReports/:id",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await carReportService.getCarReportById(id, token);
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

export const carReportSlice = createSlice({
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
        state.carReports.push(action.payload);
      })
      .addCase(createCarReport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCarReports.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarReports.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.carReports = action.payload;
      })
      .addCase(getCarReports.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCarReport.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarReport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleReport = action.payload;
      })
      .addCase(getCarReport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = carReportSlice.actions;
export default carReportSlice.reducer;
