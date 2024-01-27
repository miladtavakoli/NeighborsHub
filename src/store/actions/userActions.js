import Apis from "services/apis";
import {
  setMyAddresses,
  addNewAddress,
  setMyInfo,
} from "store/slices/userSlices";
import { startLoading, endLoading } from "store/slices/appSlices";

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
