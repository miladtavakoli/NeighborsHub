import Apis from "services/apis";
import { startLoading, endLoading } from "store/slices/appSlices";

export const googleAuth = (data) => async (dispatch) => {
  dispatch(startLoading());
  return Apis.auth
    .googleAuth(data)
    .then((res) => {
      localStorage.setItem("token", res.access_token);
      return res;
    })
    .finally(() => dispatch(endLoading()));
};

export const sendOtpToEmail = (data) => async (dispatch) => {
  dispatch(startLoading());
  return Apis.auth
    .sendOtpToEmail(data)
    .then((res) => {
      return res;
    })
    .finally(() => dispatch(endLoading()));
};

export const verifyEmailOtp = (data) => async (dispatch) => {
  dispatch(startLoading());
  return Apis.auth
    .verifyEmailOtp(data)
    .then((res) => {
      return res;
    })
    .finally(() => dispatch(endLoading()));
};

export const sendOtpToPhone = (data) => async (dispatch) => {
  dispatch(startLoading());
  return Apis.auth
    .sendOtpToPhone(data)
    .then((res) => {
      return res;
    })
    .finally(() => dispatch(endLoading()));
};

export const verifyPhoneOtp = (data) => async (dispatch) => {
  dispatch(startLoading());
  return Apis.auth
    .verifyPhoneOtp(data)
    .then((res) => {
      return res;
    })
    .finally(() => dispatch(endLoading()));
};
