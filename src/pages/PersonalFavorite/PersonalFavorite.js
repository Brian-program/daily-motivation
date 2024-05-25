import React from 'react';
import personalFavoriteQuotes from './personalFavoriteQuotes.js'; // Import the array of personal favorite quotes
import './PersonalFavorite.css'; // Import the CSS file

function PersonalFavorites() {
  return (
    <div className="personal-favorites-container">
      <h2>Personal Favorites</h2>
      <ul>
        {personalFavoriteQuotes.map((quote, index) => (
          <li key={index}>
            <blockquote>{quote}</blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonalFavorites;
