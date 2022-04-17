import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";

function PostId() {
  const params = useParams();
  const [PostById, setPostById] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPostById(params.id);
    setPostById(response.data);
  });
  const [fetchCommentsByPostId, isCommentsLoading, commentsError] = useFetching(
    async () => {
      const response = await PostService.getCommentsByPostId(params.id);
      setComments(response.data);
    }
  );
  useEffect(() => {
    fetchPostById();
    fetchCommentsByPostId();
  }, [params.id]);


  return (
    <div>
      <h1>hello you are in a post {params.id}</h1>
      {isLoading ? <Loader /> : PostById.title}
      {error}

      <h1
        style={{
          marginTop: "25px",
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        comments
      </h1>
      {isCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comment) => (
            <div style={{ marginTop: "15px" }} key={comment.id}>
              <h1>{comment.email}</h1>
              <div> {comment.body}</div>
            </div>
          ))}
        </div>
      )}
      {commentsError}
    </div>
  );
}

export default PostId;
