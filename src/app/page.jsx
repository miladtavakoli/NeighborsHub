"use client";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";
import BackgroundImage from "assets/images/landingPage.jpg";
import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Header from "components/header";

const LandingPage = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Grid container sx={{ pt: 10 }}>
        <Grid container item xs={5} direction={"column"} sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Discover Your Neighborhood's Hidden Gems
          </Typography>
          <Typography variant="body1" sx={{ pt: 2 }}>
            Welcome to our neighborhood services and products application.
            Connect with your neighbors and explore a wide range of offerings
            right at your fingertips.
          </Typography>
          <Grid sx={{ pt: 4 }}>
            <Link href="/app">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4F62C9",
                  borderRadius: "15px",
                  boxShadow: "none",
                }}
              >
                Start for free
              </Button>
            </Link>
            <Link href="/about-us">
              <Button
                variant="outlined"
                sx={{
                  // backgroundColor: "#4F62C9",
                  borderRadius: "15px",
                  boxShadow: "none",
                  mx: 1,
                }}
              >
                Learn More
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={7}
          justifyContent={"flex-end"}
          sx={{ flex: 1, height: "calc( 100vh - 300px )" }}
        >
          <img
            src={BackgroundImage.src}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            alt="Picture of the author"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
