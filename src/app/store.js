import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/InfoSlice";
import planReducer from "../features/planSlice";
import addsOnReducer from "../features/addsOnSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    plan: planReducer,
    addsOn: addsOnReducer,
  },
});
