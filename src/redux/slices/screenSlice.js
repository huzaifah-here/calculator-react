import { createSlice } from "@reduxjs/toolkit";

const screenSlice = createSlice({
  name: "screen",
  initialState: {
    value: "0",
  },
  reducers: {
    setScreen(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setScreen } = screenSlice.actions;

export default screenSlice.reducer;
