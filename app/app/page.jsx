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
import TextField from "@mui/material/TextField";
import { useInputHandler } from "hooks/useInputHandler";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  const [createPostModalOpen, setCreatePostModalOpen] = useState(false);
  const dispatch = useDispatch();
  const myAddressCordinate = useSelector(myAddressesSelector);
  const mainAddress = myAddressCordinate.find((item) => item.is_main_address);
  const [openFilterDialog, setOpenFilterDialog] = useState(false);
  const [dialogFilters, setDialogFilters] = useState({});
  const theme = useTheme();
  const initialCordinate = mainAddress?.location.coordinates || [0, 0];
  const posts = useSelector(postsSelector);
  const search = useInputHandler("");
  const matcheMdDown = useMediaQuery(theme.breakpoints.down("md"));

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

  const handleSearch = () => {};

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
        justifyContent={"space-between"}
        sx={{
          py: 1,
          px: { sm: 4, xs: 1 },
          bgcolor: "#e8e8e8",
          borderTop: "1px solid #d4d4d4",
          borderBottom: "1px solid #d4d4d4",
        }}
      >
        <Grid container item xs={6}>
          <TextField
            autocomplete="off"
            name="search"
            placeholder="Search"
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              "& .MuiOutlinedInput-notchedOutline": {
                fontSize: "12px",
                display: "none",
              },
              "& .MuiInputBase-input": {
                padding: "12px 20px",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "darkenGray",
                fontSize: "12px",
                fontWeight: "bold",
              },
            }}
            {...search}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleSearch}
                    edge="end"
                  >
                    <SearchIcon sx={{ fill: "gray" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid container xs={6} justifyContent={"flex-end"}>
          <Button
            sx={{
              mr: { xs: 1, md: 2 },
              px: { md: 4, sm: 1, xs: 0 },
              borderRadius: "10px",
              fontSize: "13px",
              backgroundColor: "#e85a02",
              "&:hover": {
                backgroundColor: "#f27527",
              },
              minWidth: { xs: "40px", sm: "64px" },
            }}
            variant="contained"
            onClick={handleOpenFilterDialog}
          >
            {!matcheMdDown && "Filters"}
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
              <FilterAltIcon
                color="action"
                sx={{ color: "white", ml: { sm: 0, md: 1 } }}
              />
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
              px: { md: 4, sm: 1, xs: 0 },
              minWidth: { xs: "40px", sm: "64px" },
            }}
          >
            {!matcheMdDown && "Add New Post"}

            <AddIcon
              color="action"
              sx={{ color: "white", ml: { sm: 0, md: 1 } }}
            />
          </Button>
        </Grid>
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
