import { useState } from "react";
import Grid from "@mui/material/Grid";
import Modal from "components/modal/modal";
import AddressModalMap from "./addressModalMap";
import AddressModalAddress from "./addressesModalAddress";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { startLoading, endLoading } from "store/slices/appSlices";
import Apis from "services/apis";
import { getMyAddresses } from "store/actions/userActions";

const STATUS = {
  MAP: "MAP",
  ADDRESS: "MAP_ADDRESS",
};

const initialState = {
  status: STATUS.MAP,
  selectedCordinate: [null, null],
};

const AddressesModal = ({ open, handleClose }) => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const innerHandleClose = () => {
    setState(initialState);
    handleClose();
  };

  const handleAddressBack = () => {
    setState((prevState) => ({ ...prevState, status: STATUS.MAP }));
  };

  const handleMapSubmit = async (selectedCordinate) => {
    dispatch(startLoading());
    const result = await Apis.address.turnCordinateToAddress(selectedCordinate);
    if (result?.data?.display_name) {
      setState((prevState) => ({
        ...prevState,
        status: STATUS.ADDRESS,
        address: result.data.display_name,
        selectedCordinate,
      }));
    } else {
      enqueueSnackbar("No GeoLoaction", { variant: "error" });
    }
    dispatch(endLoading());
  };

  const handleAddressSubmit = async (address, addressDetails) => {
    dispatch(startLoading());

    const result = await Apis.address.createAddress({
      location: {
        type: "Point",
        coordinates: [state.selectedCordinate[0], state.selectedCordinate[1]],
      },
      street: address + ", " + addressDetails,
      is_main_address: true,
      is_public: true,
      city_id: 1,
    });
    if (result) {
      const address = result.data?.data?.address?.street;
      const result2 = await getMyAddresses();
      dispatch(endLoading());

      enqueueSnackbar("Location Added successfuly", { variant: "success" });
      innerHandleClose();
    } else {
      dispatch(endLoading());
    }
  };

  return (
    <Modal open={open} onClose={innerHandleClose} width="sm">
      <Grid
        container
        alignItems={"space-between"}
        alignContent={"center"}
        sx={{ minHeight: "300px" }}
      >
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {state.status === STATUS.MAP ? (
          <AddressModalMap handleSubmit={handleMapSubmit} />
        ) : state.status === STATUS.ADDRESS ? (
          <AddressModalAddress
            handleBack={handleAddressBack}
            handleSubmit={handleAddressSubmit}
            initialAddress={state.address}
          />
        ) : null}
      </Grid>
    </Modal>
  );
};

export default AddressesModal;
