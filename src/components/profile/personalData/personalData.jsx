import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PersonIcon from "@mui/icons-material/Person";
import { useSnackbar } from "notistack";

const PersonalData = () => {
  const [address, setAddress] = useState("");
  const [countries, setCountries] = useState(null);
  const [mapCenter, setMapCenter] = useState();
  const [zoom, setZoom] = useState(0);
  const [selectedPoint, setSelectedPoint] = useState([null, null]);
  const [mapAddress, setMapAddress] = useState("");
  const [mapAddressDetails, setMapAddressDetails] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  // const handleApiLocation = async () => {
  //   const response = await Apis.address.getIpLocation();
  //   if (response?.data) {
  //     if (response.data.longitude && response.data.latitude)
  //       setMapCenter([response.data.longitude, response.data.latitude]);
  //   } else {
  //     setZoom(1);
  //     setMapCenter([0, 0]);
  //   }
  // };

  // useEffect(() => {
  //   if (locationState === STATUS.MAP)
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

  const handleRegister = async () => {
    // const result = await Apis.auth.register({
    //   email_mobile:
    // })
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
      <Button
        sx={{ mt: 2 }}
        variant="contained"
        fullWidth
        color="primary"
        onClick={handleRegister}
      >
        submit
      </Button>
    </Grid>
  );
};

export default PersonalData;
