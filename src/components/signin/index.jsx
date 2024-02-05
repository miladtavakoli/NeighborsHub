"use client";
import { useMemo, useState } from "react";
import GetEmailPhoneNumber from "components/signin/getEmailPhoneNumber";
import OtpChecking from "components/signin/otpChecking";
import PasswordChecking from "components/signin/passwordChecking";
import STATUS from "components/signin/status";
import { useInputHandler } from "hooks/useInputHandler";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LoginImage from "assets/images/landingPage.jpg";
import Hidden from "@mui/material/Hidden";

const Signup = () => {
  const [currentState, setCurrentState] = useState(STATUS.GET_EMAIL_MOBILE);

  const emailPhoneNumber = useInputHandler("");
  const otp = useInputHandler("");
  const password = useInputHandler("");

  const state = {
    [STATUS.GET_EMAIL_MOBILE]: (
      <GetEmailPhoneNumber
        emailPhoneNumber={emailPhoneNumber}
        setCurrentState={setCurrentState}
      />
    ),
    [STATUS.OTP_CHECKING]: (
      <OtpChecking
        setCurrentState={setCurrentState}
        otp={otp}
        emailPhoneNumber={emailPhoneNumber}
      />
    ),
    [STATUS.PASSWORD_CHECKING]: (
      <PasswordChecking
        setCurrentState={setCurrentState}
        otp={otp}
        emailPhoneNumber={emailPhoneNumber}
        password={password}
      />
    ),
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ flex: 1, display: "flex", flexDirection: "column" }}
    >
      <Card
        sx={{
          // p: 2,
          boxShadow: "0 3px 10px 2px #f2f2f2",
          borderRadius: "20px",
          height: "100%",
          display: "flex",
        }}
      >
        <Grid
          container
          item
          lg={6}
          md={6}
          xs={12}
          sx={{ p: { lg: 6, md: 4, sm: 10, xs: 2 } }}
          direction="column"
        >
          <Grid container justifyContent={"center"} direction={"column"}>
            <Typography
              variant="h2"
              textAlign={"center"}
              sx={{ color: "black" }}
            >
              Sign In
            </Typography>
            <Typography
              variant="subtitle1"
              textAlign={"center"}
              sx={{ mt: 1, mb: 3, color: "darkengray" }}
            >
              Welcome to Neighbors Hub! You can sign in here.
            </Typography>
            {state[currentState]}{" "}
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid
            item
            lg={6}
            md={6}
            sx={{
              p: 2,
              backgroundImage: `url(${LoginImage.src})`,
              backgroundSize: "cover",
            }}
          ></Grid>
        </Hidden>
      </Card>
    </Container>
  );
};

export default Signup;
