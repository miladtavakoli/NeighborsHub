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
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PersonIcon from "@mui/icons-material/Person";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSnackbar } from "notistack";

const LOCATION_STATUS = {
  INIT: "INIT",
  MAP: "MAP",
  ADDRESS: "ADDRESS",
  MAP_ADDRESS: "MAP_ADDRESS",
};

const PersonalData = () => {
  const [loading, setLoading] = useState(false);
  const [locationState, setLocationState] = useState(LOCATION_STATUS.MAP);
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [countries, setCountries] = useState(null);
  const [mapCenter, setMapCenter] = useState();
  const [zoom, setZoom] = useState(0);
  const [selectedPoint, setSelectedPoint] = useState([null, null]);
  const [mapAddress, setMapAddress] = useState("");
  const [mapAddressDetails, setMapAddressDetails] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleOpenAddressModal = () => {
    setOpen(true);
  };

  const handleBack = (value) => {
    setLocationState(value);
  };

  // const handleApiLocation = async () => {
  //   const response = await APIS.address.getIpLocation();
  //   if (response?.data) {
  //     if (response.data.longitude && response.data.latitude)
  //       setMapCenter([response.data.longitude, response.data.latitude]);
  //   } else {
  //     setZoom(1);
  //     setMapCenter([0, 0]);
  //   }
  // };

  // useEffect(() => {
  //   if (locationState === LOCATION_STATUS.MAP)
  //     (async () => {
  //       if (navigator?.geolocation?.getCurrentPosition) {
  //         navigator.geolocation.getCurrentPosition(
  //           (position) => {
  //             setMapCenter([
  //               position.coords.longitude,
  //               position.coords.latitude,
  //             ]);
  //           },
  //           async () => {
  //             handleApiLocation();
  //           }
  //         );
  //       } else {
  //         handleApiLocation();
  //       }
  //     })();
  // }, [locationState]);

  const handleSetSelectedLocation = (location) => {
    setSelectedPoint(location);
  };

  const handleMapSubmit = async () => {
    setLoading(true);
    const result = await APIS.address.turnCordinateToAddress(selectedPoint);
    if (result?.data?.display_name) {
      setLocationState(LOCATION_STATUS.MAP_ADDRESS);
      setMapAddress(result.data.display_name);
    }
    setLoading(false);
  };

  const handleMapAddressSubmit = async () => {
    setLoading(true);
    const result = await APIS.address.createAddress({
      location: {
        type: "Point",
        coordinates: [selectedPoint[0], selectedPoint[1]],
      },
      street: mapAddress + ", " + mapAddressDetails,
      is_main_address: true,
      is_public: true,
      city_id: 1,
    });
    if (result) {
      const address = result.data?.data?.address?.street;
      setAddress(address);
      handleClose();
      enqueueSnackbar("Location Added successfuly", { variant: "success" });
    }
    setLoading(false);
  };

  const handleMapAddressChanged = (e) => {
    setMapAddress(e.target.value);
  };

  const handleMapAddressDetailsChanged = (e) => {
    setMapAddressDetails(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    setLocationState(LOCATION_STATUS.MAP);
    setMapAddress("");
    setMapAddressDetails("");
    setSelectedPoint([null, null]);
  };
  return (
    <Grid container direction="column" alignItems={"center"}>
      <Avatar
        alt="Remy Sharp"
        // src="/static/images/avatar/1.jpg"
        sx={{ width: "100px", height: "100px", my: 3 }}
      />
      <TextField
        fullWidth
        sx={{ my: 1 }}
        label="first name"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        sx={{ my: 1 }}
        label="last name"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        sx={{ my: 1 }}
        label="phoneNumber"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <PhoneIphoneIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        sx={{ my: 1 }}
        label="email"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button sx={{ mt: 2 }} variant="contained" fullWidth color="primary">
        submit
      </Button>
      <Divider sx={{ width: "100%", my: 3 }} />
      <Typography sx={{ color: "gray" }}>Location Information</Typography>
      <TextField
        onClick={handleOpenAddressModal}
        fullWidth
        sx={{ my: 1 }}
        label="address"
        value={address}
        multiline
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <LocationOnIcon />
            </InputAdornment>
          ),
        }}
      />

      <Modal
        open={open}
        onClose={handleClose}
        width="sm"
        handleBack={Boolean(locationState) && handleBack}
      >
        <Grid
          container
          alignItems={"space-between"}
          alignContent={"center"}
          sx={{ minHeight: "300px" }}
        >
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
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
              {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            </>
          ) : locationState === LOCATION_STATUS.MAP ? (
            <Grid sx={{ height: "500px" }} container direction={"column"}>
              {/* <Grid>
                <IconButton onClick={() => handleBack(LOCATION_STATUS.INIT)}>
                  <KeyboardBackspaceIcon />
                </IconButton>
              </Grid> */}
              <Grid>
                <Typography textAlign={"center"} sx={{ color: "gray" }}>
                  Select your location on the map
                </Typography>
              </Grid>
              <Grid sx={{ flex: 1, mt: 1 }}>
                <Map
                  center={mapCenter}
                  zoom={zoom}
                  onClick={handleSetSelectedLocation}
                />
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={handleMapSubmit}
                  disabled={!selectedPoint[0] && !selectedPoint[1]}
                >
                  {!selectedPoint[0] && !selectedPoint[1]
                    ? "Click your position on map"
                    : "Submit"}
                </Button>
              </Grid>
              {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            </Grid>
          ) : locationState === LOCATION_STATUS.MAP_ADDRESS ? (
            <Grid
              sx={{ height: "auto" }}
              container
              direction={"column"}
              justifyContent={"flex-start"}
            >
              <Grid>
                <IconButton onClick={() => handleBack(LOCATION_STATUS.MAP)}>
                  <KeyboardBackspaceIcon />
                </IconButton>
              </Grid>
              <Grid container justifyContent={"center"}>
                <Typography textAlign={"center"} sx={{ color: "gray" }}>
                  Is this Address yours? You can edit it if there is error on
                  it.
                </Typography>
              </Grid>
              <Grid
                container
                direction={"column"}
                sx={{ mt: 3, px: 1, flex: 1 }}
              >
                <TextField
                  value={mapAddress}
                  label={"address"}
                  fullWidth
                  onChange={handleMapAddressChanged}
                  // onChange={(e) => handleAddressListChange(key, e.target.value)}
                  sx={{ mb: 2 }}
                  multiline
                />
                <TextField
                  value={mapAddressDetails}
                  label={"Details of address like building number and etc"}
                  fullWidth
                  onChange={handleMapAddressDetailsChanged}
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
                  onClick={handleMapAddressSubmit}
                >
                  Submit
                </Button>
              </Grid>
              {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            </Grid>
          ) : locationState === LOCATION_STATUS.ADDRESS ? (
            <Grid
              sx={{ height: "auto" }}
              container
              direction={"column"}
              justifyContent={"space-evenly"}
            >
              <Grid>
                <IconButton onClick={() => handleBack(LOCATION_STATUS.INIT)}>
                  <KeyboardBackspaceIcon />
                </IconButton>
              </Grid>
              <Grid sx={{ flex: 1 }}>
                <TextField
                  value={mapAddress}
                  label={"address"}
                  fullWidth
                  onChange={handleMapAddressChanged}
                  // onChange={(e) => handleAddressListChange(key, e.target.value)}
                  sx={{ mb: 2 }}
                  multiline
                  minRows={3}
                />
                <TextField
                  value={mapAddress}
                  label={"Details of address like building number and etc"}
                  fullWidth
                  onChange={handleMapAddressChanged}
                  // onChange={(e) => handleAddressListChange(key, e.target.value)}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                Submit
              </Button>
            </Grid>
          ) : null}
        </Grid>
      </Modal>

      <Backdrop
        sx={{ color: "#fff", zIndex: 1399 }}
        open={loading}
        onClick={() => {}}
      >
        <CircularProgress sx={{ color: "white" }} />
      </Backdrop>
    </Grid>
  );
};

export default PersonalData;
