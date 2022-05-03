import React, { useState } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

function AddPostForm({ create, cancel }) {
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    create(newPost);
    setNewPost({ title: "", body: "" });
    cancel(false);
  };

  const cancelAddingPosts = (e) => {
    e.preventDefault();
    cancel(false);
    setNewPost({ title: "", body: "" });
  };

  return (
    <form>
      <Input
        placeholder="name of the post"
        value={newPost.title}
        onChange={(event) =>
          setNewPost({ ...newPost, title: event.target.value })
        }
      />
      <Input
        placeholder="description of the post"
        value={newPost.body}
        onChange={(event) =>
          setNewPost({ ...newPost, body: event.target.value })
        }
      />
      <Button style={{ marginRight: "10px" }} onClick={addNewPost}>
        add new post
      </Button>
      <Button onClick={cancelAddingPosts}>cancel</Button>
    </form>
  );
}

export default AddPostForm;
