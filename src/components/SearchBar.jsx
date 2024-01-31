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
        style={{ width: 600, borderRadius: 10 }}
        type="text"
        placeholder="Unesite pojam za pretragu..."
        value={query}
        onChange={handleInputChange}
      />
      <input
        type="button"
        className="font"
        style={{ fontSize: 20, width: 150 }}
        value={"Pretraži"}
        onClick={handleSearch}
      ></input>
    </div>
  );
};

export default SearchBar;
