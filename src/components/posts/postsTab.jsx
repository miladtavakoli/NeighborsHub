import PostList from "components/posts/postsList";
import { postsSelector, myPostsSelector } from "store/slices/postsSlices";
import { useSelector } from "react-redux";

const PostTab = () => {
  const posts = useSelector(postsSelector);

  return <PostList posts={posts} />;
};

export default PostTab;
