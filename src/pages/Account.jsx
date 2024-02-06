import React, { useEffect } from "react";
import "../App.css";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import fetch from "cross-fetch";
import profile from "./id_9470706.png";
import axios from "axios";
import PaginationExample from "../components/PaginationExample";
import foodAndDrink from "../pages/food.jpeg";
import transport from "../pages/transport.jpeg";
import uncat from "../pages/uncategorized.jpeg";
import lugg from "../pages/lugg.jpeg";
import entertainment from "../pages/entertainment.jpeg";
import CardEvent from "../components/CardEvent";
import MyButton from "../components/MyButton";

function Account(props) {
  const [iden, setIden] = useState(-1);
  let token = window.sessionStorage.getItem("token");

  const [typeEvents, setTypeEvents] = useState([]);
  const [eventsByType, setEventsByType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/type_events",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setTypeEvents(response.data);
    };
    fetchData();
  }, []);

  const returnImage = (value) => {
    switch (value) {
      case "Travel":
        return lugg;
      case "Transportation":
        return transport;
      case "Entertainment":
        return entertainment;
      case "Food and drink":
        return foodAndDrink;
      default:
        return uncat;
    }
  };

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
    if (query != "") {
      const pretraga = typeEvents.filter((item) => {
        return item.name.toLowerCase() === query.toLowerCase();
      });

      if (pretraga.length == 0) {
        alert("Please enter full type name.");
      } else {
        const id = pretraga[0].id;

        setIden(id);

        axios
          .get(`http://localhost:8000/api/event-by-type/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setEventsByType(res.data.data);
            console.log("svi: ", res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      setEventsByType([]);
    }
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let day = date.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    return `${year}-${month}-${day}`;
  };

  const filterEvents = (dateFrom, dateTo) => {
    const formattedDateFrom = formatDate(new Date(dateFrom));
    const formattedDateTo = formatDate(new Date(dateTo));
    const userId = window.sessionStorage.getItem("id");
    axios
      .get(
        `http://localhost:8000/api/filter-events?dateFrom=${formattedDateFrom}&dateTo=${formattedDateTo}&type_id=${iden}&user_id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setEventsByType(res.data.data);
        console.log("filtrirani po datumu: ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSort = (sortOrder) => {
    axios
      .get(
        `http://localhost:8000/api/event-by-type/${iden}?sort_direction=${sortOrder}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setEventsByType(res.data.data);
        //console.log("sortirani po: ", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <Row>
        <SearchBar
          onFilter={filterEvents}
          onSearch={handleSearch}
          onSort={handleSort}
        />
      </Row>

      <Row>
        {eventsByType.map((item) => {
          return (
            <Col>
              <CardEvent
                type={item.type.name}
                name={item.name}
                email={item.user.email}
                amount={item.amount}
                date={item.eventDate}
                image={returnImage(item.type.name)}
              ></CardEvent>
            </Col>
          );
        })}
      </Row>
      <br />
    </div>
  );
}

export default Account;
