// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import Navbar styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">My Quotes</Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/top-quotes" className="nav-link">Top Quotes</Link>
          </li>
          {/* Add more navigation links for additional pages */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
