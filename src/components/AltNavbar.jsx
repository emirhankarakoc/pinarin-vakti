import React from "react";
import { Container } from "semantic-ui-react";

export default function AltNavbar({ data }) {
  const takvim = data;

  return (
    <Container
      fluid
      style={{
        borderRadius: "30px",
        backgroundColor: "orange",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        <tbody>
          <tr style={{ fontWeight: "900", color: "black" }}>
            <td style={{ padding: "10px" }}>İMSAK</td>
            <td style={{ padding: "10px" }}>GÜNEŞ</td>
            <td style={{ padding: "10px" }}>ÖĞLE</td>
            <td style={{ padding: "10px" }}>İKİNDİ</td>
            <td style={{ padding: "10px" }}>AKŞAM</td>
            <td style={{ padding: "10px" }}>YATSI</td>
          </tr>
          <tr style={{ fontWeight: "800", color: "white" }}>
            <td style={{ padding: "10px" }}>{takvim.imsak}</td>
            <td style={{ padding: "10px" }}>{takvim.gunes}</td>
            <td style={{ padding: "10px" }}>{takvim.ogle}</td>
            <td style={{ padding: "10px" }}>{takvim.ikindi}</td>
            <td style={{ padding: "10px" }}>{takvim.aksam}</td>
            <td style={{ padding: "10px" }}>{takvim.yatsi}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
