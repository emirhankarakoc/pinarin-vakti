import React, { useEffect, useState } from "react";
import { AltNavbar, LeftTable, TopNavbar } from "../components";
import { useParams } from "react-router-dom";
import { useHTTP } from "../hooks/useHTTP";

export default function Uygulama() {
  const [takvim, setTakvim] = useState([]);
  const { sehirIsmi } = useParams();

  const { data: sonuc, isLoading: emirhan } = useHTTP(`/getToday/${sehirIsmi}`);
  useEffect(() => {
    const fetchData = async () => {
      if (!sonuc) return;
      try {
        const trimmedData = { ...sonuc[0] };
        Object.keys(trimmedData).forEach((key) => {
          if (
            typeof trimmedData[key] === "string" &&
            trimmedData[key].length >= 3
          ) {
            trimmedData[key] = trimmedData[key].slice(0, -3);
          }
        });
        // console.log(sonuc);
        setTakvim(trimmedData);
      } catch (error) {
        // console.error("Hata:", error);
      }
    };

    fetchData();
  }, [sehirIsmi, sonuc]); // useEffect'in bağımlılığını güncelledik

  if (emirhan) return <></>;
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
        padding: "10px",
      }}
    >
      <TopNavbar takvim={takvim} />
      <AltNavbar takvim={takvim} />
      <LeftTable takvim={takvim} />
    </div>
  );
}
