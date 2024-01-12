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
import Apis from "services/apis";
import { useSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import STATUS from "components/signup/status";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { startLoading, endLoading } from "store/slices/appSlices";
import { getMyAddresses } from "store/actions/userActions";

const OtpChecking = ({ setCurrentState, otp, emailPhoneNumber }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(startLoading());
    Apis.auth
      .optLoginChecking({
        mobile: emailPhoneNumber.value,
        otp: otp.value,
      })
      .then((res) => {
        enqueueSnackbar("Successful", { variant: "success" });

        typeof window !== "undefined" &&
          localStorage.setItem("token", res.access_token);
        dispatch(getMyAddresses({ token: res.access_token }));
        router.push("/app");
      })
      .catch((message) => {
        enqueueSnackbar(message, { variant: "error" });
      })
      .finally(() => {
        setLoading(false);
        dispatch(endLoading());
      });
  };

  const handleBack = () => {
    otp.onChange({ target: { value: "" } });
    setCurrentState(STATUS.GET_EMAIL_MOBILE);
  };

  return (
    <>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Typography textAlign={"center"}>Enter your Code</Typography>

        <TextField
          sx={{ mt: 1 }}
          fullWidth
          variant="outlined"
          label="Code"
          name="your code"
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
    </>
  );
};

export default OtpChecking;
