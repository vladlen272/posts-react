import React, { useState } from "react";
import "./styles/App.css";
import Posts from "./components/post-list/PostList";
import Input from "./components/UI/input/Input";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "react", body: "something about redux" },
    { id: 2, title: "react", body: "something about redux" },
    { id: 3, title: "react", body: "something about redux" },
    { id: 4, title: "react", body: "something about redux" },
  ]);
  return (
    <div className="App">
      <Input placeholder="search does not work"/>
      <Posts posts={posts} title="Posts about js" />
    </div>
  );
}

export default App;
