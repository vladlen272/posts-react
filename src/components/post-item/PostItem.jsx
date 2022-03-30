import React from "react";
import Button from "../UI/button/Button";
import "./PostItem.css";

function Post({post, index, remove}) {
  const removePost = (post) => {
    remove(post)
  }
  return (
    <div className="post">
      <div className="post__content">
        <div className="post__title">
          {++index}. {post.title}
        </div>
        <div className="post__body">{post.body}</div>
      </div>
      <div className="post__buttons">
        <Button onClick={() => removePost(post)}>delete</Button>
      </div>
    </div>
  );
}

export default Post;
