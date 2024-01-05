import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const userSlices = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlices.actions;

export default userSlices.reducer;
