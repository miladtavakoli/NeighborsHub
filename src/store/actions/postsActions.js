import Apis from "services/apis";
// import { , addNewAddress } from "store/slices/userSlices";
import {
  addPost,
  setPosts,
  setMyPosts,
  removePost,
  setUniqueLocation,
  setLocationPosts,
} from "store/slices/postsSlices";
import { startLoading, endLoading } from "store/slices/appSlices";

export const getPosts = (data) => async (dispatch) => {
  // dispatch(startLoading());
  return Apis.posts.getPosts(data).then((res) => {
    console.log(res, "test");
    dispatch(setPosts(res.posts?.results || []));
  });
  // .finally(() => dispatch(endLoading()));
};

export const getLocationPosts = (data) => async (dispatch) => {
  dispatch(startLoading());
  return Apis.posts
    .getPosts(data)
    .then((res) => {
      dispatch(setLocationPosts(res.posts?.results || []));
      console.log(res, "test");
      return res;
    })
    .finally(() => dispatch(endLoading()));
};

export const getUniqueLocation = (data) => async (dispatch) => {
  // dispatch(startLoading());
  return Apis.posts.setUniqueLocation(data).then((res) => {
    console.log(res, "test");
    dispatch(setUniqueLocation(res.posts?.results || []));
  });
  // .finally(() => dispatch(endLoading()));
};

export const getMyPosts = () => async (dispatch) => {
  // dispatch(startLoading());
  return Apis.posts.getMyPosts().then((res) => {
    console.log(res, "test");
    dispatch(setMyPosts(res.posts?.results || []));
    return res;
  });
  // .finally(() => dispatch(endLoading()));
};

export const createPost = (data) => async (dispatch) => {
  dispatch(startLoading());
  return Apis.posts
    .createPost(data)
    .then((res) => {
      console.log(res, "test");
      dispatch(addPost(res.post || []));
    })
    .finally(() => dispatch(endLoading()));
};

export const deletePost = (data) => async (dispatch) => {
  dispatch(startLoading());
  return Apis.posts
    .deletePost(data)
    .then((res) => {
      console.log(res, "test");
      dispatch(removePost(data));
    })
    .finally(() => dispatch(endLoading()));
};
