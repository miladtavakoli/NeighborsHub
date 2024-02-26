import Post from "./post";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Map from "components/map/map";
import Modal from "components/modal/modal";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { myAddressesSelector } from "store/slices/userSlices";

const PostsList = ({ posts = [], showLocationOnMap = false }) => {
  const [open, setOpen] = useState(false);
  const [locations, setLocations] = useState([]);
  const myAddressCordinate = useSelector(myAddressesSelector);
  const mainAddress = myAddressCordinate.find((item) => item.is_main_address);
  const initialCordinate = mainAddress?.location.coordinates || [0, 0];

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = (post) => {
    setLocations([post.address.location.coordinates]);
    setOpen(true);
  };

  return (
    <>
      {posts.length > 0 ? (
        <Grid container direction="column">
          {posts.map((item, index) => (
            <Card key={index} sx={{ my: 1 }}>
              <Post
                showLocationOnMap={showLocationOnMap}
                handleOpenModal={() => handleOpenModal(item)}
                data={item}
                handleClosePostsList={handleClose}
              />
            </Card>
          ))}
        </Grid>
      ) : (
        <Grid
          container
          direction="column"
          sx={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            pb: 8,
          }}
        >
          <Typography>There is notting here</Typography>
        </Grid>
      )}
      <Modal open={open} onClose={handleClose}>
        <Grid
          container
          justifyContent={"center"}
          sx={{ mt: 3, overflowY: "auto", height: "calc( 100vh - 330px )" }}
        >
          <Map
            myCordinate={initialCordinate}
            locations={locations}
            center={locations[0]}
            zoom={15}
          />
        </Grid>
      </Modal>
    </>
  );
};

export default PostsList;
