"use client";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonalData from "components/profile/personalData";
import MapData from "components/profile/mapData";
import { useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
const Profile = () => {
  const [tabValue, setTabValue] = useState(0);

  const Content = useMemo(
    () => ({
      0: <PersonalData onClick={() => setOpen(true)} />,
      1: <MapData />,
    }),
    []
  );

  return (
    <Card sx={{ display: "flex", direction: "column", px: 2, py: 1 }}>
      <Grid container justifyContent={"center"}>
        <Tabs
          value={tabValue}
          onChange={(e, value) => setTabValue(value)}
          aria-label="basic tabs example"
          full
        >
          <Tab label="Personal Information" />
          <Tab label="Location" />
        </Tabs>
        <Grid
          container
          justifyContent={"center"}
          sx={{ mt: 3, overflowY: "auto", height: "calc( 100vh - 170px )" }}
        >
          {Content[tabValue]}
        </Grid>
      </Grid>
    </Card>
  );
};
export default Profile;
