import React, { useEffect, useMemo, useState } from "react";
import "./styles/App.css";
import AddPostForm from "./components/add-post-form/AddPostForm";
import PostsFilter from "./components/posts-filter/PostsFilter";
import PostList from "./components/post-list/PostList";
import Hr from "./components/UI/hr/Hr";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";
import { useSortedAndSearchedPosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";


function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);



  const sortedAndSearchedPosts = useSortedAndSearchedPosts(
    posts,
    filter.sort,
    filter.query
  );

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getAll();
    setPosts(response.data);
  
  
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    const newPostId = Date.now();
    const post = { ...newPost, id: newPostId };
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const cancelCreating = (value) => {
    setModal(value);
  };

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
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Posts about js"
          postsError={postsError}
        ></PostList>
      )}

    </div>
  );
}

export default App;
