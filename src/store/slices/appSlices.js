import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: 0,
};

const appSlices = createSlice({
  name: "app",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading += 1;
    },
    endLoading: (state) => {
      if (state.loading) state.loading -= 1;
    },
    clearApp: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { startLoading, endLoading, clearApp } = appSlices.actions;

export const loadingSelector = (state) => state.app.loading;

export default appSlices.reducer;
