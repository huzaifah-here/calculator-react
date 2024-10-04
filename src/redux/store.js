// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./slices/screenSlice";
const store = configureStore({
  reducer: {
    screen: screenReducer,
  },
});
export default store;
