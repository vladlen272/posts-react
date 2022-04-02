import React, { useMemo, useState } from "react";
import "./styles/App.css";
import Posts from "./components/post-list/PostList";
import AddPostForm from "./components/add-post-form/AddPostForm";
import Select from "./components/UI/select/Select";
import Input from "./components/UI/input/Input";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "js", body: "js is better" },
    { id: 2, title: "python", body: "no python is better" },
    { id: 3, title: "react", body: "what are you speaking about" },
    { id: 4, title: "redux", body: "i dont know bro" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    const newPostId = Date.now();
    const post = { ...newPost, id: newPostId };
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <AddPostForm create={createPost} />
      <hr
        style={{
          margin: "15px 0",
          border: "0.1px solid blue",
          backgroundColor: "blue",
        }}
      />
      <Input
        placeholder="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></Input>
      <Select
        onChange={sortPosts}
        value={selectedSort}
        defaultValue={"select"}
        options={[
          { value: "title", name: "title" },
          { value: "body", name: "body" },
        ]}
      />
      <Posts
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts about js"
      />
    </div>
  );
}

export default App;
