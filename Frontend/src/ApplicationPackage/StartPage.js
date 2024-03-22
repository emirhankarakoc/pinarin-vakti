import React from "react";
import background from "./assets/image1.png";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function StartPage() {
  const redirectToWhatsApp = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send?phone=905427333289&text=Selam%C4%B1n%20aleyk%C3%BCm.%20Benim%20ya%C5%9Fad%C4%B1%C4%9F%C4%B1m%20%C5%9Fehri%20de%20ekler%20misiniz%20%3F%20%C5%9Eehir%3A";
    window.location.href = whatsappLink;
  };
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
            <ListGroup>
              <ListGroup.Item
                action
                variant="success"
                onClick={redirectToWhatsApp}
              >
                Yeni şehir başvurusu için tıkla
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
