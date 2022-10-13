import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accidentService from "./accidentService";

const initialState = {
  accident: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new accident report
export const createAccident = createAsyncThunk(
  "accidentReport/create",
  async (accidentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await accidentService.createAccidentReport(accidentData, token);
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

export const accidentSlice = createSlice({
  name: "accident",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccident.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAccident.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals.push(action.payload);
      })
      .addCase(createAccident.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = accidentSlice.actions;
export default accidentSlice.reducer;
