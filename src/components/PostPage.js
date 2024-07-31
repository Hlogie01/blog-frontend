import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPost, addComment, deleteComments } from "../api";
import "../styles/post.css";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPost(id);
        if (fetchedPost) {
          setPost(fetchedPost);
          setComments(fetchedPost.comments || []);
        } else {
          setError("Post not found");
        }
      } catch (err) {
        setError("Failed to fetch post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newComment = { text: comment }; // Construct the comment object manually
    try {
      await addComment(id, newComment); // Call API to add comment
      setComments((prevComments) => [...prevComments, newComment]); // Add new comment to the state
      setComment(""); // Clear the input
    } catch (err) {
      setError("Failed to add comment");
    }
  };

  const handleDeleteComments = async () => {
    try {
      await deleteComments(id);
      setComments([]);
    } catch (err) {
      setError("Failed to delete comments");
    }
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} className="post-image" />
      <p className="post-content">{post.content}</p>
      <hr className="post-divider" />
      <h3>Comments</h3>
      <button className="delete-comments-button" onClick={handleDeleteComments}>
        erase
      </button>
      <ul className="comments-list">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <li key={index} className="comment-item">
              {comment.text}
            </li>
          ))
        ) : (
          <li>No comments yet</li>
        )}
      </ul>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <div className="comment-input-group">
          <label htmlFor="comment">Leave a comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="comment-textarea"
          />
        </div>
        <button type="submit" className="comment-button">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default PostPage;
