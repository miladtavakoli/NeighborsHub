import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticated: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authenticated } = authSlices.actions;

export const authSelector = (state) => state.auth.isAuthenticated;

export default authSlices.reducer;
