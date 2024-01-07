"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyAddresses } from "store/actions/userActions";
const Bootstrap = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyAddresses());
  }, []);
  
  return children;
};

export default Bootstrap;
