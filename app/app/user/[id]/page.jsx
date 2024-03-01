"use client";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { myInfoSelector } from "store/slices/userSlices";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { snackActions } from "utils/SnackbarUtils";
import { useState } from "react";
import PostsList from "components/posts/postsList";
import { postsSelector } from "store/slices/postsSlices";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Page({ params }) {
  const { id } = params;
  const posts = useSelector(postsSelector);
  const [tabValue, setTabValue] = useState(0);

  const [contactOpen, setContactOpen] = useState(null);

  const handleCopyToClipboard = (value) => {
    if (isAuth) {
      navigator.clipboard.writeText(value);
      snackActions.info("Copied To Clipboard");
    } else {
      snackActions.warning("You Need To Login To Use This Information");
    }
  };

  const handleCloseContactMenu = () => {
    setContactOpen(false);
  };

  const handleChange = (e, value) => {
    setTabValue(value);
  };

  return (
    <Container maxWidth="md">
      <Grid container direction={"column"}>
        <Grid>
          <img
            style={{ width: "100%", height: "200px", objectFit: "overlay" }}
          />
        </Grid>
        <Grid
          container
          sx={{ pl: 2 }}
          justifyContent={"space-between"}
          alignContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <Avatar sx={{ height: "130px", width: "130px", mt: "-65px" }} />
          <Button sx={{ mt: 1 }} variant="contained">
            Contact
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={contactOpen}
            open={contactOpen}
            onClose={handleCloseContactMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ minWidth: "300px" }}
          >
            {/* {data.created_by?.email && (
              <MenuItem
                sx={{ minWidth: "300px" }}
                onClick={() => handleCopyToClipboard(data.created_by?.email)}
              >
                <AlternateEmailIcon sx={{ mr: 1 }} />
                {data.created_by?.email}
              </MenuItem>
            )}
            {data.created_by?.mobile && (
              <MenuItem
                sx={{ minWidth: "300px" }}
                onClick={() => handleCopyToClipboard(data.created_by?.mobile)}
              >
                <PhoneIphoneIcon sx={{ mr: 1 }} />
                {data.created_by?.mobile}
              </MenuItem>
            )} */}
          </Menu>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Tab label="Posts" />
            <Tab label="Friends" />
          </Tabs>
        </Grid>
        <Grid>
          <PostsList posts={posts} />
        </Grid>
      </Grid>
    </Container>
  );
  // const { slug } = params;
  // ...
}

export default Page;
