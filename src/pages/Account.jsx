import React, { useEffect } from "react";
import "../App.css";
import { BsPersonBadgeFill } from "react-icons/bs";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Rate from "../components/Rate";
import Pagination from "../components/Pagination";

function Account(props) {
  const saveEvents = [
    {
      name: "Coffee",
      email: "user@gmail.com",
      amount: 500,
      type: "Food and Drink",
      date: "30/01/2024",
      image:
        "https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg",
    },
    {
      name: "Coffee",
      email: "user@gmail.com",
      amount: 500,
      type: "Food and Drink",
      date: "30/01/2024",
      image:
        "https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg",
    },
    {
      name: "Coffee",
      email: "user@gmail.com",
      amount: 500,
      type: "Food and Drink",
      date: "30/01/2024",
      image:
        "https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg",
    },
    {
      name: "Coffee",
      email: "user@gmail.com",
      amount: 500,
      type: "Food and Drink",
      date: "30/01/2024",
      image:
        "https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg",
    },
    {
      name: "Coffee",
      email: "user@gmail.com",
      amount: 500,
      type: "Food and Drink",
      date: "30/01/2024",
      image:
        "https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg",
    },
    {
      name: "Coffee",
      email: "user@gmail.com",
      amount: 500,
      type: "Food and Drink",
      date: "30/01/2024",
      image:
        "https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg",
    },
    {
      name: "Coffee",
      email: "user@gmail.com",
      amount: 500,
      type: "Food and Drink",
      date: "30/01/2024",
      image:
        "https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg",
    },
    {
      name: "Coffee",
      email: "user@gmail.com",
      amount: 500,
      type: "Travel",
      date: "30/01/2024",
      image:
        "https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg",
    },
  ];

  const [searchResults, setSearchResults] = useState(saveEvents);
  const handleSearch = (query) => {
    const pretraga = saveEvents.filter((item) => {
      return item.type.toLowerCase().includes(query.toLowerCase());
    });

    setSearchResults(pretraga);
  };

  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
      (response) =>
        response.json().then((data) => {
          setImages(data);
        })
    );
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <h1 className="font" style={{ fontSize: 60, color: "#6bae8f" }}>
            Account
          </h1>
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
          <br />
          <Row>
            password:
            <input disabled={true} placeholder="*" />
          </Row>
        </Col>
      </Row>
      <br />
      <SearchBar onSearch={handleSearch} />

      <br />
      <Pagination data={searchResults}></Pagination>
      <Row>
        <Rate></Rate>
      </Row>
    </div>
  );
}

export default Account;
