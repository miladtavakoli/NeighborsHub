import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  locationPosts: [],
  myPosts: [],
  uniqueLocation: [],
};

const postsSlices = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, { payload }) => {
      state.posts = payload;
    },
    setLocationPosts: (state, { payload }) => {
      state.locationPosts = payload;
    },
    removelocationPosts: (state) => {
      state.locationPosts = [];
    },
    addPost: (state, { payload }) => {
      state.myPosts = [...state.myPosts, payload];
    },
    setMyPosts: (state, { payload }) => {
      state.myPosts = payload;
    },
    setUniqueLocation: (state, { payload }) => {
      state.uniqueLocation = payload.map((item) => item.location.coordinates);
    },
    clearPosts: () => initialState,
    removePost: (state, { payload }) => {
      state.myPosts = state.myPosts.filter((item) => item.id !== payload.id);
    },
    moreDetailsPost: (state, { payload }) => {
      if (payload.is_owner) {
        state.myPosts = state.myPosts.map((item) =>
          item.id === payload.id ? { ...item, ...payload } : item
        );
      } else {
        state.posts = state.posts.map((item) =>
          item.id === payload.id ? { ...item, ...payload } : item
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPosts,
  setMyPosts,
  addPost,
  setUniqueLocation,
  clearPosts,
  removePost,
  setLocationPosts,
  removelocationPosts,
  moreDetailsPost,
} = postsSlices.actions;

export const postsSelector = (state) => state.posts.posts;
export const myPostsSelector = (state) => state.posts.myPosts;
export const uniqueLocationSelector = (state) => state.posts.uniqueLocation;
export const locationPostSelector = (state) => state.posts.locationPosts;

export default postsSlices.reducer;
