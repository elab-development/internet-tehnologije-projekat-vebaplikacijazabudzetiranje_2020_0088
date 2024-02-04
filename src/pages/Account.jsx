import React, { useEffect } from "react";
import "../App.css";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Pagination from "../components/Pagination";
import fetch from "cross-fetch";
import profile from "./id_9470706.png";
import axios from "axios";

function Account(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [saveEvents, setSaveEvents] = useState([]);
  let token = window.sessionStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);

      setSaveEvents(response.data.data);
      setSearchResults(response.data.data);
    };
    fetchData();
  }, []);

  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    generateRandomPhoneNumber();
  }, []);
  const generateRandomPhoneNumber = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/5"
      );
      const data = await response.json();
      const phone = data.phone;
      setPhoneNumber(phone);
      console.log(data.phone);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (query) => {
    const pretraga = saveEvents.filter((item) => {
      return item.type.name.toLowerCase().includes(query.toLowerCase());
    });
    setSearchResults(pretraga);
  };
  // const handleSearch = (query) => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "http://localhost:8000/api/event-paginate?per_page=3",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //   };
  //   fetchData();
  // };
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
            <img src={profile} style={{ width: 150, height: 150 }} />
          </h4>
        </Col>
        <Col>
          <Row>
            email:
            <input disabled={true} placeholder={props.email} />
          </Row>
          <br />
          <Row>
            phone number:
            <input disabled={true} placeholder={phoneNumber} />
          </Row>
        </Col>
        <Col></Col>
      </Row>
      <br />
      <SearchBar onSearch={handleSearch} />

      <br />
      <Pagination data={searchResults}></Pagination>
    </div>
  );
}

export default Account;
