import React, { useEffect, useRef, useState } from "react";

import PostService from "../API/PostService";

import { useSortedAndSearchedPosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { usePagination } from "../hooks/usePagination";

import { getPageCount } from "../utils/pages";

import AddPostForm from "../components/add-post-form/AddPostForm";
import PostList from "../components/post-list/PostList";
import PostsFilter from "../components/posts-filter/PostsFilter";
import Button from "../components/UI/button/Button";
import Hr from "../components/UI/hr/Hr";
import Loader from "../components/UI/loader/Loader";
import Modal from "../components/UI/modal/Modal";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import Select from "../components/UI/select/Select";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [modal, setModal] = useState(false);

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const lastElement = useRef();

  const sortedAndSearchedPosts = useSortedAndSearchedPosts(
    posts,
    filter.sort,
    filter.query
  );

  let pagesArray = usePagination(totalPages);

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  useObserver(lastElement, isPostsLoading, page < totalPages, () => {
    setPage(page + 1);
  });

  const changePage = (page) => {
    setPage(page);
  };

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
    <div className="Posts">
      <Button style={{ marginLeft: "0" }} onClick={() => setModal(true)}>
        Create a new post
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <AddPostForm create={createPost} cancel={cancelCreating} />
      </Modal>
      <Hr />
        
      <PostsFilter  filter={filter} setFilter={setFilter} />
      <div style={{marginBottom: "10px"}} ></div>
      <Select
        onChange={(value) => setLimit(value)}
        value={limit}
        defaultValue="select limit"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" }
        ]}
      />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts about js"
        postsError={postsError}
      ></PostList>
      <div style={{ height: "20px" }} ref={lastElement}></div>
      {isPostsLoading && <Loader />}
      {/* <Pagination list={pagesArray} changeItem={(page) => changePage(page)} /> */}
    </div>
  );
};

export default Posts;
