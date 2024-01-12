import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import PlaceIcon from "@mui/icons-material/Place";
import AddressList from "components/profile/addresses/addressList";
import AddressesModal from "components/profile/addresses/addressesModal";
import { useState } from "react";

const Addresses = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container direction="column">
      <Grid container justifyContent={"flex-end"}>
        <Button variant="contained" onClick={handleOpenModal}>
          <PlaceIcon />
          Add New Address
        </Button>
      </Grid>
      <Grid
        container
        direction={"column"}
        sx={{ height: "calc( 100vh - 330px )", overflow: "auto", mt: 1 }}
      >
        <AddressList />
      </Grid>
      <AddressesModal open={open} handleClose={handleClose} />
    </Grid>
  );
};

export default Addresses;
