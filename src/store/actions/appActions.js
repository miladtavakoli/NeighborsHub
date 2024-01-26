import { clearPosts } from "store/slices/postsSlices";
import { clearApp } from "store/slices/appSlices";
import { clearUser } from "store/slices/userSlices";

export const clearStore = () => async (dispatch) => {
  dispatch(clearPosts());
  dispatch(clearApp());
  dispatch(clearUser());
};
