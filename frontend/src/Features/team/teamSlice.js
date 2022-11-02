import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import teamService from "./teamService";

const initialState = {
  employee: [],
  captain: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create user
export const createEmployee = createAsyncThunk(
  "dashboard/team/createEmployee",
  async (employeeData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await teamService.createEmployee(employeeData, token);
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

//Get Hoppers
export const getHoppers = createAsyncThunk(
  "dashboard/team/hoppers",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await teamService.getHoppers(token);
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

//Get Captains
export const getCaptains = createAsyncThunk(
  "dashboard/team/captains",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await teamService.getCaptains(token);
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

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employee.push(action.payload);
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getHoppers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHoppers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employee = action.payload;
      })
      .addCase(getHoppers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCaptains.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCaptains.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.captain = action.payload;
      })
      .addCase(getCaptains.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = teamSlice.actions;
export default teamSlice.reducer;
