import React, { useEffect } from "react";
import "../App.css";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Rate from "../components/Rate";
import Pagination from "../components/Pagination";
import { left } from "@popperjs/core";
import fetch from "cross-fetch";

function Account(props) {
  const saveEvents = [
    {
      name: "Coffee",
      email: "marko@gmail.com",
      amount: 500,
      type: "Food and Drink",
      date: "30/01/2024",
      image:
        "https://images.pexels.com/photos/1170659/pexels-photo-1170659.jpeg?cs=srgb&dl=art-bread-breakfast-1170659.jpg&fm=jpg",
    },
    {
      name: "Taxi",
      email: "marko@gmail.com",
      amount: 1000,
      type: "Transportation",
      date: "30/01/2024",
      image:
        "https://www.proferecursos.com/wp-content/uploads/Means-of-transport-vocabulary-taxi.jpg",
    },
    {
      name: "Picado",
      email: "luka@gmail.com",
      amount: 370,
      type: "Entertainment",
      date: "15/01/2024",
      image:
        "https://www.eventmanagerblog.com/wp-content/uploads/2018/10/350x215-FEAT-in-post-Entertainment.jpg",
    },
    {
      name: "Lunch",
      email: "mila@gmail.com",
      amount: 3000,
      type: "Food and Drink",
      date: "23/01/2024",
      image:
        "https://images.pexels.com/photos/1170659/pexels-photo-1170659.jpeg?cs=srgb&dl=art-bread-breakfast-1170659.jpg&fm=jpg",
    },
    {
      name: "Coffee with sister",
      email: "sara@gmail.com",
      amount: 500,
      type: "Food and Drink",
      date: "30/01/2024",
      image:
        "https://images.pexels.com/photos/1170659/pexels-photo-1170659.jpeg?cs=srgb&dl=art-bread-breakfast-1170659.jpg&fm=jpg",
    },
    {
      name: "Barselona",
      email: "lazar@gmail.com",
      amount: 50000,
      type: "Travel",
      date: "30/01/2024",
      image:
        "https://travelprnews.com/wp-content/uploads/2021/11/https___specials-images.forbesimg.com_imageserve_920377840_0x0.jpg",
    },
    {
      name: "Billiards",
      email: "ognjen@gmail.com",
      amount: 500,
      type: "Entertainment",
      date: "30/01/2024",
      image:
        "https://www.eventmanagerblog.com/wp-content/uploads/2018/10/350x215-FEAT-in-post-Entertainment.jpg",
    },
    {
      name: "Paris",
      email: "mila@gmail.com",
      amount: 80000,
      type: "Travel",
      date: "18/12/2023",
      image:
        "https://travelprnews.com/wp-content/uploads/2021/11/https___specials-images.forbesimg.com_imageserve_920377840_0x0.jpg",
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
            <img
              src="https://lh3.googleusercontent.com/-WFscYdOjVPbNYRlZ4gCyiuk137pZL8WLveTo_xUZYfBVanaIUwC9uObuNNkkMiaEg=s100-rw"
              style={{ width: 150, height: 150 }}
            />
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
