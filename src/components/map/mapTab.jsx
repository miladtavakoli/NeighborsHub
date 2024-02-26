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
import { getLocationPosts } from "store/actions/postsActions";
import { useDispatch } from "react-redux";
import { getUniqueLocation } from "store/actions/postsActions";

let controller;

const MapTab = ({ filters }) => {
  const myPosts = useSelector(myPostsSelector);
  const locationPosts = useSelector(locationPostSelector);
  const myAddressCordinate = useSelector(myAddressesSelector);
  const locations = useSelector(uniqueLocationSelector);
  const mainAddress = myAddressCordinate.find((item) => item.is_main_address);
  const initialCordinate = mainAddress?.location.coordinates || [0, 0];
  const zoom = mainAddress ? 14 : 0;
  const myCordinate = mainAddress?.location?.coordinates;
  const [open, setOpen] = useState(null);
  const [selectedPosts, setSelectedPosts] = useState();
  const [isMyPosts, setIsMyPosts] = useState(false);
  const dispatch = useDispatch();

  const [latBounds, setLatBounds] = useState([0, 0]);
  const [longBounds, setLongBounds] = useState([0, 0]);

  useEffect(() => {
    if (latBounds[0]) {
      controller = new AbortController();
      dispatch(
        getUniqueLocation(
          {
            in_bbox: `${longBounds[1]},${latBounds[1]},${longBounds[0]},${latBounds[0]}`,
            offset: 0,
            limit: Math.abs(longBounds[0] - longBounds[1]) < 0.02 ? 100000 : 15,
          },
          controller.signal
        )
      );
    }
  }, [latBounds[0], latBounds[1], longBounds[0], longBounds[1]]);

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
        long: item[0],
        lat: item[1],
        myAddressLong: initialCordinate[0],
        myAddressLat: initialCordinate[1],
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
    // console.log(center.lng, "addedCordinates");
    // setCurrentCenter([center.lng, center.lat]);
    // controller?.abort();
  };

  const handleBounds = (long1, long2, lat1, lat2) => {
    setLongBounds([long1, long2]);
    setLatBounds([lat1, lat2]);
    controller?.abort();
  };

  return (
    <Grid container alignContent={"flex-start"}>
      <Map
        locations={locations}
        center={initialCordinate}
        zoom={zoom}
        myCordinate={myCordinate}
        handleMarkerClicked={handleMarkerClicked}
        handleMyMarkerClicked={handleMyMarkerClicked}
        handleCenterChanged={handleCenterChanged}
        handleBounds={handleBounds}
      />
      <Modal open={open} onClose={handleClose}>
        <PostsList posts={isMyPosts ? myPosts : locationPosts} />
      </Modal>
    </Grid>
  );
};

export default MapTab;
