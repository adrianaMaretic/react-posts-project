import { useState } from "react";

import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import NewPost from "./NewPost";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{textAlign:"center"}}>
          <h2>There are no posts yet</h2>
          <p>Click the "New Post" button to add a new post</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
