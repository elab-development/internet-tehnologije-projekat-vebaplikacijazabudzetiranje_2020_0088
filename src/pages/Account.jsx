import React from "react";
import "../App.css";
import { BsPersonBadgeFill } from "react-icons/bs";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

function Account(props) {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (query) => {
    // Simulirajte pretragu (ovdje biste koristili stvaran API ili funkciju pretrage)
    const fakeSearchResults = ["Rezultat 1", "Rezultat 2", "Rezultat 3"];
    setSearchResults(fakeSearchResults);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Results searchResults={searchResults} />

      <br />
      <Row>
        <Col>
          <h1>Account</h1>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            <BsPersonBadgeFill style={{ width: 100, height: 100 }} />
          </h4>
        </Col>
        <Col>
          <Row>
            email:
            <input disabled={true} placeholder={props.email} />
          </Row>
          <Row>
            password:
            <input disabled={true} placeholder="***" />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Account;
