"use client";
import { useState, useMemo, useEffect } from "react";
import Grid from "@mui/material/Grid";
import MapTab from "components/map/mapTab";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PostsTab from "components/posts/postsTab";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CreatePostModal from "components/posts/createPostModal";
import { useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Hidden from "@mui/material/Hidden";

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  const [createPostModalOpen, setCreatePostModalOpen] = useState(false);
  const dispatch = useDispatch();

  const theme = useTheme();
  const smMatches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleChange = (e, value) => {
    setTabValue(value);
  };
  const Content = useMemo(
    () => ({
      0: <MapTab />,
      1: <PostsTab />,
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
    <Grid
      // maxWidth="md"
      container
      item
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        px: "0!important",
      }}
    >
      <Hidden mdUp>
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
      </Hidden>
      <Grid
        container
        justifyContent={"flex-end"}
        sx={{ py: 1, px: 4, backgroundColor: "lightBlue" }}
      >
        <Button variant="contained" onClick={handleCreatePostModalOpen}>
          Add New Post
        </Button>
      </Grid>
      <Hidden mdDown>
        <Grid
          container
          justifyContent={"center"}
          sx={{ height: "calc( 100vh - 160px )" }}
        >
          <Grid
            sx={{ height: "100%", overflowY: "auto" }}
            container
            item
            lg={8}
            md={6}
          >
            <MapTab />
          </Grid>
          <Grid
            sx={{ height: "100%", overflowY: "auto" }}
            container
            item
            lg={4}
            md={6}
          >
            <PostsTab />
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          container
          justifyContent={"center"}
          sx={{ mt: 1, height: "calc( 100vh - 210px )", overflowY: "auto" }}
        >
          {Content[tabValue]}
        </Grid>
      </Hidden>
      <CreatePostModal
        open={createPostModalOpen}
        handleClose={handleCreatePostModalClose}
      />
    </Grid>
  );
};

export default App;
