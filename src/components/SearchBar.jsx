import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Unesite pojam za pretragu..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Pretraži</button>
    </div>
  );
};

export default SearchBar;
