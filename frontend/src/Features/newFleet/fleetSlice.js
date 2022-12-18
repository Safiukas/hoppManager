import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fleetService from "./fleetService";

const initialState = {
  fleetInfo: [],
  allDeilibilars: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// new deilibilar
export const createNewDeilibilar = createAsyncThunk(
  "dashboard/fleet/createNewDeilibilar",
  async (fleetData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await fleetService.createNewDeilibilar(fleetData, token);
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

// GET ALL deilibilars
export const getDeilibilars = createAsyncThunk(
  "/dashboard/allFleet/deilibilar",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await fleetService.getDeilibilars(token);
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

//new cargo
export const createNewCargo = createAsyncThunk(
  "dashboard/fleet/createNewCargo",
  async (cargoData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await fleetService.createCargo(cargoData, token);
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

export const fleetSlice = createSlice({
  name: "fleet",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewDeilibilar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewDeilibilar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createNewDeilibilar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getDeilibilars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDeilibilars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allDeilibilars = action.payload;
      })
      .addCase(getDeilibilars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createNewCargo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewCargo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createNewCargo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = fleetSlice.actions;
export default fleetSlice.reducer;
