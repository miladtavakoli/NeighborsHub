import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myInfo: {},
  addresses: [],
};

const userSlices = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMyAddresses: (state, { payload }) => {
      state.addresses = payload;
    },
    addNewAddress: (state, { payload }) => {
      state.addresses = [...state.addresses, payload];
    },

    updateMyAddress: (state, { payload }) => {
      state.addresses = state.addresses.map((item) =>
        item.id === payload.id ? payload : { ...item, is_main_address: false }
      );
    },
    clearUser: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { setMyAddresses, updateMyAddress, addNewAddress, clearUser } =
  userSlices.actions;

export const myAddressesSelector = (state) => state.user.addresses;

export default userSlices.reducer;
