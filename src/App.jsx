import React, { useState } from "react";
import "./styles/App.css";
import Posts from "./components/post-list/PostList";
import AddPostForm from "./components/add-post-form/AddPostForm";
import Button from "./components/UI/button/Button";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "react 1", body: "something about redux" },
    { id: 2, title: "react 2", body: "something about redux" },
    { id: 3, title: "react 3", body: "something about redux" },
    { id: 4, title: "react 4", body: "something about redux" },
  ]);

  const createPost = (newPost) => {
    const newPostId = posts.length + 1;
    const post = { ...newPost, id: newPostId };
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };



  return (
    <div className="App">
      <AddPostForm create={createPost} />
      <Posts remove={removePost} posts={posts} title="Posts about js" />
    </div>
  );
}

export default App;
