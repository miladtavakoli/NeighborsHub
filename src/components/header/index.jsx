"use client";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import BackgroundImage from "assets/images/landingPage.jpg";
import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Header = () => {
  const [navigationValue, setNavigationValue] = useState(0);
  const router = useRouter();
  return (
    <Grid
      container
      sx={{
        flex: 1,
        // backgroundImage: `url(${BackgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        pt: 4,
        pb: 3,
      }}
      justifyContent={"space-between"}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Ephesis-Regular",
          fontWeight: "bolder",
        }}
      >
        Neighbors Hub
      </Typography>
      <Grid>
        <BottomNavigation
          showLabels
          value={navigationValue}
          onChange={(event, newValue) => {
            setNavigationValue(newValue);
          }}
        >
          <BottomNavigationAction
            sx={{ width: "100px", color: "black" }}
            label="Home"
            onClick={() => router.push("/")}
          />
          <BottomNavigationAction
            label="App"
            onClick={() => router.push("/app")}
          />
          <BottomNavigationAction
            label="About Us"
            onClick={() => router.push("/about-us")}
          />
        </BottomNavigation>
      </Grid>
      <Grid>
        <Link href="/signup">
          <Button sx={{ mx: 2, fontWeight: "500" }} variant="text">
            Sign in
          </Button>
        </Link>
        <Link href="/signin">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4F62C9",
              borderRadius: "15px",
              boxShadow: "none",
            }}
          >
            Sign Up
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
