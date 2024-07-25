// frontend/src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../api';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Hlogie-NutriBlog</h1>
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} />
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
