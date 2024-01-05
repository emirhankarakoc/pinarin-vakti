import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import NamazService from '../services/NamazService'
import { useParams } from 'react-router-dom';



export default function AltNavbar() {
  const { sehirIsmi } = useParams();

  const [takvim, setTakvim] = useState([]);
  const [tarih, setTarih] = useState('');
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        let takvimservice = new NamazService();
        const result = await takvimservice.getAll(sehirIsmi);
        
        const trimmedData = { ...result[0] };
        Object.keys(trimmedData).forEach((key) => {
          if (typeof trimmedData[key] === 'string' && trimmedData[key].length >= 3) {
            trimmedData[key] = trimmedData[key].slice(0, -3);
          }
        });
      console.log(result)
        setTakvim(trimmedData);
        setTarih(result[0].tarih);
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    fetchData();
  }, [sehirIsmi]); // useEffect'in bağımlılığını güncelledik
  return (<div className="container" style={{ color: 'white', fontWeight: '400',fontSize:'20px' }}>
      <div className="center">
        <Container fluid style={{ backgroundColor: 'black', opacity: 0.8, borderRadius: '10px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
            <tbody>
              <tr style={{ fontWeight: '400', color: 'orange' }}>
                <td style={{ padding: '5px' }}>VAKİT</td>
                <td style={{ padding: '5px' }}>GİRİŞ</td>
              </tr>
              <tr style={{ fontWeight: '300', color: 'white' }}>
                <td style={{ padding: '5px' }}>IMSAK</td>
                <td style={{ padding: '5px' }}>{takvim.imsak}</td>
              </tr>
              
              <tr style={{ fontWeight: '300', color: 'white' }}>
                <td style={{ padding: '5px' }}>SABAH</td>
                <td style={{ padding: '5px' }}>{takvim.sabahnamazi}</td>
              </tr>
              <tr style={{ fontWeight: '300', color: 'white' }}>
                <td style={{ padding: '5px' }}>GÜNEŞ</td>
                <td style={{ padding: '5px' }}>{takvim.gunes}</td>
              </tr>
              <tr style={{ fontWeight: '300', color: 'white' }}>
                <td style={{ padding: '5px' }}>ÖĞLE</td>
                <td style={{ padding: '5px' }}>{takvim.ogle}</td>
              </tr>
              <tr style={{ fontWeight: '300', color: 'white' }}>
                <td style={{ padding: '5px' }}>İKİNDİ</td>
                <td style={{ padding: '5px' }}>{takvim.ikinci}</td>
              </tr>
              <tr style={{ fontWeight: '300', color: 'white' }}>
                <td style={{ padding: '5px' }}>AKŞAM</td>
                <td style={{ padding: '5px' }}>{takvim.aksam}</td>
              </tr>
              <tr style={{ fontWeight: '300', color: 'white' }}>
                <td style={{ padding: '5px' }}>YATSI</td>
                <td style={{ padding: '5px' }}>{takvim.yatsi}</td>
              </tr>
            </tbody>
          </table>
        </Container>
      </div>
    </div>
    
  )
}