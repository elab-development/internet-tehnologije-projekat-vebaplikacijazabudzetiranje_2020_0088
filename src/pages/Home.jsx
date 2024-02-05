import Modal from "../components/Modal";
import "../App.css";
import React, { useState, useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import axios from "axios";
const Home = () => {
  let token = window.sessionStorage.getItem("token");
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState(
    JSON.parse(window.sessionStorage.getItem("events")) || []
  );

  const [b, setb] = useState(false);

  const saveEvent = async (name, email, amount, type, type_id, date) => {
    const pararr = email.split(";");
    {
      pararr.map((x) => console.log(x));
    }
    const debt = amount / (pararr.length + 1);
    console.log(debt);
    const data = {
      name: name,
      email: email,
      amount: amount,
      debt: debt,
      type: type,
      type_id: type_id,
      date: date.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };
    const response = await axios.post(
      "http://localhost:8000/api/events",

      { name, amount, type_id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);

    const event_id = response.data.data.id;
    async function sendGetRequest(data) {
      const responseParticipant = await axios.get(
        `http://localhost:8000/api/user?email= ${data} `
      );

      const user_id = responseParticipant.data.data.id;

      const responseStoreParticipant = await axios.post(
        "http://localhost:8000/api/event-participants",

        { user_id, event_id, debt },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(responseParticipant.data.data.id);
    }

    async function sendGetRequestForArray() {
      for (const data of pararr) {
        await sendGetRequest(data);
      }
    }

    sendGetRequestForArray();
    // console.log(responseParticipant.data);

    const events = window.sessionStorage.getItem("events");
    let parsedEvents = JSON.parse(events);

    if (parsedEvents) {
      parsedEvents.push(data);
      window.sessionStorage.setItem("events", JSON.stringify(parsedEvents));
    } else {
      parsedEvents = [data];
      window.sessionStorage.setItem("events", JSON.stringify(parsedEvents));
    }

    setEvents(parsedEvents);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.post(
  //       "http://localhost:8000/api/events",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //       data
  //     );
  //     console.log(response.data.data);
  //   };
  //   fetchData();
  // }, [b]);

  return (
    <div className="font">
      <br />
      <br />
      <Row>
        <Col>
          <span className="welcomeFont"> Welcome home!</span>
        </Col>
        <Col>
          <img
            style={{ borderRadius: "50px" }}
            width={300}
            height={150}
            src="https://www.louisianafcu.org/hs-fs/hubfs/Blog_The%20polite%20persons%20guide%20to%20splitting%20the%20bill%20(558%20%C3%97%20325%20px).png?width=837&name=Blog_The%20polite%20persons%20guide%20to%20splitting%20the%20bill%20(558%20%C3%97%20325%20px).pngbud"
            alt="budgetApp"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Table className={"table"} striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Participant</th>
              <th>Amount</th>
              <th>Debt</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => {
              return (
                <tr>
                  <td>{event.name}</td>
                  <td>{event.email}</td>
                  <td>{event.amount}</td>
                  <td>{event.debt}</td>
                  <td>{event.type}</td>
                  <td>{event.date}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
      <Row>
        <input
          type="button"
          onClick={() => {
            setModalOpen(true);
          }}
          value={"Add event"}
        ></input>
      </Row>
      <br />
      {modalOpen && <Modal saveEvent={saveEvent} setOpenModal={setModalOpen} />}
    </div>
  );
};

export default Home;
