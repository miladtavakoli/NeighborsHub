import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  locationPosts: [],
  myPosts: [],
  uniqueLocation: [],
  categories: [],
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
      state.uniqueLocation = [
        // ...state.uniqueLocation,
        ...payload.map((item) => item.location.coordinates),
        // .filter(
        //   (item) =>
        //     !state.uniqueLocation.find(
        //       (item2) => item2[0] === item[0] && item2[1] !== item[0]
        //     )
        // ),
      ];
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
    like: (state, { payload }) => {
      state.posts = state.posts.map((item) =>
        item.id === payload.id ? { ...item, is_user_liked: true } : item
      );
      state.locationPosts = state.locationPosts.map((item) =>
        item.id === payload.id ? { ...item, is_user_liked: true } : item
      );
    },
    deleteLike: (state, { payload }) => {
      state.posts = state.posts.map((item) =>
        item.id === payload.id ? { ...item, is_user_liked: false } : item
      );
      state.locationPosts = state.locationPosts.map((item) =>
        item.id === payload.id ? { ...item, is_user_liked: false } : item
      );
    },
    categories: (state, { payload }) => {
      state.categories = payload;
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
  like,
  deleteLike,
  categories,
} = postsSlices.actions;

export const postsSelector = (state) => state.posts.posts;
export const myPostsSelector = (state) => state.posts.myPosts;
export const uniqueLocationSelector = (state) => state.posts.uniqueLocation;
export const locationPostSelector = (state) => state.posts.locationPosts;
export const categoriesSelector = (state) => state.posts.categories;

export default postsSlices.reducer;
