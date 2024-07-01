import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'
const Quote = ({ text, author }) => {
  return (
    <div className="quote">
      <p>{text}</p>
      <p><em>- {author}</em></p>
    </div>
  );
};
const Search = ({ onSearch,onShow }) => {
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(author);
  };

  return (
    <div style={{display:"flex"}}>
      <form style={{marginLeft:"6px"}} onSubmit={handleSubmit}>
      <input
        type="text"      
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Search by author"
      />
      <button type="submit">Search</button>
      
    </form>
      <button onClick={onShow} type="submit">Show All</button>
    </div>
  );
};
function SearchByAuthor(){
  const [searchResults, setSearchResults] = useState([]);
  const searchQuotes = async (author) => {
    const response = await axios.get(`http://localhost:5000/api/quotes/search?author=${author}`);
    setSearchResults(response.data);
  };
  const showAll = async () => {
    const response = await axios.get(`http://localhost:5000/api/quotes/`);
    setSearchResults(response.data);
  };
  return(
    <div>
      <div class="quote-heading">
       Search By Author Name   
      </div>
<div class="App">
<div class="App-header">
      <Search onSearch={searchQuotes} onShow={showAll}  />
        <div>
          {searchResults.map((result) => (
            <Quote text={result.text} author={result.author} />
          ))}
        </div>
      </div>
</div>       
    </div>
  );
}
export default SearchByAuthor;