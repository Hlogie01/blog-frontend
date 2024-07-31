import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import logoImage from "../assets/software-development-icon.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar-logo">
        <img src={logoImage} alt="Hlogie-Dev Logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/new-post">Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
