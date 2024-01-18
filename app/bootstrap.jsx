"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyAddresses } from "store/actions/userActions";
import { getPosts, getMyPosts } from "store/actions/postsActions";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { loadingSelector } from "store/slices/appSlices";

const Bootstrap = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadingSelector) > 0;

  useEffect(() => {
    dispatch(getMyAddresses()).then((res) => {
      const defaultAddress = res.addresses.results.find(
        (item) => item.is_main_address
      );
      const cordinates = defaultAddress.location.coordinates;
      dispatch(
        getPosts({
          lat: cordinates[0],
          long: cordinates[1],
          zoom: 200,
          search: "sdf",
          hashtag: "",
        })
      );
      dispatch(getMyPosts());
    });
  }, []);

  return (
    <>
      {children}
      <Backdrop sx={{ zIndex: 1395 }} open={isLoading} onClick={() => {}}>
        {isLoading && (
          <CircularProgress sx={{ color: "white", zIndex: 1399 }} />
        )}
      </Backdrop>
    </>
  );
};

export default Bootstrap;
