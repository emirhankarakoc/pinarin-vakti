import React from "react";
import { Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useHTTP } from "../hooks/useHTTP";
import { API } from "../lib/http";

export function LeftTable(props) {
  const takvim = props.takvim;

  const backendDeployu = async () => {
    try {
      const response = await axios.get(API + "/backend-redeploy");
      console.log("basarili.");
    } catch (error) {
      //31
      console.log("basarisiz");
    }
  };

  return (
    <div
      className="container"
      style={{ color: "white", fontWeight: "400", fontSize: "20px" }}
    >
      <div>
        <div
          className="d-flex justify-content-center mt-1 mb-1"
          style={{
            padding: "5px",
            backgroundColor: "black",
            opacity: 0.8,
            borderRadius: "25px",
          }}
        >
          <Link to={"/"} className=" text-decoration-none ">
            <Button className="bg-dark text-white ">Geri Dön</Button>
          </Link>
        </div>
        <div
          className="d-flex justify-content-center mt-1 mb-1"
          style={{
            padding: "5px",
            backgroundColor: "black",
            opacity: 0.8,
            borderRadius: "25px",
          }}
        >
          <Button className="bg-dark text-white" onClick={backendDeployu}>
            Çalışmıyorsa buraya basın ve kapatıp açın.
          </Button>
        </div>

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
              <tr style={{ fontWeight: "400", color: "orange" }}>
                <td style={{ padding: "5px" }}>VAKİT</td>
                <td style={{ padding: "5px" }}>GİRİŞ</td>
                <td style={{ padding: "5px" }}>ÇIKIŞ</td>
              </tr>
              <tr style={{ fontWeight: "300", color: "white" }}>
                <td style={{ padding: "5px" }}>İŞRAK</td>
                <td style={{ padding: "5px" }}>{takvim.israkgiris}</td>
                <td style={{ padding: "5px" }}>{takvim.israkcikis}</td>
              </tr>
              <tr style={{ fontWeight: "300", color: "white" }}>
                <td style={{ padding: "5px" }}>DUHA</td>
                <td style={{ padding: "5px" }}>{takvim.DUHA_BASLANGIC}</td>
                <td style={{ padding: "5px" }}>{takvim.DUHA_BITIS}</td>
              </tr>
              <tr style={{ fontWeight: "300", color: "white" }}>
                <td style={{ padding: "5px" }}>EVVABİN</td>
                <td style={{ padding: "5px" }}>{takvim.evvabingiris}</td>
                <td style={{ padding: "5px" }}>{takvim.evvabincikis}</td>
              </tr>
              <tr style={{ fontWeight: "300", color: "white" }}>
                <td style={{ padding: "5px" }}>TEHECCÜD</td>
                <td style={{ padding: "5px" }}>{takvim.teheccud_giris}</td>
                <td style={{ padding: "5px" }}>{takvim.teheccud_cikis}</td>
              </tr>
            </tbody>
          </table>
        </Container>
      </div>
    </div>
  );
}
