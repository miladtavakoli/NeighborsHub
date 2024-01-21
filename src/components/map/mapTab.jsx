import Map from "components/map/map";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { myAddressesSelector } from "store/slices/userSlices";
import Modal from "components/modal/modal";
import PostsList from "components/posts/PostsList";
import {
  postsSelector,
  myPostsSelector,
  uniqueLocationSelector,
} from "store/slices/postsSlices";

const MapTab = () => {
  const myPosts = useSelector(myPostsSelector);
  const posts = useSelector(postsSelector);
  const myAddressCordinate = useSelector(myAddressesSelector);
  const cordinates = useSelector(uniqueLocationSelector);
  const mainAddress = myAddressCordinate.find((item) => item.is_main_address);
  const initilaCordinate = mainAddress?.location.coordinates || [0, 0];
  const zoom = mainAddress ? 15 : 0;
  const myCordinate = mainAddress?.location?.coordinates;
  const [open, setOpen] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState([]);

  const handleMarkerClicked = () => {
    setSelectedPosts(posts);
    setOpen(true);
  };

  const handleMyMarkerClicked = () => {
    setSelectedPosts(myPosts);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedPosts([]);
    setOpen(false);
  };

  return (
    <Grid container alignContent={"flex-start"}>
      <Map
        cordinates={cordinates}
        center={initilaCordinate}
        zoom={zoom}
        myCordinate={myCordinate}
        handleMarkerClicked={handleMarkerClicked}
        handleMyMarkerClicked={handleMyMarkerClicked}
      />
      <Modal open={open} onClose={handleClose}>
        <PostsList posts={selectedPosts} />
      </Modal>
    </Grid>
  );
};

export default MapTab;
