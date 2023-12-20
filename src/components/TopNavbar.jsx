import React from "react";

export default function TopNavbar({ data }) {
  const takvim = data;

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
