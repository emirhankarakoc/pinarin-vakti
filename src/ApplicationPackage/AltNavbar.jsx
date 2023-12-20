import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import NamazService from '../services/NamazService'
import { useParams } from 'react-router-dom';


export default function AltNavbar() {
  const { sehirIsmi } = useParams();

  const [takvim, setTakvim] = useState({}); // varsayılan olarak boş bir obje ile başlat
  const [tarih, setTarih] = useState("");

  useEffect(() => {
    let takvimservice = new NamazService();
    takvimservice
      .getAll(sehirIsmi)
      .then((result) => {
               // Saat formatındaki öğelerin son 3 karakterini kaldır
               const trimmedData = { ...result.data };
               Object.keys(trimmedData).forEach((key) => {
                 if (typeof trimmedData[key] === 'string' && trimmedData[key].length >= 3) {
                   trimmedData[key] = trimmedData[key].slice(0, -3);
                 }
               });
               setTakvim(trimmedData);
               setTarih(result.data.tarih);
       
      });
  }, []);
  return (
    
    <Container fluid style={{ borderRadius: '30px' , backgroundColor: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize:'15px' }}>
        <tbody>
          <tr style={{fontWeight:'900', color:'black'}}>
            <td style={{ padding: '10px' }}>İMSAK</td>
            <td style={{ padding: '10px' }}>GÜNEŞ</td>
            <td style={{ padding: '10px' }}>ÖĞLE</td>
            <td style={{ padding: '10px' }}>İKİNDİ</td>
            <td style={{ padding: '10px' }}>AKŞAM</td>
            <td style={{ padding: '10px' }}>YATSI</td>
          </tr>
          <tr style={{fontWeight:'800',color:'white'}}>
            <td style={{ padding: '10px' }}>{takvim.imsak}</td>
            <td style={{ padding: '10px' }}>{takvim.gunes}</td>
            <td style={{ padding: '10px' }}>{takvim.ogle}</td>
            <td style={{ padding: '10px' }}>{takvim.ikindi}</td>
            <td style={{ padding: '10px' }}>{takvim.aksam}</td>
            <td style={{ padding: '10px' }}>{takvim.yatsi}</td>
            
          </tr>
        </tbody>
      </table>
      </Container>
    
  )
}
