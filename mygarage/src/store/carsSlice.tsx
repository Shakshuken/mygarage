import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    data: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    setCars: (state, action) => {
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

export const { setCars, setError } = carsSlice.actions;

export default carsSlice.reducer;
