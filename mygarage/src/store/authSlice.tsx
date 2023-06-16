import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  } as AuthState,
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
export default authSlice.reducer;

export const selectIsAuthenticated = createSelector(
  (state: { auth: AuthState }) => state.auth.isAuthenticated,
  (isAuthenticated) => isAuthenticated
);
