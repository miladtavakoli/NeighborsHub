import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "store/slices/userSlices";
import app from "store/slices/appSlices";
import posts from "store/slices/postsSlices";
import auth from "store/slices/authSlices";

const combinedReducers = combineReducers({
  user,
  app,
  posts,
  auth,
});

export default configureStore({
  reducer: combinedReducers,
});
