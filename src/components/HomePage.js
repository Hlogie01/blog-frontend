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
    <div className="homepage">
      <div className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome to Hlogie-NutriBlog</h1>
          <p>Your ultimate destination for delicious food recipes and nutrition tips. Dive into our collection of mouth-watering dishes and start your culinary journey with us!</p>
        </div>
        <div className="welcome-image">
          <img src="https://example.com/welcome-image.jpg" alt="Welcome to Hlogie-NutriBlog" />
        </div>
      </div>
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
