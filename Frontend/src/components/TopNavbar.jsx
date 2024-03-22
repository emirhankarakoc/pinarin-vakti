import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export function TopNavbar(props) {
  const takvim = props.takvim;
  const { sehirIsmi } = useParams();

  let formattedDate = "";
  if (takvim.tarih) {
    const parts = takvim.tarih.split("T")[0].split("-");
    formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
    console.log(formattedDate);
  }

  return (
    <div
      style={{ color: "white", fontWeight: "900" }}
      className="justify-content-center d-flex"
    >
      <Container
        style={{
          backgroundColor: "black",
          opacity: 0.8,
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        <Row>
          <Col>
            <div className="d-flex justify-content-between mt-1">
              <div className="left">PINARIN VAKTI</div>
              <div className="center">
                {sehirIsmi.toUpperCase()} İÇİN NAFİLE NAMAZ VAKİTLERİ
              </div>
              <div className="right">{formattedDate}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
