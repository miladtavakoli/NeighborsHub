"use client";
import React from "react";
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
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Header = () => {
  const [navigationValue, setNavigationValue] = useState(0);
  const router = useRouter();
  const [open, setOpen] = useState(false);
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
      alignItems={"center"}
    >
      <Hidden mdUp>
        <Grid xs={12} container justifyContent={"space-between"}>
          <Grid>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon sx={{ color: "gray", fontSize: "26px" }} />
            </IconButton>
          </Grid>
          <Grid>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Ephesis-Regular",
                fontWeight: "bolder",
              }}
            >
              Neighbors Hub
            </Typography>
          </Grid>
          <Grid>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              edge="start"
              sx={{
                mr: 2,
                ...(open && { display: "none" }),
                visibility: "hidden",
              }}
            >
              <MenuIcon sx={{ color: "gray" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdDown>
        <Grid>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Ephesis-Regular",
              fontWeight: "bolder",
            }}
          >
            Neighbors Hub
          </Typography>
        </Grid>
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
          <Link href="/login">
            <Button sx={{ mx: 2, fontWeight: "500" }} variant="text">
              Login
            </Button>
          </Link>
          <Link href="/signup">
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
      </Hidden>

      <Drawer
        anchor={"left"}
        open={open}
        onClose={() => {
          setOpen((prev) => !prev);
        }}
      >
        <Grid sx={{ width: "300px" }}>
          <Grid container justifyContent={"flex-end"}>
            <IconButton
              sx={{ p: 2 }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          </Grid>
          <Divider />

          <List>
            <Link href="/">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href="/app">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary={"App"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href="/about-us">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LightbulbIcon />
                  </ListItemIcon>
                  <ListItemText primary={"About Us"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            <Link href="/signin">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary={"SignOut"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href="/signup">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Login"} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Grid>
      </Drawer>
    </Grid>
  );
};

export default Header;
