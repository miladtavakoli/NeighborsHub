import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  myPosts: [],
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
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, setMyPosts, addPost } = postsSlices.actions;

export const postsSelector = (state) => state.posts.posts;

export default postsSlices.reducer;
