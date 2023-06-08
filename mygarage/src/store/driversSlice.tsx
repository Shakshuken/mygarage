import { createSlice } from "@reduxjs/toolkit";

const driversSlice = createSlice({
  name: "drivers",
  initialState: {
    data: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    setDrivers: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.data = null;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setDrivers, setError } = driversSlice.actions;

export default driversSlice.reducer;
