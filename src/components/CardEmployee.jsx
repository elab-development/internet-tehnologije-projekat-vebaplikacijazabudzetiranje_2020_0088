import Card from "react-bootstrap/Card";

function CardEmployee({ name, description, image }) {
  return (
    <div className="font">
      <Card style={{ width: 400, height: 550 }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <h3>
              <b>{name}</b>
            </h3>
          </Card.Title>
          <Card.Text>
            <b>{description}</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardEmployee;
