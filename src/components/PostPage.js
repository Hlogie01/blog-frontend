// frontend/src/components/PostPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost, addComment } from '../api';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPost(id);
      setPost(fetchedPost);
      setComments(fetchedPost.comments || []);
    };
    fetchPost();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newComment = { text: comment };
    await addComment(id, newComment);
    setComments([...comments, newComment]);
    setComment('');
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-page">
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
      <hr />
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <div>
          <label>Leave a comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default PostPage;
