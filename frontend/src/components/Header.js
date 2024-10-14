// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>ICREP</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/conference">Conference</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;