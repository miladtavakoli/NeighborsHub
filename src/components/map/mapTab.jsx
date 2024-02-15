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

  const [latBounds, setLatBounds] = useState([0, 0]);
  const [longBounds, setLongBounds] = useState([0, 0]);
  const [currentCenter, setCurrentCenter] = useState(initilaCordinate);

  function calcCrow(lon1, lon2, lat1, lat2, unit = "K") {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }
      if (unit == "N") {
        dist = dist * 0.8684;
      }
      return dist * 500; // * 1000 / 2
    }
  }
  useEffect(() => {
    if (latBounds[0]) {
      controller = new AbortController();
      console.log(longBounds[0], longBounds[1], latBounds[0], latBounds[1]);
      dispatch(
        getUniqueLocation(
          {
            long: currentCenter[0],
            lat: currentCenter[1],
            // distance: calcCrow(
            //   longBounds[0],
            //   longBounds[1],
            //   latBounds[0],
            //   latBounds[1]
            // ),
            in_bbox: `${longBounds[1]},${latBounds[1]},${longBounds[0]},${latBounds[0]}`,
            offset: 0,
            limit: Math.abs(longBounds[0] - longBounds[1]) < 0.02 ? 100000 : 30,
          },
          controller.signal
        )
      );
    }
  }, [
    latBounds[0],
    latBounds[1],
    longBounds[0],
    longBounds[1],
    currentCenter[0],
    currentCenter[1],
  ]);

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
        myAddressLong: initilaCordinate[0],
        myAddressLat: initilaCordinate[1],
        user_distance: "1",
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

  const handleBounds = (long1, long2, lat1, lat2) => {
    setLongBounds([long1, long2]);
    setLatBounds([lat1, lat2]);
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
        handleBounds={handleBounds}
      />
      <Modal open={open} onClose={handleClose}>
        <PostsList posts={isMyPosts ? myPosts : locationPosts} />
      </Modal>
    </Grid>
  );
};

export default MapTab;
