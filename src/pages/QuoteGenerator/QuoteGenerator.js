import React, { useState, useEffect } from 'react';
import './QuoteGenerator.css'; // Import your CSS file

function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Failed to fetch random quote');
      }
      const data = await response.json();
      setQuote(data.content);
      setError(null); // Reset error state if successful
    } catch (error) {
      console.error('Error fetching random quote:', error);
      setQuote('Error fetching quote. Please try again.'); // Set quote to error message
      setError(error.message); // Set error state with the error message
    }
  };

  return (
    <div className="quote-generator">
      <button className="generate-button" onClick={fetchRandomQuote}>Generate Random Quote</button>
      {error ? (
        <div className="quote-error">
          <p>Error: {error}</p>
        </div>
      ) : (
        <div className="quote">
          {quote && (
            <div>
              <blockquote>{quote}</blockquote>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuoteGenerator;
