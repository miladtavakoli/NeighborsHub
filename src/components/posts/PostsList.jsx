import Post from "./post";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Map from "components/map/map";
import Modal from "components/modal/modal";
import { useState } from "react";

const PostsList = ({ posts = [], showLocationOnMap = false }) => {
  const [open, setOpen] = useState(false);
  const [cordinates, setCordinate] = useState([[49.2827, -123.1207]]);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = (post) => {
    setCordinate([post.address.location.coordinates]);
    setOpen(true);
  };

  
  return (
    <>
      <Grid container direction="column">
        {posts.map((item, index) => (
          <Card
            key={index}
            container
            direction={"column"}
            sx={{ p: 2, mx: 1, my: 1 }}
          >
            <Post
              showLocationOnMap={showLocationOnMap}
              handleOpenModal={() => handleOpenModal(item)}
              data={item}
            />
          </Card>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Grid
          container
          justifyContent={"center"}
          sx={{ mt: 3, overflowY: "auto", height: "calc( 100vh - 330px )" }}
        >
          <Map cordinates={cordinates} center={cordinates[0]} zoom={15} />
        </Grid>
      </Modal>
    </>
  );
};

export default PostsList;
