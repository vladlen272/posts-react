import React, { useState } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

function AddPostForm({ create, cancel }) {
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    if (typeof newPost.title === "string" && newPost.title.trim().length == 0) {
      alert("you must write the title of the post");
      setNewPost({ ...newPost, title: "" });

      return;
    }
    if (Boolean(!newPost.body.trim())) {
      alert("you must write  the body of the post");
      setNewPost({ ...newPost, body: "" });

      return;
    }

    create(newPost);
    setNewPost({ title: "", body: "" });
    cancel(false);
  };

  const cancelAddingPosts = (e) => {
    e.preventDefault();
    setNewPost({ title: "", body: "" });

    cancel(false);
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
