// frontend/src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../api';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome to Hlogie-Dev</h1>
          <p>Your go-to place for the latest updates in the world of Tech !</p>
        </div>
        <div className="welcome-image">
          <img src="https://techenthusiast.com/wp-content/uploads/markus-lb-1.jpg" alt="Welcome" />
        </div>
      </div>
      <h2 className="posts-header">Check out some of our latest blog posts below</h2>
      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <img src={post.image} alt={post.title} />
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`}>Read more</Link>
          </div>
        ))}
      </div>
      <footer>
        <p>© 2024. All rights reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
