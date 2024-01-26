import PostList from "components/posts/postsList";
import { postsSelector, myPostsSelector } from "store/slices/postsSlices";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

const PostTab = () => {
  const posts = useSelector(postsSelector);

  return (
    <Grid container sx={{ px: 1 }}>
      <PostList posts={posts} showLocationOnMap />
    </Grid>
  );
};

export default PostTab;
