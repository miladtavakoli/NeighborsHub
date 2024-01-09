import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addresses: [],
};

const userSlices = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMyAddresses: (state, { payload }) => {
      state.addresses = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMyAddresses } = userSlices.actions;

export const myAddressesSelector = (state) => state.user.addresses;

export default userSlices.reducer;
