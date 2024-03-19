import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import TopQuotes from './pages/TopQuotes/TopQuotes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-quotes" element={<TopQuotes />} />
        {/* Add more routes for additional pages */}
      </Routes>
    </Router>
  );
}

export default App;
