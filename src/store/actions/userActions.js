import Apis from "services/apis";
import {
  setMyAddresses,
  addNewAddress,
  setMyInfo,
} from "store/slices/userSlices";
import { startLoading, endLoading } from "store/slices/appSlices";
import { emailUpdate } from "store/slices/userSlices";

export const getMyAddresses = () => async (dispatch) => {
  dispatch(startLoading());
  return Apis.address
    .getListOfAddress()
    .then((res) => {
      dispatch(setMyAddresses(res.addresses?.results || []));
      return res;
    })
    .finally(() => dispatch(endLoading()));
};

export const addNewAddressAction = (payload) => async (dispatch) => {
  dispatch(startLoading());
  return Apis.address
    .createAddress({ ...payload })
    .then((res) => dispatch(addNewAddress(res.address)))
    .finally(() => dispatch(endLoading()));
};

export const myInfoAction = () => async (dispatch) => {
  dispatch(startLoading());
  return Apis.user
    .myInfo()
    .then((res) => dispatch(setMyInfo(res.user)))
    .finally(() => dispatch(endLoading()));
};

export const sendOtpToEmail = (data) => async (dispatch) => {
  dispatch(startLoading());
  return Apis.user
    .sendOtpToEmail(data)
    .then((res) => {
      return res;
    })
    .finally(() => dispatch(endLoading()));
};

export const verifyEmailOtp = (data) => async (dispatch) => {
  dispatch(startLoading());
  return Apis.user
    .verifyEmailOtp(data)
    .then((res) => {
      dispatch(emailUpdate());
      return res;
    })
    .finally(() => dispatch(endLoading()));
};

export const sendOtpToPhone = (data) => async (dispatch) => {
  dispatch(startLoading());
  return Apis.user
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
