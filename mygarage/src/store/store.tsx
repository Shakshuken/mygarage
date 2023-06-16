import { configureStore } from "@reduxjs/toolkit";
import driversReducer from "./driversSlice";
import carsReducer from "./carsSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    drivers: driversReducer,
    cars: carsReducer,
    auth: authReducer,
  },
});

export default store;
