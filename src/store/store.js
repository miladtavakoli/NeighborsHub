import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "store/slices/userSlices";
import app from "store/slices/appSlices";
import posts from "store/slices/postsSlices";

const combinedReducers = combineReducers({
  user,
  app,
  posts,
});

export default configureStore({
  reducer: combinedReducers,
});
