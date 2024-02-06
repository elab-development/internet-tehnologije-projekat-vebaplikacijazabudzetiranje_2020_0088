import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import axios from "axios";
import CardEvent from "./CardEvent";

const PaginationExample = ({
  eventsByType,
  trenutniZahtevi,
  smanjiStranicu,
  povecajStranicu,
  returnImage,
  trenutnaStranica,
}) => {
  return (
    <>
      <div className="header"></div>
      <Row className="mt-3">
        {eventsByType === null
          ? trenutniZahtevi.map((item) => {
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
            })
          : eventsByType.map((item) => {
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
      <Row className="mt-3">
        <Col>
          <button
            className="btn btn-dark m-3"
            onClick={() => smanjiStranicu()}
            disabled={trenutnaStranica === 1}
          >
            Previous
          </button>
          <button
            className="btn btn-dark m-3"
            onClick={() => povecajStranicu()}
          >
            Next
          </button>
        </Col>
      </Row>
    </>
  );
};

export default PaginationExample;
