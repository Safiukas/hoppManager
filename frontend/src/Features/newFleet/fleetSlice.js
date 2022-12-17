import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fleetService from "./fleetService";

const initialState = {
  fleetInfo: [],
  cargoInfo: [],
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
      });
  },
});

export const { reset } = fleetSlice.actions;
export default fleetSlice.reducer;
