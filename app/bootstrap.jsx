"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyAddresses } from "store/actions/userActions";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { loadingSelector } from "store/slices/appSlices";

const Bootstrap = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadingSelector) > 0;
  useEffect(() => {
    dispatch(getMyAddresses());
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
