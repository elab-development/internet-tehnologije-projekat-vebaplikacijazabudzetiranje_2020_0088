import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import DatePicker from "react-datepicker";

const SearchBar = ({ onFilter, onSearch, onSort }) => {
  const [query, setQuery] = useState("");
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [sortOrder, setSortOrder] = useState("");

  const role = window.sessionStorage.getItem("role");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  useEffect(() => {
    onSort(sortOrder);
  }, [sortOrder]);

  const filterEvents = () => {
    onFilter(dateFrom, dateTo);
  };

  return (
    <div className="search-bar">
      <input
        style={{ width: 400, borderRadius: 10 }}
        type="text"
        placeholder="Unesite pojam za pretragu..."
        value={query}
        onChange={handleInputChange}
      />
      <input
        type="button"
        className="font"
        style={{ fontSize: 20, width: 150 }}
        value={"Search"}
        onClick={handleSearch}
      ></input>

      {role === "admin" ? null : (
        <>
          <DatePicker
            selected={dateFrom}
            onChange={(dateFrom) => setDateFrom(dateFrom)}
            dateFormat="yyyy-MM-dd"
          />
          <DatePicker
            selected={dateTo}
            onChange={(dateTo) => setDateTo(dateTo)}
            dateFormat="yyyy-MM-dd"
          />
          <input
            type="button"
            className="font"
            style={{ fontSize: 20, width: 150 }}
            value={"Filter"}
            onClick={filterEvents}
          ></input>
        </>
      )}
      <input
        type="button"
        className="font"
        style={{ fontSize: 20, width: 150 }}
        value={"Desc"}
        onClick={() => setSortOrder("desc")}
      ></input>
      <input
        type="button"
        className="font"
        style={{ fontSize: 20, width: 150 }}
        value={"Asc"}
        onClick={() => setSortOrder("asc")}
      ></input>
    </div>
  );
};

export default SearchBar;
