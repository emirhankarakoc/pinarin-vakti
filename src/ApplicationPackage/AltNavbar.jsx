import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import NamazService from '../services/NamazService'
import { useParams } from 'react-router-dom';



export default function AltNavbar() {
  const { sehirIsmi } = useParams();

  const [takvim, setTakvim] = useState({});
  const [tarih, setTarih] = useState('');
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        let takvimservice = new NamazService();
        const result = await takvimservice.getAll(sehirIsmi);
        
        const trimmedData = { ...result };
        Object.keys(trimmedData).forEach((key) => {
          if (typeof trimmedData[key] === 'string' && trimmedData[key].length >= 3) {
            trimmedData[key] = trimmedData[key].slice(0, -3);
          }
        });

        setTakvim(trimmedData);
        setTarih(result.tarih);
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
                <td style={{ padding: '5px' }}>GUNES</td>
                <td style={{ padding: '5px' }}>{takvim.gunes}</td>
              </tr>
              <tr style={{ fontWeight: '300', color: 'white' }}>
                <td style={{ padding: '5px' }}>OGLE</td>
                <td style={{ padding: '5px' }}>{takvim.ogle}</td>
              </tr>
              <tr style={{ fontWeight: '300', color: 'white' }}>
                <td style={{ padding: '5px' }}>IKINDI</td>
                <td style={{ padding: '5px' }}>{takvim.ikindi}</td>
              </tr>
              <tr style={{ fontWeight: '300', color: 'white' }}>
                <td style={{ padding: '5px' }}>AKSAM</td>
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