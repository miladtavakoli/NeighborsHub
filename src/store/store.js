import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "store/slices/userSlices";

const combinedReducers = combineReducers({
  user,
});

export default configureStore({
  reducer: combinedReducers,
});
