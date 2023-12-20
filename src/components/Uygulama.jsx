import React from "react";
import TopNavbar from "./TopNavbar";
import AltNavbar from "./AltNavbar";
import LeftTable from "./LeftTable";
import background from "../assets/image1.png";
import { useEffect } from "react";
import NamazService from "../utils/NamazService";
import { useState } from "react";

export default function Uygulama() {
  const [data, setData] = useState(null); // varsayılan olarak boş bir obje ile başlat

  const sehirIsmi = location.pathname.split("/").pop();

  let takvimservice = new NamazService();

  const fetchData = async () => {
    try {
      const res = await takvimservice.getAll(sehirIsmi);
      setData(res.data);
    } catch (error) {
      return alert("Veriler yüklenirken bir hata oluştu!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data)
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh",
            fontFamily: "Inter, Arial, sans-serif",
            fontWeight: "600",
          }}
        ></div>
      </>
    );

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
      <TopNavbar data={data} />
      <AltNavbar data={data} />
      <LeftTable data={data} />
    </div>
  );
}
