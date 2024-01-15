import Post from "./post";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Map from "components/map/map";
import Modal from "components/modal/modal";
import { useState } from "react";

const PostsList = () => {
  const [open, setOpen] = useState(false);
  const [cordinates] = useState([[49.2827, -123.1207]]);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = () => setOpen(true);
  return (
    <>
      <Grid container direction="column">
        <Card container direction={"column"} sx={{ p: 2, mx: 1, my: 2 }}>
          <Post showLocationOnMap handleOpenModal={handleOpenModal} />
        </Card>
        <Card container direction={"column"} sx={{ p: 2, mx: 1, my: 2 }}>
          <Post showLocationOnMap handleOpenModal={handleOpenModal} />
        </Card>
        <Card container direction={"column"} sx={{ p: 2, mx: 1, my: 2 }}>
          <Post showLocationOnMap handleOpenModal={handleOpenModal} />
        </Card>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Grid
          container
          justifyContent={"center"}
          sx={{ mt: 3, overflowY: "auto", height: "calc( 100vh - 180px )" }}
        >
          <Map
            cordinates={cordinates}
            isOnList
            center={cordinates[0]}
            zoom={14}
          />
        </Grid>
      </Modal>
    </>
  );
};

export default PostsList;
