import Map from "components/map/map";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { myAddressesSelector } from "store/slices/userSlices";
import Modal from "components/modal/modal";
import PostsList from "components/posts/postsList";
import {
  myPostsSelector,
  uniqueLocationSelector,
} from "store/slices/postsSlices";
import { getLocationPosts, getMyPosts } from "store/actions/postsActions";
import { useDispatch } from "react-redux";

const MapTab = () => {
  const myPosts = useSelector(myPostsSelector);
  const myAddressCordinate = useSelector(myAddressesSelector);
  const cordinates = useSelector(uniqueLocationSelector);
  const mainAddress = myAddressCordinate.find((item) => item.is_main_address);
  const initilaCordinate = mainAddress?.location.coordinates || [0, 0];
  const zoom = mainAddress ? 15 : 0;
  const myCordinate = mainAddress?.location?.coordinates;
  const [open, setOpen] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState();
  const dispatch = useDispatch();

  const handleMarkerClicked = async (item) => {
    const result = await dispatch(
      getLocationPosts({
        lat: item[0],
        long: item[1],
        zoom: "1",
      })
    );
    setSelectedPosts(result.posts.results);
    setOpen(true);
  };

  const handleMyMarkerClicked = async () => {
    const result = await dispatch(getMyPosts());
    setSelectedPosts(result.posts.results);
    setOpen(true);
  };

  const handleClose = () => {
    // setSelectedPosts([]);
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
