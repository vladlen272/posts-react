import React from "react";
import Post from "../post-item/PostItem";
import "./PostList.css";

const Posts = (props) => {
  return (
    <div className="posts">
      <h1 className="posts__title">{props.title}</h1>
      <div className="posts__content">
        {" "}
        {props.posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}{" "}
      </div>
    </div>
  );
};

export default Posts;
