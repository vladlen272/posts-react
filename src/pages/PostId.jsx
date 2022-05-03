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
      {isLoading ? (
        <Loader />
      ) : (
        <div> <h1
          style={{
            fontSize: "26px",
            
            margin: "25px 0",
            fontWeight: "600",
          }}
        >
          {" "}
          {PostById.title}
        </h1>
        <div style={{margin: "-10px 0",}}>{PostById.body}</div>
        </div>
      )}
      {error}

      <h1
        style={{
          marginTop: "45px",
          fontSize: "24px",
          fontWeight: "bold",
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
              <h1 style={{ fontSize: "26px", margin: "15px 0" }}>
                {comment.email}
              </h1>
              <div style={{ fontSize: "18px" }}> {comment.body}</div>
            </div>
          ))}
        </div>
      )}
      {commentsError}
    </div>
  );
}

export default PostId;
