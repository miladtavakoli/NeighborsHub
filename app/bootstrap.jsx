"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myInfoAction } from "store/actions/userActions";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { loadingSelector } from "store/slices/appSlices";
const Bootstrap = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadingSelector) > 0;

  useEffect(() => {
    setTimeout(() => {
      dispatch(myInfoAction());
    }, 500);
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
