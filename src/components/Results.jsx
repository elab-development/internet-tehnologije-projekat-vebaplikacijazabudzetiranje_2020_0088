import React from "react";
import "./SearchBar.css";

const Results = ({ searchResults }) => {
  return (
    <div className="search-results">
      <h2>Rezultati pretrage:</h2>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};
export default Results;
