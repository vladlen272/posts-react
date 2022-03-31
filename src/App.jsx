import React, { useState } from "react";
import "./styles/App.css";
import Posts from "./components/post-list/PostList";
import AddPostForm from "./components/add-post-form/AddPostForm";
import Select from "./components/UI/select/Select";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "js", body: "js is better" },
    { id: 2, title: "python", body: "no python is better" },
    { id: 3, title: "react", body: "what are you speaking about" },
    { id: 4, title: "redux", body: "i dont know bro" },
  ]);

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    const newPostId = posts.length + 1;
    const post = { ...newPost, id: newPostId };
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }



  return (
    <div className="App">
      <AddPostForm create={createPost} />
      <Select onChange={sortPosts} value={selectedSort} defaultValue={'select'} options={[{value: 'title', name: 'title'}, {value: 'body', name: 'body'}]}/>
      <Posts remove={removePost} posts={posts} title="Posts about js" />
    </div>
  );
}

export default App;
