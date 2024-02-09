import Modal from "../components/Modal";
import "../App.css";
import React, { useState, useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import axios from "axios";
import { Chart } from "react-google-charts";
import { CSVLink } from "react-csv";
const Home = () => {
  let token = window.sessionStorage.getItem("token");
  const role = window.sessionStorage.getItem("role");
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState(
    JSON.parse(window.sessionStorage.getItem("events")) || []
  );
  const [chartData, setChartData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/event-by-type-chart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let niz = [];
        niz.push(["Event type", "Number of events"]);

        for (let i = 0; i < res.data.podaci.length; i++) {
          niz.push([
            res.data.podaci[i].name,
            res.data.podaci[i].numberOfEvents,
          ]);
        }

        setChartData(niz);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const saveEvent = async (name, email, amount, type, type_id, date) => {
    const pararr = email.split(";");
    {
      pararr.map((x) => console.log(x));
    }

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

    const debt = amount / (pararr.length + 1);
    console.log(debt);
    const data = {
      event_id: event_id,
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

    async function sendGetRequest(data) {
      const responseParticipant = await axios.get(
        `http://localhost:8000/api/user?email= ${data} `
      );
      const user_id = responseParticipant.data.data.id;

      const response = await axios.post(
        "http://localhost:8000/api/event-participants",

        { user_id, event_id, debt },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    async function sendGetRequestForArray() {
      for (const data of pararr) {
        await sendGetRequest(data);
      }
    }

    sendGetRequestForArray();

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
  const toggleRow = (rowId) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  async function sendGetRequest(id) {
    try {
      const res = await axios.delete(`http://localhost:8000/api/events/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const eventsString = window.sessionStorage.getItem("events");
      console.log("eventsString:", eventsString);
      const parsedEvents = eventsString ? JSON.parse(eventsString) : [];
      const updatedEvents = parsedEvents.filter((item) => item.event_id !== id);
      setEvents(updatedEvents);
      window.sessionStorage.setItem("events", JSON.stringify(updatedEvents));
      console.log(res);
    } catch (error) {
      console.error("Greška prilikom brisanja:", error);
    }
  }
  async function sendGetRequestForArray() {
    for (const data of selectedRows) {
      console.log(data);
      await sendGetRequest(data);
    }
  }
  const deleteSelectedRows = () => {
    sendGetRequestForArray();

    setSelectedRows([]);
  };

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
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => {
              return (
                <tr key={event.event_id}>
                  <td>{event.name}</td>
                  <td>{event.email}</td>
                  <td>{event.amount}</td>
                  <td>{event.debt}</td>
                  <td>{event.type}</td>
                  <td>{event.date}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(event.event_id)}
                      onChange={() => toggleRow(event.event_id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
      <Row>
        <Col>
          <input
            type="button"
            onClick={() => {
              setModalOpen(true);
            }}
            value={"Add event"}
          ></input>
        </Col>
        <Col>
          <input
            type="button"
            onClick={deleteSelectedRows}
            value={"Delete"}
          ></input>
        </Col>
      </Row>
      {role === "user" ? null : (
        <Row className="mt-3">
          <Chart
            chartType="PieChart"
            data={chartData}
            width="100%"
            height="400px"
            legendToggle
            options={{
              enableInteractivity: false,
            }}
          />
          <CSVLink filename="ChartData" data={chartData}>
            Download chart data
          </CSVLink>
        </Row>
      )}
      <br />
      {modalOpen && <Modal saveEvent={saveEvent} setOpenModal={setModalOpen} />}
    </div>
  );
};

export default Home;
