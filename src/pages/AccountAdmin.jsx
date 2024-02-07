import React, { useEffect } from "react";
import "../App.css";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import fetch from "cross-fetch";
import profile from "./id_9470706.png";
import axios from "axios";
import PaginationExample from "../components/PaginationExample";
import foodAndDrink from "../pages/food.jpeg";
import transport from "../pages/transport.jpeg";
import uncat from "../pages/uncategorized.jpeg";
import lugg from "../pages/lugg.jpeg";
import entertainment from "../pages/entertainment.jpeg";

function AccountAdmin(props) {
  //const [searchResults, setSearchResults] = useState([]);
  // const [saveEvents, setSaveEvents] = useState([]);

  let token = window.sessionStorage.getItem("token");
  const zahteviPoStranici = 3;
  const [trenutnaStranica, setTrenutnaStranica] = useState(1);
  const [trenutniZahtevi, setTrenutniZahtevi] = useState([]);
  const [typeEvents, setTypeEvents] = useState([]);
  const [eventsByType, setEventsByType] = useState(null);
  const [iden, setIden] = useState(-1);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/event-by-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let niz = [];
        niz.push(["Username", "Number of events"]);

        for (let i = 0; i < res.data.podaci.length; i++) {
          niz.push([
            res.data.podaci[i].username,
            res.data.podaci[i].numberOfEvents,
          ]);
        }
        setArr(niz);
        niz.map((item) => {
          console.log(item);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  useEffect(() => {
    filtrirajZahteve();
  }, [trenutnaStranica]);

  function filtrirajZahteve() {
    axios
      .get(
        "http://localhost:8000/api/event-paginate?page=" +
          trenutnaStranica +
          "&per_page=" +
          zahteviPoStranici,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setTrenutniZahtevi(res.data.data);
        console.log("Podaci: ", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const povecajStranicu = () => {
    setTrenutnaStranica(trenutnaStranica + 1);
    filtrirajZahteve();
  };

  const smanjiStranicu = () => {
    setTrenutnaStranica(trenutnaStranica - 1);
    filtrirajZahteve();
  };

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
        console.log("lol", id);

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
      setEventsByType(null);
      filtrirajZahteve();
    }
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
            username:
            <input
              disabled={true}
              placeholder={window.sessionStorage.getItem("username")}
            />
          </Row>
          <br />
          <Row>
            phone number:
            <input disabled={true} placeholder={phoneNumber} />
          </Row>
        </Col>
        <Col>
          <Table className={"table"} striped>
            <tbody>
              {arr.map((item) => {
                return (
                  <tr>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <br />
      <SearchBar onSearch={handleSearch} onSort={handleSort} />

      <br />
      <PaginationExample
        eventsByType={eventsByType}
        trenutniZahtevi={trenutniZahtevi}
        smanjiStranicu={smanjiStranicu}
        povecajStranicu={povecajStranicu}
        returnImage={returnImage}
        trenutnaStranica={trenutnaStranica}
      ></PaginationExample>
    </div>
  );
}

export default AccountAdmin;
