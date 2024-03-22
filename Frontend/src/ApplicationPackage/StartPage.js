import React from "react";
import background from "./assets/image1.png";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

export default function StartPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        fontFamily: "Inter, Arial, sans-serif",
        fontWeight: "600",
      }}
    >
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Row>
          <Col>
            <ListGroup style={{ width: "200px" }} className="my-5">
              <ListGroup.Item action href="/baku">
                Baku
              </ListGroup.Item>
              <ListGroup.Item action href="/istanbul">
                Istanbul
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
