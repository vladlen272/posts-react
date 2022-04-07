import React, { useMemo, useState } from "react";
import "./styles/App.css";
import AddPostForm from "./components/add-post-form/AddPostForm";
import PostsFilter from "./components/posts-filter/PostsFilter";
import PostList from "./components/post-list/PostList";
import Hr from "./components/UI/hr/Hr";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "js", body: "js is better" },
    { id: 2, title: "python", body: "no python is better" },
    { id: 3, title: "react", body: "what are you speaking about" },
    { id: 4, title: "redux", body: "i dont know bro" },
  ]);

  const [filter, setFilter] = useState({ select: "", search: "" });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.select) {
      return [...posts].sort((a, b) =>
        a[filter.select].localeCompare(b[filter.select])
      );
    }
    return posts;
  }, [filter.select, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.search.toLowerCase())
    );
  }, [filter.search, sortedPosts]);

  const createPost = (newPost) => {
    const newPostId = Date.now();
    const post = { ...newPost, id: newPostId };
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const cancelCreating = (value) => {
    setModal(value)
  }

  return (
    <div className="App">
      <Button style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create a new post
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <AddPostForm create={createPost} cancel={cancelCreating} />
      </Modal>
      <Hr />
      <PostsFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts about js"
      ></PostList>
    </div>
  );
}

export default App;
