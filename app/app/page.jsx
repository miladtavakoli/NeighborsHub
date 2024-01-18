"use client";
import { useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import MapTab from "components/map/mapTab";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PostsList from "components/posts/PostsList";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CreatePostModal from "components/posts/createPostModal";

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  const [createPostModalOpen, setCreatePostModalOpen] = useState(false);

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

  const handleCreatePostModalOpen = () => {
    setCreatePostModalOpen(true);
  };
  const handleCreatePostModalClose = () => {
    setCreatePostModalOpen(false);
  };

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
          <Tab label="Posts" />
          <Tab label="Filter" />
        </Tabs>
      </Grid>
      <Grid container justifyContent={"flex-end"} sx={{mt: 2}}>
        <Button variant="contained" onClick={handleCreatePostModalOpen}>
          Add New Post
        </Button>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        sx={{ mt: 1, height: "calc( 100vh - 220px )", overflowY: "auto" }}
      >
        {Content[tabValue]}
      </Grid>
      <CreatePostModal
        open={createPostModalOpen}
        handleClose={handleCreatePostModalClose}
      />
    </Container>
  );
};

export default App;
