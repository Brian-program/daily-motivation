import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container" style={{ backgroundImage: `url(/fog.gif)` }}>
      <div className="quote-overlay">
        <div className="quote-section">
          <h2 className="quote-text">"START YOUR DAY WITH SOME INSPIRATION"
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
