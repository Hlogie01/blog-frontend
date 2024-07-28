import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../api';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className="welcome-section">
        <div>
          <h1>Welcome to Hlogie-Dev</h1>
          <p>Your source for the latest software development updates.</p>
        </div>
        <img src="path/to/your/image.jpg" alt="Welcome" />
      </div>

      <div className="blogs-intro">
        <p>Check out some of our interesting blogs below:</p>
      </div>

      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/posts/${post.id}`}>Read more</Link>
          </div>
        ))}
      </div>

      <footer>
        © 2024. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
