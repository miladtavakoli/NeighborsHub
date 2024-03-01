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
import { getMyAddresses, myInfoAction } from "store/actions/userActions";
import Badge from "@mui/material/Badge";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FiltersDialog from "components/filters/filtersDialog";
import AddIcon from "@mui/icons-material/Add";
import { getPosts } from "store/actions/postsActions";
import { postsSelector } from "store/slices/postsSlices";
// import { categorySelector } from "store/slices/postsSlices";
import { getMyPosts } from "store/actions/postsActions";

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  const [createPostModalOpen, setCreatePostModalOpen] = useState(false);
  const dispatch = useDispatch();
  const myAddressCordinate = useSelector(myAddressesSelector);
  const mainAddress = myAddressCordinate.find((item) => item.is_main_address);
  const [openFilterDialog, setOpenFilterDialog] = useState(false);
  const [dialogFilters, setDialogFilters] = useState({});
  const initialCordinate = mainAddress?.location.coordinates || [0, 0];
  const posts = useSelector(postsSelector);

  useEffect(() => {
    dispatch(getMyAddresses());
    dispatch(getMyPosts());
    dispatch(myInfoAction());
  }, []);

  const handleChange = (e, value) => {
    setTabValue(value);
  };
  const Content = useMemo(
    () => ({
      0: <MapTab filters={dialogFilters} />,
      1: <PostsTab posts={posts} />,
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

  const handleSubmitFilters = (state) => {
    setDialogFilters(state);
    handleFilterDialogClose();
  };

  useEffect(() => {
    if (mainAddress)
      dispatch(
        getPosts({
          user_latitude: initialCordinate[1] || undefined,
          user_longitude: initialCordinate[0] || undefined,
          offset: 0,
          limit: 30,
          from_distance: dialogFilters?.filters?.distance
            ? dialogFilters?.distance?.[0]
            : undefined,
          to_distance: dialogFilters?.filters?.distance
            ? dialogFilters?.distance?.[1]
            : undefined,
        })
      );
  }, [mainAddress, dialogFilters]);

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
          </Tabs>
        </Grid>
      </Hidden>
      <Grid
        container
        justifyContent={"flex-end"}
        sx={{ py: 1, px: 4, backgroundColor: "#85CBFA" }}
      >
        <Button
          sx={{
            mr: 2,
            color: "white",
            borderRadius: "10px",
            // height: "47px",
            fontSize: "13px",
            backgroundColor: "#0298e8",
          }}
          variant="contained"
          onClick={handleOpenFilterDialog}
        >
          Filters
          <Badge
            badgeContent={
              dialogFilters.filters
                ? Object.values(dialogFilters.filters).filter(Boolean).length
                : 0
            }
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "red",
                border: "1px solid white",
                top: "6px",
                right: "-1px",
              },
            }}
          >
            <FilterAltIcon color="action" sx={{ color: "white", ml: 1 }} />
          </Badge>
        </Button>
        <Button
          variant="contained"
          onClick={handleCreatePostModalOpen}
          sx={{
            borderRadius: "10px",
            // height: "47px",
            fontSize: "13px",
            backgroundColor: "#0298e8",
          }}
        >
          Add New Post
          <AddIcon color="action" sx={{ color: "white", ml: 1 }} />
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
                <MapTab filters={dialogFilters} />
              </Grid>
              <Grid
                sx={{ height: "100%", overflowY: "auto" }}
                container
                item
                lg={4}
                md={6}
              >
                <PostsTab filters={dialogFilters} posts={posts} />
              </Grid>
            </>
          ) : (
            <Grid
              sx={{ height: "100%", overflowY: "auto" }}
              container
              item
              xs={12}
            >
              <MapTab filters={dialogFilters} />
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
        handleSubmitFilters={handleSubmitFilters}
      />
    </Grid>
  );
};

export default App;
