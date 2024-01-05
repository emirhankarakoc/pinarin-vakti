import React, { useState, useEffect } from 'react';
import NamazService from '../services/NamazService';
import { useParams } from 'react-router-dom';
import moment from 'moment';
export default function TopNavbar() {
  const { sehirIsmi } = useParams();
  const [takvim, setTakvim] = useState({});
  const [tarih, setTarih] = useState('');
  const [gunAyYil, setGunAyYil] = useState(["","",""]); // gunAyYil state'i ekledik

  useEffect(() => {
    const fetchData = async () => {
      try {
        let takvimservice = new NamazService();
        const result = await takvimservice.getAll(sehirIsmi);
        
        const trimmedData = { ...result };
        const gunAyYilArr = (result.tarih).split("-");
        console.log(gunAyYilArr[0]);
        setTakvim(trimmedData);
        setTarih(result.tarih);
        setGunAyYil(gunAyYilArr);
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    fetchData();
  }, [sehirIsmi]); 

  return (
    <div className="container" style={{ color: 'white', fontWeight: '900' }}>
      <div className="left">PINARIN VAKTI</div>
      <div className="center">{sehirIsmi.toUpperCase()} İÇİN NAFİLE NAMAZ VAKİTLERİ</div>
      <div className="right">{gunAyYil[2] + "/" + gunAyYil[1] + "/" + gunAyYil[0]}</div>
    </div>
  );
}
