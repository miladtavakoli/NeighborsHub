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
        const defaultAddress = res.addresses.results.find(
          (item) => item.is_main_address
        );
        const cordinates = defaultAddress.location.coordinates;
        dispatch(
          getUniqueLocation({
            offset: 0,
            limit: 1000,
            count: 1000,
          })
        );
        dispatch(getMyPosts());
        dispatch(
          getPosts({
            lat: cordinates[0],
            long: cordinates[1],
            zoom: 1000,
            offset: "0",
            limit: 30,
          })
        );
        dispatch(myInfoAction());
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
