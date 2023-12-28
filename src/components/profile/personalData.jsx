import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Map from "components/map/map";
import Modal from "components/modal/modal";
import { useInputHandler } from "hooks/useInputHandler";
import PlaceIcon from "@mui/icons-material/Place";
import TitleIcon from "@mui/icons-material/Title";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";
import Select from "react-select";
import axios from "axios";
import APIS from "services/apis";

const LOCATION_STATUS = {
  INIT: "INIT",
  MAP: "MAP",
  ADDRESS: "ADDRESS",
};

const PersonalData = () => {
  const [locationState, setLocationState] = useState(LOCATION_STATUS.INIT);
  const [open, setOpen] = useState(false);
  const address = useInputHandler("");
  const [countries, setCountries] = useState(null);
  const [location, setLocation] = useState();
  // const addressCountryOptions = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  const handleOpenAddressModal = () => {
    !address.value && setOpen(true);
  };

  const handleBack = (value) => {
    setLocationState(value);
  };

  useEffect(() => {
    console.log(location, "ggggg");
  }, [location]);

  const handleApiLocation = async () => {
    const response = await APIS.address.getIpLocation();
    if (response?.data) {
      if (response.data.longitude && response.data.latitude)
        setLocation([response.data.longitude, response.data.latitude]);
    }
  };

  useEffect(() => {
    (async () => {
      if (navigator?.geolocation?.getCurrentPosition) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation([position.coords.longitude, position.coords.latitude]);
          },
          async () => {
            handleApiLocation();
          }
        );
      } else {
        handleApiLocation();
      }
    })();
    // navigator?.geolocation?.getCurrentPosition((position) => {
    //   console.log(position.coords.latitude, position.coords.longitude);
    // });
  }, []);

  return (
    <Grid container direction="column" alignItems={"center"}>
      <Avatar
        alt="Remy Sharp"
        // src="/static/images/avatar/1.jpg"
        sx={{ width: "100px", height: "100px", my: 3 }}
      />
      <TextField fullWidth sx={{ my: 1 }} label="first name" />
      <TextField fullWidth sx={{ my: 1 }} label="last name" />
      <TextField fullWidth sx={{ my: 1 }} label="phoneNumber" />
      <TextField fullWidth sx={{ my: 1 }} label="email" />
      <TextField
        onClick={handleOpenAddressModal}
        fullWidth
        sx={{ my: 1 }}
        label="address"
      />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        width="sm"
        handleBack={Boolean(locationState) && handleBack}
      >
        <Grid
          container
          alignItems={"space-between"}
          alignContent={"center"}
          sx={{ minHeight: "300px" }}
        >
          {locationState === LOCATION_STATUS.INIT ? (
            <>
              <Typography textAlign={"center"} sx={{ width: "100%" }}>
                enter you address using one of this methods
              </Typography>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => setLocationState(LOCATION_STATUS.MAP)}
              >
                <PlaceIcon sx={{ color: "white", mr: 1 }} />
                Locate On Map
              </Button>
              <Button
                fullWidth
                color="secondary"
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => setLocationState(LOCATION_STATUS.ADDRESS)}
              >
                <TitleIcon sx={{ color: "white", mr: 1 }} />
                Enter Address
              </Button>
            </>
          ) : locationState === LOCATION_STATUS.MAP ? (
            <Grid sx={{ height: "500px" }} container direction={"column"}>
              <Grid>
                <IconButton onClick={() => handleBack(LOCATION_STATUS.INIT)}>
                  <KeyboardBackspaceIcon />
                </IconButton>
              </Grid>
              <Grid sx={{ flex: 1, mt: 1 }}>
                <Map center={location} />
              </Grid>
              <Grid>
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          ) : locationState === LOCATION_STATUS.ADDRESS ? (
            <Grid sx={{ height: "500px" }} container direction={"column"}>
              <Grid>
                <IconButton onClick={() => handleBack(LOCATION_STATUS.INIT)}>
                  <KeyboardBackspaceIcon />
                </IconButton>
              </Grid>
              <Grid sx={{ flex: 1, mt: 1 }}>
                <Map center={location} />
              </Grid>
              <Grid>
                <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Modal>
      {/* <Divider sx={{ width: "100%", my: 2 }} />
      <FormControl sx={{ width: "100%", mt: 1 }}>
        <FormLabel id="demo-radio-buttons-group-label">
          Enter your Adress using one of this method:
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: 1,
            justifyContent: "space-evenly",
          }}
          onChange={handleChangeTab}
          value={locationTab}
        >
          <FormControlLabel value={0} control={<Radio />} label="Using Map" />
          <FormControlLabel
            value={1}
            control={<Radio />}
            label="Enter Adress"
          />
        </RadioGroup>
      </FormControl>
      {locationTab == 0 ? (
        <Grid container sx={{ height: "300px", width: "90%" }}>
          <Map />
        </Grid>
      ) : (
        <TextField fullWidth sx={{ my: 1 }} label="address" />
      )} */}

      <Button sx={{ mt: 2 }} variant="contained" fullWidth color="primary">
        submit
      </Button>
    </Grid>
  );
};

export default PersonalData;
