"use client";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonalData from "components/profile/personalData/personalData";
import MapData from "components/profile/mapData";
import { useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Profile = () => {
  return (
    <Container
      maxWidth={"sm"}
      sx={{ overflowY: "auto", height: "calc( 100vh - 150px )" , pb: 1 , px: 0 }}
    >
      <Card sx={{ display: "flex", direction: "column", px: 2, py: 1 }}>
        <Grid container justifyContent={"center"}>
          <Grid container justifyContent={"center"} sx={{ mt: 3 }}>
            <PersonalData onClick={() => setOpen(true)} />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
export default Profile;
