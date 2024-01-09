import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "store/slices/userSlices";
import app from "store/slices/appSlices";

const combinedReducers = combineReducers({
  user,
  app,
});

export default configureStore({
  reducer: combinedReducers,
});
