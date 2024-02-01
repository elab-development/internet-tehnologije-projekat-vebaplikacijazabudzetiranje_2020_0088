import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
import { Row } from "react-bootstrap";
const Rate = () => {
  const [rate, setRate] = useState(0);
  return (
    <div>
      <Row>
        <h2>Rate us</h2>
      </Row>
      <Row>
        <Container>
          {[...Array(5)].map((item, index) => {
            const givenRating = index + 1;
            return (
              <label>
                <Radio
                  type="radio"
                  value={givenRating}
                  onClick={() => {
                    setRate(givenRating);
                  }}
                />
                <Rating>
                  <FaStar
                    color={
                      givenRating < rate || givenRating === rate
                        ? "000"
                        : "rgb(192,192,192)"
                    }
                  />
                </Rating>
              </label>
            );
          })}
        </Container>
      </Row>
    </div>
  );
};

export default Rate;
