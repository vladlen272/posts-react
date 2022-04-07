import React from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
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
        <TransitionGroup>
          {posts.map((post, index) => (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <Post remove={removePost} post={post} index={index} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default PostList;
