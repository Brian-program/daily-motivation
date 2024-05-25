// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Home</Link>
        <ul className="nav-links">
          <li>
            <Link to="/top-quotes" className="nav-link">Top Quotes</Link>
          </li>
          <li>
            <Link to="/generate-quote" className="nav-link">Generate Random</Link>
          </li>
          <li>
            <Link to="/favorite" className="nav-link">Personal Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
