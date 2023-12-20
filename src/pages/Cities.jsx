import React, { useEffect, useState } from "react";

import background from "../assets/image1.png";
import NamazService from "../utils/NamazService";
import { Navbar } from "../components/Navbar";
import { AltNavbar } from "../components/AltNavbar";
import { Table } from "../components/Table";

export const Cities = () => {
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
      <Navbar />
      <AltNavbar data={data} />
      <Table data={data} />
    </div>
  );
};
