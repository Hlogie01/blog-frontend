// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Nutri Logo-Image.png'; // Make sure you have a logo image in the assets folder

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="navbar-logo">
          <img src={logoImage} alt="Hlogie-Dev Logo" />
          <span><i>Hlogie-Dev</i></span>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/new-post">New Post</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
