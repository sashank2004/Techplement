import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Quote = ({ text, author }) => {
  return (
    <div className="quote">
      <p>{text}</p>
      <p><em>- {author}</em></p>
    </div>
  );
};
function QuoteOfDay() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    const response = await axios.get(`http://localhost:5000/api/quotes/random`);
    setQuote(response.data);
  };

  return (
  <div>
    <div className="quote-heading">
      Quote Of the Day     
      </div>
      <div className="App">
      <div className="App-header">
        <Quote text={quote.text} author={quote.author} />
        <button onClick={fetchRandomQuote}>New Quote</button>
      </div>
    </div>
  </div>
  )
}

export default QuoteOfDay;
