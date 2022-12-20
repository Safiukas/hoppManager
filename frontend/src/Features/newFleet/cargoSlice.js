import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cargoService from "./cargoService";

const initialState = {
  allCargos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//new cargo
export const createNewCargo = createAsyncThunk(
  "dashboard/fleet/createNewCargo",
  async (cargoData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await cargoService.createCargo(cargoData, token);
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

// GET ALL cargos
export const getCargos = createAsyncThunk(
  "/dashboard/allFleet/cargos",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await cargoService.getCargos(token);
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

export const cargoSlice = createSlice({
  name: "cargo",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCargos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCargos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allCargos = action.payload;
      })
      .addCase(getCargos.rejected, (state, action) => {
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

export const { reset } = cargoSlice.actions;
export default cargoSlice.reducer;
