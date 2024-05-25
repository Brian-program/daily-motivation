import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import TopQuotes from './pages/TopQuotes/TopQuotes';
import QuoteGenerator from './pages/QuoteGenerator/QuoteGenerator.js'; // Import the new component
import PersonalFavorites from './pages/PersonalFavorite/PersonalFavorite.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-quotes" element={<TopQuotes />} />
        <Route path="/generate-quote" element={<QuoteGenerator />} /> {/* Add route for the quote generator */}
        <Route path="/favorite" element={<PersonalFavorites />} /> 
      </Routes>
    </Router>
  );
}

export default App;
