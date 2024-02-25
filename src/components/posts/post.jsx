import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { BASE_URL } from "services/constants";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import ConfirmationModal from "components/modal/confirmationModal";
import { deletePost, getDetailsPost } from "store/actions/postsActions";
import { useDispatch, useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { myInfoSelector } from "store/slices/userSlices";
import LandscapeIcon from "@mui/icons-material/Landscape";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@mui/material/Button";
import SamplePostImage from "assets/images/samplePostImage.png";
const Post = ({
  handleOpenModal,
  showLocationOnMap,
  data,
  handleClosePostsList,
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const myInfo = useSelector(myInfoSelector);
  const isMyPost = myInfo.id === data.created_by.id;

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenConfirmationModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDeletePost = () => {
    dispatch(deletePost({ id: data.id })).then(() => {
      handleClose();
      handleClosePostsList();
    });
  };

  const handleMoreDetails = () => {
    dispatch(getDetailsPost({ id: data.id }));
  };

  return (
    <Grid container direction={"column"} sx={{ pb: 3 }}>
      <Grid
        container
        sx={{ backgroundColor: "lightGray" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {data.media?.length >= 1 ? (
          <Carousel
            showArrows
            showThumbs={false}
            showStatus={false}
            width={"100%"}
          >
            {data.media.map((item, index) => (
              <div key={index}>
                {["jpg", "jpeg", "png", "gif"].includes(
                  item.file.split(".").pop()
                ) ? (
                  <img
                    src={item?.file}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "contain",
                    }}
                    key={index}
                  />
                ) : (
                  <video
                    src={item?.file}
                    width={"90%"}
                    height={"300px"}
                    style={{ objectFit: "contain" }}
                    controls
                  />
                )}
              </div>
            ))}
          </Carousel>
        ) : (
          // <LandscapeIcon sx={{ fontSize: 300, color: "gray" }} />
          <img
            src={SamplePostImage.src}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "contain",
            }}
          />
        )}
      </Grid>
      <Grid container justifyContent={"space-between"}>
        <Typography
          sx={{ mt: 2, fontWeight: "bold", px: 2, wordBreak: "break-all" }}
          variant="h5"
        >
          {data.title}
        </Typography>

        <IconButton onClick={handleOpenMenu}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {showLocationOnMap && (
            <MenuItem
              onClick={() => {
                handleOpenModal(data);
                setAnchorEl(null);
              }}
              // sx={{ color: "red" }}
            >
              <LocationOnIcon sx={{ mr: 0.5 }} /> Show On Map
            </MenuItem>
          )}
          {isMyPost && (
            <MenuItem
              onClick={() => {
                handleOpenConfirmationModal();
                setAnchorEl(null);
              }}
              sx={{ color: "red" }}
            >
              <DeleteIcon /> Delete
            </MenuItem>
          )}
        </Menu>
      </Grid>
      <Typography
        sx={{ mt: 1, px: 3, color: "gray", wordBreak: "break-all" }}
        variant="subtitle1"
      >
        {data.body}
      </Typography>
      <Button
        variant="text"
        // sx={{ mt: 1, px: 3, color: "gray" }}
        onClick={handleMoreDetails}
      >
        More Details
      </Button>
      <ConfirmationModal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleDeletePost}
        text="Are You Sure about Deleting This Post?"
        width={"sm"}
      />
    </Grid>
  );
};

export default Post;
