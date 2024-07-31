import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/welcome.css";
import { getPosts } from "../api";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="welcome">
      <div className="welcome-section">
        <div className="welcome-text">
          <div className="welcome-text-header">
            <h1>Discover Hlogie-Dev</h1>
          </div>
          <div className="welcome-text-content">
            <p>
              Welcome to Hlogie-Dev, where technology meets insight. Our
              platform is dedicated to bringing you the most up-to-date
              information on the latest tech trends and innovations. Dive into
              our in-depth articles to gain a deeper understanding of the
              ever-evolving world of technology. From breakthrough gadgets to
              emerging software, we cover it all. Stay informed with our expert
              analyses and thought-provoking content. Join our community of tech
              enthusiasts and stay ahead of the curve. Explore and discover how
              technology is shaping our future.
            </p>
          </div>
        </div>
        <div className="welcome-image">
          <img
            src="https://techenthusiast.com/wp-content/uploads/markus-lb-1.jpg"
            alt="Welcome"
          />
        </div>
      </div>
      <h2 className="posts-header">Latest Blog Posts</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
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
