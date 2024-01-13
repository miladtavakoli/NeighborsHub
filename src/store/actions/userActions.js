import Apis from "services/apis";
import { setMyAddresses, addNewAddress } from "store/slices/userSlices";

export const getMyAddresses = () => async (dispatch) => {
  const result = await Apis.address.getListOfAddress();
  if (result) {
    dispatch(setMyAddresses(result.addresses?.results || []));
  }
};
export const addNewAddressAction = (payload) => async (dispatch) => {
  const result = await Apis.address.createAddress({ ...payload });
  if (result) {
    dispatch(addNewAddress(result.address));
  }
};
