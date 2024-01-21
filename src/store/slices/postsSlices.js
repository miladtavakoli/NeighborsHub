import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
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
    addPost: (state, { payload }) => {
      state.myPosts = [...state.myPosts, payload];
    },
    setMyPosts: (state, { payload }) => {
      state.myPosts = payload;
    },
    setUniqueLocation: (state, { payload }) => {
      state.uniqueLocation = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, setMyPosts, addPost, setUniqueLocation } =
  postsSlices.actions;

export const postsSelector = (state) => state.posts.posts;
export const myPostsSelector = (state) => state.posts.myPosts;
export const uniqueLocationSelector = (state) => state.posts.uniqueLocation;

export default postsSlices.reducer;
