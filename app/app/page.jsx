"use client";
import { useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import MapTab from "components/map/mapTab";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PostsList from "components/posts/PostsList";
import Container from "@mui/material/Container";
const App = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (e, value) => {
    setTabValue(value);
  };
  const Content = useMemo(
    () => ({
      0: <MapTab />,
      1: <PostsList />,
      2: <></>,
    }),
    []
  );

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        px: "0!important",
      }}
    >
      <Grid container justifyContent={"center"}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Tab label="Map" />
          <Tab label="List" />
          <Tab label="Filter" />
        </Tabs>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        sx={{ mt: 3, height: "calc( 100vh - 200px )", overflowY: "auto" }}
      >
        {Content[tabValue]}
      </Grid>
    </Container>
  );
};

export default App;
