import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";

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
            <img
              style={{ borderRadius: "50px" }}
              src="https://images.thewest.com.au/publication/B88728831Z/1517355857874_G591EHELD.2-1.jpg?imwidth=810&impolicy=wan_v3"
            />
          </Col>
          <Col>
            <div className={"titleContainer"}>
              <div className="helloFont">
                Less stress when sharing expenses with anyone!
              </div>
            </div>
            <div className={"buttonContainer"}>
              <MyButton onClick={onButtonClick} value={"Log in"}></MyButton>
              <MyButton onClick={onButtonSignUp} value={"Sign up"}></MyButton>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Start;
