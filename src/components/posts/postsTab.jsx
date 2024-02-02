import { useState, useEffect } from "react";
import PostList from "components/posts/postsList";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { getPosts } from "store/actions/postsActions";
import { useDispatch } from "react-redux";
import { myAddressesSelector } from "store/slices/userSlices";
import { uniqueLocationSelector } from "store/slices/postsSlices";

const PostTab = () => {
  const dispatch = useDispatch();
  const myAddressCordinate = useSelector(myAddressesSelector);
  const cordinates = useSelector(uniqueLocationSelector);
  const mainAddress = myAddressCordinate.find((item) => item.is_main_address);
  const initilaCordinate = mainAddress?.location.coordinates || [0, 0];
  const [currentDistance, setCurrentDistance] = useState(3.8);

  useEffect(() => {
    dispatch(
      getPosts({
        lat: initilaCordinate[1],
        long: initilaCordinate[0],
        distance: currentDistance * 1000,
        offset: 0,
        limit: 30,
      })
    );
  }, []);

  return (
    <Grid container sx={{ px: 1 }}>
      <PostList showLocationOnMap />
    </Grid>
  );
};

export default PostTab;
