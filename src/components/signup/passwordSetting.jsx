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
import { useRouter } from "next/navigation";

const PasswordSetting = ({
  password,
  setCurrentState,
  emailPhoneNumber,
  otp,
}) => {
  const repeatPassword = useInputHandler();
  ("");
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.value === repeatPassword.value) {
      setLoading(true);
      APIS.auth
        .register({
          email_mobile: emailPhoneNumber.value,
          password: password.value,
          otp: otp.value,
        })
        .then((res) => {
          console.log(res);
          router.push("/app");
          typeof window !== "undefined" && localStorage.setItem("token", res.data.data.access_token);
        })
        .catch((message) => {
          enqueueSnackbar(message, { variant: "error" });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      enqueueSnackbar("password and repeat password are not the same", {
        variant: "error",
      });
    }
  };

  const handleBack = () => {
    password.onChange({ target: { value: "" } });
    setCurrentState(STATUS.OTP_CHECKING);
  };

  return (
    <>
      <Typography textAlign={"center"}>Enter your password</Typography>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <TextField
          sx={{ mt: 1 }}
          fullWidth
          variant="outlined"
          label="password"
          type="password"
          name="your password1"
          autocomplete="one-time-code"
          {...password}
        />
        <TextField
          sx={{ mt: 1 }}
          fullWidth
          variant="outlined"
          label="repeat your password"
          type="password"
          name="your repeat password"
          autocomplete="one-time-code"
          {...repeatPassword}
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

export default PasswordSetting;
