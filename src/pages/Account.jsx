import React, { useEffect } from "react";
import "../App.css";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Pagination from "../components/Pagination";
import fetch from "cross-fetch";
import profile from "./id_9470706.png";
import foodAndDrink from "./food.jpeg";
import transport from "./transport.jpeg";
import uncat from "./uncategorized.jpeg";
import lugg from "./lugg.jpeg";
import entertainment from "./entertainment.jpeg";

function Account(props) {
  const returnImage = (value) => {
    switch (value) {
      case "Travel":
        return lugg;
      case "Transportation":
        return transport;
      case "Entertainment":
        return entertainment;
      case "Food and Drink":
        return foodAndDrink;
      default:
        return <img src={uncat} alt="Uncategorized image" />;
    }
  };
  const saveEvents = [
    {
      name: "Coffee",
      email: "marko@gmail.com",
      amount: 500,
      type: "Food and Drink",
      date: "30/01/2024",
      image: returnImage("Food and Drink"),
    },
    {
      name: "Taxi",
      email: "marko@gmail.com",
      amount: 1000,
      type: "Transportation",
      date: "30/01/2024",
      image: returnImage("Transportation"),
    },
    {
      name: "Picado",
      email: "luka@gmail.com",
      amount: 370,
      type: "Entertainment",
      date: "15/01/2024",
      image: returnImage("Entertainment"),
    },
    {
      name: "Lunch",
      email: "mila@gmail.com",
      amount: 3000,
      type: "Food and Drink",
      date: "23/01/2024",
      image: returnImage("Food and Drink"),
    },
    {
      name: "Coffee with sister",
      email: "sara@gmail.com",
      amount: 500,
      type: "Food and Drink",
      date: "30/01/2024",
      image: returnImage("Food and Drink"),
    },
    {
      name: "Barselona",
      email: "lazar@gmail.com",
      amount: 50000,
      type: "Travel",
      date: "30/01/2024",
      image: returnImage("Travel"),
    },
    {
      name: "Billiards",
      email: "ognjen@gmail.com",
      amount: 500,
      type: "Entertainment",
      date: "30/01/2024",
      image: returnImage("Entertainment"),
    },
    {
      name: "Dentist",
      email: "mila@gmail.com",
      amount: 80000,
      type: "Uncategorized",
      date: "18/12/2023",
      image: uncat,
    },
  ];

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

  const [searchResults, setSearchResults] = useState(saveEvents);
  const handleSearch = (query) => {
    const pretraga = saveEvents.filter((item) => {
      return item.type.toLowerCase().includes(query.toLowerCase());
    });

    setSearchResults(pretraga);
  };

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
