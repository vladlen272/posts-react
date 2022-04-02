import React from "react";
import Post from "../post-item/PostItem";
import "./PostList.css";

function PostList({ posts, title, remove }) {
  const removePost = (post) => {
    remove(post);
  };
  if (posts.length === 0) {
    title = "You dont have any posts";
  }
  return (
    <div className="posts">
      <h1 className="posts__title">{title}</h1>
      <div className="posts__content">
        {posts.map((post, index) => (
          <Post remove={removePost} post={post} index={index} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
