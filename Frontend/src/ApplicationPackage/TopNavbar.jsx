import React, { useState, useEffect } from "react";
import NamazService from "../services/NamazService";
import { useParams } from "react-router-dom";

export default function TopNavbar() {
  const { sehirIsmi } = useParams();
  const [takvim, setTakvim] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let takvimservice = new NamazService();
        const result = await takvimservice.getAll(sehirIsmi);

        const trimmedData = { ...result[0] };
        Object.keys(trimmedData).forEach((key) => {
          if (
            typeof trimmedData[key] === "string" &&
            trimmedData[key].length >= 3
          ) {
            trimmedData[key] = trimmedData[key].slice(0, -3);
          }
        });

        console.log(result);
        setTakvim(trimmedData);
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchData();
  }, [sehirIsmi]);

  let formattedDate = "";
  if (takvim.tarih) {
    const parts = takvim.tarih.split("T")[0].split("-");
    formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
    console.log(formattedDate);
  }

  return (
    <div className="container" style={{ color: "white", fontWeight: "900" }}>
      <div className="left">PINARIN VAKTI</div>
      <div className="center">
        {sehirIsmi.toUpperCase()} İÇİN NAFİLE NAMAZ VAKİTLERİ
      </div>
      <div className="right">{formattedDate}</div>
    </div>
  );
}
