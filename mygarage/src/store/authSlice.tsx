import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export const selectIsAuthenticated = (state: any) => state.auth.isAuthenticated;

export default authSlice.reducer;
