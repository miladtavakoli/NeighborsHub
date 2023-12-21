"use client";
import { useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import Map from "components/map/map";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (e, value) => {
    setTabValue(value);
  };

  const Content = useMemo(
    () => ({
      0: <Map />,
      1: <></>,
      2: <></>,
    }),
    []
  );

  return (
    <Grid container justifyContent={"center"}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="basic tabs example"
        full
      >
        <Tab label="Map" />
        <Tab label="List" />
        <Tab label="Filter" />
      </Tabs>
      <Grid container sx={{ mt: 3 }}>
        {Content[tabValue]}
      </Grid>
    </Grid>
  );
};

export default App;
