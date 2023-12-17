"use client";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { useInputHandler } from "hooks/useInputHandler";
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

const OtpChecking = ({ setCurrentState, otp, emailPhoneNumber }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(otp, emailPhoneNumber, "gggggg");
    APIS.auth
      .optLoginChecking({
        email_mobile: emailPhoneNumber.value,
        otp: otp.value,
      })
      .then(() => {
        enqueueSnackbar("Successful", { variant: "success" });
        setCurrentState(STATUS.PASSWORD_SETTING);
      })
      .catch((message) => {
        enqueueSnackbar(message, { variant: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleBack = () => {
    otp.onChange({ target: { value: "" } });
    setCurrentState(STATUS.GET_EMAIL_MOBILE);
  };

  return (
    <Container maxWidth="xs">
      <Card sx={{ p: 4 }}>
        <Typography textAlign={"center"}>Enter your code</Typography>
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <TextField
            sx={{ mt: 1 }}
            fullWidth
            variant="outlined"
            label="Code"
            name='your code'
            {...otp}
          />
          <Button
            sx={{ mt: 1 }}
            fullWidth
            variant="contained"
            type="submit"
            disabled={loading}
          >
            {loading ? <CircularProgress size={25} sx={{ mx: 1 }} /> : "Submit"}
          </Button>
          <Button
            sx={{ mt: 1 }}
            fullWidth
            variant="outlined"
            disabled={loading}
            color="secondary"
            onClick={handleBack}
          >
            Back
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default OtpChecking;
