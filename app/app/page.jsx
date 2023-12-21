"use client";
import { useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import Map from "components/map/map";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import List from "components/list/list";
import Modal from "components/modal/modal";
import ListItem from "components/list/listItem";

const App = () => {
  const [tabValue, setTabValue] = useState(1);
  const [open, setOpen] = useState(false);
  const handleChange = (e, value) => {
    setTabValue(value);
  };

  const Content = useMemo(
    () => ({
      0: <Map onClick={() => setOpen(true)} />,
      1: <List />,
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
      <Grid
        container
        justifyContent={"center"}
        sx={{ mt: 3, overflowY: "auto", height: "calc( 100vh - 170px )" }}
      >
        {Content[tabValue]}
      </Grid>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ListItem />
      </Modal>
    </Grid>
  );
};

export default App;
