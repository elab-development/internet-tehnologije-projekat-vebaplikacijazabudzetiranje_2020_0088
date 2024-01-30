import React from "react";
import "../App.css";
import { BsEnvelopeAt } from "react-icons/bs";
import { Row, Col, Accordion } from "react-bootstrap";
import GoogleMaps from "./GoogleMaps";
function ContactSupport() {
  const pitanja = [
    {
      id: 1,
      pitanje: "How do I use BudgetApp?",
      odgovor:
        "General BudgetApp is an app for splitting expenses with your friends. It lets you and your friends add various bills and keep track of who owes who, and then it helps you to settle up with each other. Here's a quick overview of how it works. First, sign up for an account!",
    },
    {
      id: 2,
      pitanje: "Why can other people edit or delete expenses that I add?",
      odgovor:
        "On BudgetApp, a person can view, edit, or delete a bill if: (a) They are involved in that bill, or (b) They belong to the group which that bill is a part of.",
    },
    {
      id: 3,
      pitanje:
        "General Why do I have to add friends in order to use BudgetApp? Can I add a friend without an email address or phone number?",
      odgovor:
        "BudgetApp was built specifically to keep track of IOUs with other people. All bills on BudgetApp are split – you can't add an expense unless you're sharing it with someone else (someone who you owe, or who owes you). BudgetApp is only useful if you have friends to split expenses with.",
    },
    {
      id: 4,
      pitanje: "How do I use BudgetApp?",
      odgovor:
        "General BudgetApp is an app for splitting expenses with your friends. It lets you and your friends add various bills and keep track of who owes who, and then it helps you to settle up with each other. Here's a quick overview of how it works. First, sign up for an account!",
    },
    {
      id: 5,
      pitanje: "How do I use BudgetApp?",
      odgovor:
        "General BudgetApp is an app for splitting expenses with your friends. It lets you and your friends add various bills and keep track of who owes who, and then it helps you to settle up with each other. Here's a quick overview of how it works. First, sign up for an account!",
    },
  ];

  return (
    <div>
      <br />
      <h1>CONTACT SUPPORT </h1>
      <br />
      <br />
      <div className="q">
        <Row>
          <Col>
            <h3> Questions</h3>
            <Accordion defaultActiveKey="0">
              {pitanja.map(function (item, index) {
                return (
                  <Accordion.Item eventKey={index}>
                    <Accordion.Header>{item.pitanje}</Accordion.Header>
                    <Accordion.Body>{item.odgovor}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
            {/* <div className="envelope"> */}
          </Col>

          <Col>
            <GoogleMaps />
          </Col>
        </Row>
        <Row>
          <Col>
            <br></br>
            <BsEnvelopeAt style={{ width: 50, height: 50 }} />

            <br></br>
            <h4> Email: support@budgetApp.com</h4>
          </Col>
          <Col></Col>

          {/* </div> */}
        </Row>
      </div>
    </div>
  );
}

export default ContactSupport;
