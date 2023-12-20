import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import NamazService from "../utils/NamazService";
import { useParams } from "react-router-dom";

export default function LeftTable({ data }) {
  const takvim = data;

  return (
    <div
      className="container"
      style={{
        color: "white",
        fontWeight: "900",
        margin: "50px",
        fontSize: "30px",
      }}
    >
      <div className="left"></div>
      <div className="center">
        <Container
          fluid
          style={{
            backgroundColor: "black",
            opacity: 0.8,
            borderRadius: "10px",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center",
            }}
          >
            <tbody>
              <tr style={{ fontWeight: "900", color: "orange" }}>
                <td style={{ padding: "20px" }}>VAKİT</td>
                <td style={{ padding: "20px" }}>GİRİŞ</td>
                <td style={{ padding: "20px" }}>ÇIKIŞ</td>
              </tr>
              <tr style={{ fontWeight: "800", color: "white" }}>
                <td style={{ padding: "20px" }}>İŞRAK</td>
                <td style={{ padding: "20px" }}>{takvim.israk_giris}</td>
                <td style={{ padding: "20px" }}>{takvim.israk_cikis}</td>
              </tr>
              <tr style={{ fontWeight: "800", color: "white" }}>
                <td style={{ padding: "20px" }}>DUHA</td>
                <td style={{ padding: "20px" }}>{takvim.duha_giris}</td>
                <td style={{ padding: "20px" }}>{takvim.duha_cikis}</td>
              </tr>
              <tr style={{ fontWeight: "800", color: "white" }}>
                <td style={{ padding: "20px" }}>EVVABİN</td>
                <td style={{ padding: "20px" }}>{takvim.evvabin_giris}</td>
                <td style={{ padding: "20px" }}>{takvim.evvabin_cikis}</td>
              </tr>
              <tr style={{ fontWeight: "800", color: "white" }}>
                <td style={{ padding: "20px" }}>TEHECCÜD</td>
                <td style={{ padding: "20px" }}>{takvim.teheccud_giris}</td>
                <td style={{ padding: "20px" }}>{takvim.teheccud_cikis}</td>
              </tr>
            </tbody>
          </table>
        </Container>
      </div>
    </div>
  );
}
