import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/login");
  };
  const onButtonSignUp = () => {
    navigate("/register");
    console.log("Sign up");
  };

  return (
    <div className="mainContainer">
      <div className="font">
        <Row>
          <Col>
            <img src="https://images.thewest.com.au/publication/B88728831Z/1517355857874_G591EHELD.2-1.jpg?imwidth=810&impolicy=wan_v3" />
          </Col>
          <Col>
            <div className={"titleContainer"}>
              <div>Welcome!</div>
            </div>
            <div className={"buttonContainer"}>
              <input
                className={"inputButton"}
                type="button"
                onClick={onButtonSignUp}
                value={"Sign up"}
              />
              <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Start;
