import React, { useState } from "react";
import "./styles/App.css";
import Posts from "./components/post-list/PostList";
import AddPostForm from "./components/add-post-form/AddPostForm";
function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "react", body: "something about redux" },
    { id: 2, title: "react", body: "something about redux" },
    { id: 3, title: "react", body: "something about redux" },
    { id: 4, title: "react", body: "something about redux" },
  ]);

  const createPost = (newPost) => {
    const newPostId = posts.length + 1
    const post = {...newPost, id: newPostId}
    setPosts([...posts, post])
  }

  return (
    <div className="App">
      <AddPostForm create={createPost}/>
      <Posts posts={posts} title="Posts about js" />
    </div>
  );
}

export default App;
