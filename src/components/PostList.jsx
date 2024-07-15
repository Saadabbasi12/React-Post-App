import Post from "./Post";
import { useLoaderData } from "react-router-dom";

import classes from "./PostList.module.css";

const PostList = () => {
const posts = useLoaderData();

 

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      { posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          No posts found. Start adding some!
        </div>
      )}
     
    </>
  );
};

export default PostList;
