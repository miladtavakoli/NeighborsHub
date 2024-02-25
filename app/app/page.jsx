"use client";
import { useState, useMemo, useEffect } from "react";
import Grid from "@mui/material/Grid";
import MapTab from "components/map/mapTab";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PostsTab from "components/posts/postsTab";
import Button from "@mui/material/Button";
import CreatePostModal from "components/posts/createPostModal";
import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import Hidden from "@mui/material/Hidden";
import { myAddressesSelector } from "store/slices/userSlices";
import { useSelector } from "react-redux";
import { getMyAddresses } from "store/actions/userActions";
import Badge from "@mui/material/Badge";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FiltersDialog from "components/filters/filtersDialog";

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  const [createPostModalOpen, setCreatePostModalOpen] = useState(false);
  const dispatch = useDispatch();
  const myAddressCordinate = useSelector(myAddressesSelector);
  const mainAddress = myAddressCordinate.find((item) => item.is_main_address);
  const theme = useTheme();
  const [openFilterDialog, setOpenFilterDialog] = useState(false);

  useEffect(() => {
    dispatch(getMyAddresses());
  }, []);

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

  const handleFilterDialogClose = () => {
    setOpenFilterDialog(false);
  };

  const handleOpenFilterDialog = () => {
    setOpenFilterDialog(true);
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
        sx={{ py: 1, px: 4, backgroundColor: "#85CBFA" }}
      >
        <Button
          sx={{ mr: 4, color: "white" }}
          variant="contained"
          onClick={handleOpenFilterDialog}
        >
          <Typography
            sx={{
              mr: 2,
              backgroundColor: "white",
              color: "black",
              borderRadius: "100%",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            43
          </Typography>
          <Typography sx={{ mr: 1 }}>Filters</Typography>
          <FilterAltIcon color="action" sx={{ color: "white" }} />
        </Button>
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
          {mainAddress ? (
            <>
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
            </>
          ) : (
            <Grid
              sx={{ height: "100%", overflowY: "auto" }}
              container
              item
              xs={12}
            >
              <MapTab />
            </Grid>
          )}
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
      <FiltersDialog
        open={openFilterDialog}
        handleClose={handleFilterDialogClose}
      />
    </Grid>
  );
};

export default App;
