import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Col, Container, ListGroup, Row } from "react-bootstrap";

export default function App() {
  const redirectToWhatsApp = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send?phone=905427333289&text=Selam%C4%B1n%20aleyk%C3%BCm.%20Benim%20ya%C5%9Fad%C4%B1%C4%9F%C4%B1m%20%C5%9Fehri%20de%20ekler%20misiniz%20%3F%20%C5%9Eehir%3A";
    window.location.href = whatsappLink;
  };

  const imageSelect = () => {
    const images = ["/assets/image1.png"]; //burayi arttir. aynen bu sekilde.
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    return randomImage;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${imageSelect()})`,
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
              <ListGroup.Item variant="primary">
                Devam etmek için bir şehir seçiniz
              </ListGroup.Item>
              <ListGroup.Item action href="/ankara">
                Ankara
              </ListGroup.Item>
              <ListGroup.Item action href="/baku">
                Bakü
              </ListGroup.Item>
              <ListGroup.Item action href="/denizli">
                Denizli
              </ListGroup.Item>
              <ListGroup.Item action href="/istanbul">
                İstanbul
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
