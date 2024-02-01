import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

function CardEvent({ type, name, email, amount, date, image }) {
  return (
    <div className="font">
      <Card style={{ width: 300, height: 350 }}>
        <Row>
          <Col>
            <Card.Img
              style={{ alignContent: "flex-start" }}
              variant="top"
              src={image}
            />
          </Col>
          <Col>
            <Card.Title>
              <h3 style={{ alignContent: "center" }}>
                <b> {type}</b>
              </h3>
            </Card.Title>
          </Col>
        </Row>

        <Card.Body>
          <Card.Text>
            <b>
              <h4>Name: {name}</h4>
              <h4>Participant: {email}</h4>
              <h4>Amount: {amount}</h4>
              <h4>Date: {date}</h4>{" "}
            </b>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardEvent;
