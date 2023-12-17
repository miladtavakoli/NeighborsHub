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
import Link from "next/link";

const GetEmailPhoneNumber = ({ emailPhoneNumber, setCurrentState }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    APIS.auth
      .preRegister({
        email_mobile: emailPhoneNumber.value,
      })
      .then(() => {
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
    <>
      <Typography textAlign={"center"} sx={{ color: "gray" }}>
        Enter you username
      </Typography>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
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
          disabled={loading}
        >
          {loading ? <CircularProgress size={25} sx={{ mx: 1 }} /> : "Submit"}
        </Button>
      </form>
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
          Sign in with google
          <GoogleIcon sx={{ fontSize: "20px", ml: 1 }} />
        </Button>
      </Grid>
      <Divider sx={{ mt: 2 }} />
      <Grid sx={{ mt: 2 }} container justifyContent={"center"}>
        <Typography
          sx={{ mr: 1, fontSize: "14px" }}
        >{`You have already submited? `}</Typography>
        <Link href="/signin">
          <Typography
            color="primary"
            sx={{ fontSize: "14px" }}
          >{`login here`}</Typography>
        </Link>
      </Grid>
    </>
  );
};

export default GetEmailPhoneNumber;
