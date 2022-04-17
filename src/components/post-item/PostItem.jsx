import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/button/Button";
import "./PostItem.css";

function Post({post, index, remove}) {
  const removePost = (post) => {
    remove(post)
  }
  const navigate = useNavigate()
  return (
    <div className="post">
      <div className="post__content">
        <div className="post__title">
          {post.id}. {post.title}
        </div>
        <div className="post__body">{post.body}</div>
      </div>
      <div className="post__buttons">
        <Button margin={5} onClick={() => navigate(`/posts/${post.id}`)}>open</Button>
        <Button margin={5} onClick={() => removePost(post)}>delete</Button>
      </div>
    </div>
  );
}

export default Post;
