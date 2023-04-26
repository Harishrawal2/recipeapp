import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";

const Recipe = ({ title, calories, image, ingredients }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row md={3} className="g-4 m-1">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "900",
                    fontFamily: "sans-serif",
                  }}
                >
                  {title}
                </Card.Title>
                <Card.Text className="bg-warning rounded">
                  Calories : {calories}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Ingredient
                </Button>

                {/* model */}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title> Ingredient Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ListGroup as="ol">
                      {ingredients.map((ingredient) => (
                        <ListGroup.Item as="li">
                          {ingredient.text}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Recipe;
