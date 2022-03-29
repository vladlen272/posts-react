import React from "react";
import Button from "../UI/button/Button";
import "./PostItem.css";

function Post(props) {
  return (
    <div className="post">
      <div className="post__content">
        <div className="post__title">
          {props.post.id}. {props.post.title}
        </div>
        <div className="post__body">{props.post.body}</div>
      </div>
      <div className="post__buttons"><Button>delete</Button></div>
    </div>
  );
}

export default Post;
