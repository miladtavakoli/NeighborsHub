import Map from "components/map/map";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { myAddressesSelector } from "store/slices/userSlices";
import Modal from "components/modal/modal";
import PostsList from "components/posts/postsList";
import {
  myPostsSelector,
  uniqueLocationSelector,
  locationPostSelector,
} from "store/slices/postsSlices";
import { getLocationPosts, getMyPosts } from "store/actions/postsActions";
import { useDispatch } from "react-redux";
import { getUniqueLocation } from "store/actions/postsActions";

let controller;

const MapTab = () => {
  const myPosts = useSelector(myPostsSelector);
  const locationPosts = useSelector(locationPostSelector);
  const myAddressCordinate = useSelector(myAddressesSelector);
  const cordinates = useSelector(uniqueLocationSelector);
  const mainAddress = myAddressCordinate.find((item) => item.is_main_address);
  const initilaCordinate = mainAddress?.location.coordinates || [0, 0];
  const zoom = mainAddress ? 14 : 0;
  const myCordinate = mainAddress?.location?.coordinates;
  const [open, setOpen] = useState(null);
  const [selectedPosts, setSelectedPosts] = useState();
  const [isMyPosts, setIsMyPosts] = useState(false);
  const dispatch = useDispatch();

  const [currentDistance, setCurrentDistance] = useState(3.8);
  const [currentCenter, setCurrentCenter] = useState(initilaCordinate);

  useEffect(() => {
    if (currentDistance) {
      controller = new AbortController();

      dispatch(
        getUniqueLocation(
          {
            long: currentCenter[0],
            lat: currentCenter[1],
            distance: currentDistance * 100,
            offset: 0,
            limit: 30,
          },
          controller.signal
        )
      );
    }
  }, [currentDistance, currentCenter[0], currentCenter[1]]);

  // useEffect(() => {
  //   console.log(currentCenter, currentDistance);
  //   // dispatch(
  //   //   getUniqueLocation({
  //   //     offset: 0,
  //   //     limit: 1000,
  //   //     count: 1000,
  //   //   })
  //   // );
  //   if (currentCenter && currentDistance)
  //     dispatch(
  //       getPosts({
  //         lat: currentCenter.lat,
  //         long: currentCenter.lng,
  //         distance: currentDistance * 1000,
  //         offset: "0",
  //         limit: 30,
  //       })
  //     );
  // }, [currentCenter, currentDistance]);

  const handleMarkerClicked = async (item) => {
    dispatch(
      getLocationPosts({
        lat: item[0],
        long: item[1],
        zoom: "1",
      })
    ).then(() => {
      setIsMyPosts(false);
      setOpen(true);
    });
  };

  const handleMyMarkerClicked = async () => {
    setIsMyPosts(true);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedPosts([]);
    setOpen(null);
  };

  const handleCenterChanged = (center) => {
    console.log(center.lng, "addedCordinates");
    setCurrentCenter([center.lng, center.lat]);
    controller?.abort();
  };

  const handleDistanceChanged = (distance) => {
    setCurrentDistance(distance);
    controller?.abort();
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
        handleCenterChanged={handleCenterChanged}
        handleDistanceChanged={handleDistanceChanged}
      />
      <Modal open={open} onClose={handleClose}>
        <PostsList posts={isMyPosts ? myPosts : locationPosts} />
      </Modal>
    </Grid>
  );
};

export default MapTab;
