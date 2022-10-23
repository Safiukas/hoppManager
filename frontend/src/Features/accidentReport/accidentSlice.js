import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accidentService from "./accidentService";

const initialState = {
  accidents: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new accident report
export const createAccident = createAsyncThunk(
  "home/create",
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

// Get accident reports
export const getAccidents = createAsyncThunk(
  "accidents/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await accidentService.getAccidents(token);
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
        state.accidents.push(action.payload);
      })
      .addCase(createAccident.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAccidents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAccidents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.accidents = action.payload;
      })
      .addCase(getAccidents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = accidentSlice.actions;
export default accidentSlice.reducer;
