import React, { useState, useEffect } from "react";
import NamazService from "../utils/NamazService";
import { useParams } from "react-router-dom";

export default function TopNavbar() {
  const { sehirIsmi } = useParams();

  const [takvim, setTakvim] = useState({}); // varsayılan olarak boş bir obje ile başlat
  const [tarih, setTarih] = useState("");

  useEffect(() => {
    let takvimservice = new NamazService();
    takvimservice.getAll(sehirIsmi).then((result) => {
      setTakvim(result.data);
      setTarih(result.data.tarih);
    });
  }, []);
  return (
    <div className="container" style={{ color: "white", fontWeight: "900" }}>
      <div className="left">PINARIN VAKTI</div>
      <div className="center">
        {takvim.sehirIsmi} İÇİN NAFİLE NAMAZ VAKİTLERİ
      </div>
      <div className="right">{takvim.tarih}</div>
    </div>
  );
}
