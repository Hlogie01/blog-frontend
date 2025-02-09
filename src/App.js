import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
