import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";

const AddressesModalAddress = ({
  handleBack,
  handleSubmit,
  initialAddress,
}) => {
  const [address, setAddress] = useState(initialAddress);
  const [addressDetails, setAddressDetails] = useState("");

  const handleAddressChanged = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressDetailsChanged = (e) => {
    setAddressDetails(e.target.value);
  };

  return (
    <Grid
      sx={{ height: "100%" }}
      container
      direction={"column"}
      justifyContent={"flex-start"}
    >
      <Grid>
        <IconButton onClick={handleBack}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Typography textAlign={"center"} sx={{ color: "gray" }}>
          Is this Address yours? You can edit it if there is error on it.
        </Typography>
      </Grid>
      <Grid container direction={"column"} sx={{ mt: 3, px: 1, flex: 1 }}>
        <TextField
          value={address}
          label={"address"}
          fullWidth
          onChange={handleAddressChanged}
          // onChange={(e) => handleAddressListChange(key, e.target.value)}
          sx={{ mb: 2 }}
          multiline
        />
        <TextField
          value={addressDetails}
          label={"Details of address like building number and etc"}
          fullWidth
          onChange={handleAddressDetailsChanged}
          // onChange={(e) => handleAddressListChange(key, e.target.value)}
          sx={{ mb: 2 }}
        />
        {/* {Object.keys(addressList).map((key) => (
              <TextField
                key={key}
                value={addressList[key]}
                label={key}
                fullWidth
                onChange={(e) =>
                  handleAddressListChange(key, e.target.value)
                }
                sx={{ mb: 2 }}
              />
            ))} */}
      </Grid>
      <Grid container sx={{ px: 1 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => handleSubmit(address, addressDetails)}
        >
          Submit
        </Button>
      </Grid>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
    </Grid>
  );
};

export default AddressesModalAddress;
