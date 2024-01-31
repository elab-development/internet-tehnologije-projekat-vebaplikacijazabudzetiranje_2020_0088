import React from "react";
import "../App.css";
import { BsEnvelopeAt } from "react-icons/bs";
import { Row, Col, Accordion } from "react-bootstrap";
import GoogleMaps from "./GoogleMaps";
import Rate from "./Rate";
function ContactSupport() {
  const pitanja = [
    {
      id: 1,
      pitanje: "How do I use BudgetApp?",
      odgovor:
        "BudgetApp is an app for splitting expenses with your friends. It lets you and your friends add various bills and keep track of who owes who, and then it helps you to settle up with each other. Here's a quick overview of how it works. First, sign up for an account!",
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
        "Why do I have to add friends in order to use BudgetApp? Can I add a friend without an email address or phone number?",
      odgovor:
        "BudgetApp was built specifically to keep track of IOUs with other people. All bills on BudgetApp are split – you can't add an expense unless you're sharing it with someone else (someone who you owe, or who owes you). BudgetApp is only useful if you have friends to split expenses with.",
    },
    {
      id: 4,
      pitanje: "What if BudgetApp doesn't include my currency?",
      odgovor:
        "We'd be happy to add it for you! Just email us at support@budgetApp.com and let us know which currency you'd like to use – we're usually able to add it to our website and apps within a day or two.",
    },
    {
      id: 5,
      pitanje: "Can I set a default currency?",
      odgovor:
        "Yes! In the account info section of your user settings page, you'll see an option to set a default currency. To get there on the website, log in to budgetApp.com, click on your name on the top right of the screen, and then click  My account This currency will be selected by default when adding new bills.",
    },
    {
      id: 6,
      pitanje: "Is there a BudgetApp for BlackBerry?",
      odgovor:
        "Unfortunately, we don't have any plans for a BlackBerry app – we're a very small team, and we've already got our hands full with web + iPhone + Android.",
    },
  ];

  return (
    <div className="font">
      <br />
      <h1
        className="font"
        style={{
          fontSize: 40,
          color: "#6bae8f",
        }}
      >
        CONTACT SUPPORT{" "}
      </h1>
      <br />
      <br />
      <div className="q">
        <Row>
          <Col>
            <h3
              className="font"
              style={{
                fontSize: 30,
                color: "#000000",
              }}
            >
              Frequently asked questions
            </h3>
            <Accordion defaultActiveKey="0" className="font">
              {pitanja.map(function (item, index) {
                return (
                  <Accordion.Item
                    eventKey={index}
                    style={{ backgroundColor: "#e7f6ef" }}
                  >
                    <Accordion.Header>{item.pitanje}</Accordion.Header>
                    <Accordion.Body>{item.odgovor}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Col>

          <Col>
            <GoogleMaps />
          </Col>
        </Row>
        <br />
        <Row>
          <h3>Ask question</h3>
          <textarea name="postContent" defaultValue="" rows={4} cols={40} />
          <input className="inputButton" type="button" value={"Send"}></input>
        </Row>
        <Row>
          <Col>
            <br></br>
            <BsEnvelopeAt style={{ width: 70, height: 70 }} />
            <h4> Email: support@budgetApp.com</h4>
          </Col>
          <Col>
            <Rate></Rate>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContactSupport;
