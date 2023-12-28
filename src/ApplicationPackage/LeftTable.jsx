import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NamazService from '../services/NamazService';
import { useParams } from 'react-router-dom';

export default function LeftTable() {
  const { sehirIsmi } = useParams();

  const [takvim, setTakvim] = useState({});
  const [tarih, setTarih] = useState('');

  useEffect(() => {
    let takvimservice = new NamazService();
    takvimservice.getAll(sehirIsmi).then((result) => {
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
    <div className="container" style={{ color: 'white', fontWeight: '700', margin: '50px',fontSize:'30px' }}>
      <div className="center">
        <Container fluid style={{ backgroundColor: 'black', opacity: 0.8, borderRadius: '10px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
            <tbody>
              <tr style={{ fontWeight: '700', color: 'orange' }}>
                <td style={{ padding: '5px' }}>VAKİT</td>
                <td style={{ padding: '5px' }}>GİRİŞ</td>
                <td style={{ padding: '5px' }}>ÇIKIŞ</td>
              </tr>
              <tr style={{ fontWeight: '600', color: 'white' }}>
                <td style={{ padding: '5px' }}>İŞRAK</td>
                <td style={{ padding: '5px' }}>{takvim.israk_giris}</td>
                <td style={{ padding: '5px' }}>{takvim.israk_cikis}</td>
              </tr>
              <tr style={{ fontWeight: '600', color: 'white' }}>
                <td style={{ padding: '5px' }}>DUHA</td>
                <td style={{ padding: '5px' }}>{takvim.duha_giris}</td>
                <td style={{ padding: '5px' }}>{takvim.duha_cikis}</td>
              </tr>
              <tr style={{ fontWeight: '600', color: 'white' }}>
                <td style={{ padding: '5px' }}>EVVABİN</td>
                <td style={{ padding: '5px' }}>{takvim.evvabin_giris}</td>
                <td style={{ padding: '5px' }}>{takvim.evvabin_cikis}</td>
              </tr>
              <tr style={{ fontWeight: '600', color: 'white' }}>
                <td style={{ padding: '5px' }}>TEHECCÜD</td>
                <td style={{ padding: '5px' }}>{takvim.teheccud_giris}</td>
                <td style={{ padding: '5px' }}>{takvim.teheccud_cikis}</td>
              </tr>
            </tbody>
          </table>
        </Container>
      </div>
    </div>
  );
}
