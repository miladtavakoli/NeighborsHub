import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { myAddressesSelector, updateMyAddress } from "store/slices/userSlices";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Apis from "services/apis";
import { startLoading, endLoading } from "store/slices/appSlices";
import { useSnackbar } from "notistack";

const AddressList = () => {
  const addresses = useSelector(myAddressesSelector);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleListItemClick = async (item) => {
    dispatch(startLoading());

    const result = await Apis.address.updateAddress({
      is_main_address: true,
      id: item.id,
    });
    if (result) {
      dispatch(updateMyAddress(result.address));
      enqueueSnackbar("Default Address Changed", { variant: "success" });
    }
    dispatch(endLoading());
  };

  return (
    <Grid container direction="column" sx={{ px: 1, flex: 1 }}>
      {addresses.length > 0 ? (
        <List component="nav" aria-label="main mailbox folders">
          {addresses.map((item, index) => (
            <ListItemButton
              selected={item.is_main_address}
              onClick={(event) => handleListItemClick(item)}
              key={item.id}
              sx={{
                border: "1px solid lightGray",
                borderRadius: "15px",
                mt: 1,
              }}
            >
              <ListItemText primary={item.street} />
            </ListItemButton>
          ))}
        </List>
      ) : (
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ flex: 1 }}
        >
          No Address
        </Grid>
      )}
    </Grid>
  );
};

export default AddressList;
