import Modal from "../components/Modal";
import "../App.css";
import React, { useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState(
    JSON.parse(window.sessionStorage.getItem("events")) || []
  );

  const saveEvent = (name, email, amount, type, date) => {
    const data = {
      name: name,
      email: email,
      amount: amount,
      type: type,
      date: date.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    console.log(data);

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

  return (
    <div>
      <h1>Hey</h1>
      <Row>
        <Col>
          <Table className="table" striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Amount</th>
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
                    <td>{event.type}</td>
                    <td>{event.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <Col>
          <button
            className="openModalBtn"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Add event
          </button>
        </Col>
      </Row>
      <br />

      {modalOpen && <Modal saveEvent={saveEvent} setOpenModal={setModalOpen} />}
    </div>
  );
};

export default Home;
