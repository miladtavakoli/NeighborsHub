"use client";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
// import { MuiTelInput } from "mui-tel-input";
// import ReactPhoneInput from 'react-phone-input-material-ui';
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import Typography from "@mui/material/Typography";
import APIS from "services/apis";
import { useSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import STATUS from "components/signup/status";

const GetEmailPhoneNumber = ({ emailPhoneNumber, setCurrentState }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    setCurrentState(STATUS.PASSWORD_CHECKING);
  };
  const handleSubmitOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    APIS.auth
      .optSending({
        mobile: emailPhoneNumber.value,
      })
      .then(() => {
        enqueueSnackbar("Code Sent", { variant: "success" });
        setCurrentState(STATUS.OTP_CHECKING);
      })
      .catch((message) => {
        enqueueSnackbar(message, { variant: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Container maxWidth="xs">
      <Card sx={{ p: 4 }}>
        <Typography textAlign={"center"} sx={{ mb: 2, color: "gray" }}>
          Enter Your Username
        </Typography>
        {/* <form style={{ width: "100%" }} onSubmit={handleSubmit}> */}
        <TextField
          sx={{ mt: 1 }}
          fullWidth
          variant="outlined"
          label="Email Or Phone Number"
          // autocomplete="off"
          name="your phone"
          {...emailPhoneNumber}
        />
        <Button
          sx={{ mt: 2 }}
          fullWidth
          variant="contained"
          type="submit"
          disabled={loading || !emailPhoneNumber.value}
          name="passwordLogin"
          onClick={handleSubmitPassword}
        >
          Login With Password
        </Button>
        <Button
          sx={{ mt: 1 }}
          fullWidth
          variant="contained"
          type="submit"
          color="secondary"
          name="otpLogin"
          disabled={
            loading || !emailPhoneNumber.value || isNaN(emailPhoneNumber.value)
          }
          onClick={handleSubmitOtp}
        >
          {loading ? (
            <CircularProgress size={25} sx={{ mx: 1 }} />
          ) : (
            "Login With OTP"
          )}
        </Button>
        {/* </form> */}
        <Divider sx={{ mt: 2 }} />
        <Grid container justifyContent={"center"}>
          <Button
            variant="outlined"
            sx={{
              color: "black",
              border: "1px solid black",
              borderRadius: "15px",
              mt: 2,
            }}
          >
            Sign up with google
            <GoogleIcon sx={{ fontSize: "20px", ml: 1 }} />
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};

export default GetEmailPhoneNumber;
