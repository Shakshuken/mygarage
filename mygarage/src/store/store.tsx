import { configureStore } from "@reduxjs/toolkit";
import driversReducer from "./driversSlice";
import carsReducer from "./carsSlice";

const store = configureStore({
  reducer: {
    drivers: driversReducer,
    cars: carsReducer,
  },
});

export default store;
