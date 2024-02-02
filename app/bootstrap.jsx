"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyAddresses } from "store/actions/userActions";
import {
  getPosts,
  getMyPosts,
  getUniqueLocation,
} from "store/actions/postsActions";
import { myInfoAction } from "store/actions/userActions";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { loadingSelector } from "store/slices/appSlices";

const Bootstrap = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadingSelector) > 0;
  const [firstLoading, setFirstLoading] = useState(true);

  useEffect(() => {
    dispatch(getMyAddresses())
      .then((res) => {
        setFirstLoading(false);
        dispatch(myInfoAction());
        dispatch(getMyPosts());
      })
      .catch(() => setFirstLoading(false));
  }, []);

  return (
    <>
      {!firstLoading && children}
      <Backdrop sx={{ zIndex: 1395 }} open={isLoading} onClick={() => {}}>
        {isLoading && (
          <CircularProgress sx={{ color: "white", zIndex: 1399 }} />
        )}
      </Backdrop>
    </>
  );
};

export default Bootstrap;
