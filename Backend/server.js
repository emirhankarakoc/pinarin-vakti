const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express()
app.use(cors({
    origin:["https://pv-front-emirhankarakoc.vercel.app"]
}))
const db = mysql.createConnection("mysql://avnadmin:AVNS_yM_F2k3uPrFi25x7oAa@pinarinvakti-emirhankarakoc.a.aivencloud.com:17369/defaultdb?ssl-mode=REQUIRED")
app.get(`/getToday/:veritabaniIsmi`,(req,res)=>{
    const veritabaniIsmi = req.params.veritabaniIsmi;
    const sql = "SELECT *,TIMESTAMPADD(MINUTE, -45, gunes) AS sabahnamazi,TIMESTAMPADD(MINUTE, 45, gunes) AS israkgiris,TIMESTAMPADD(HOUR, 1, gunes) AS israkcikis,aksam AS evvabingiris,TIMESTAMPADD(MINUTE, -45, yatsi) AS evvabincikis,TIMESTAMPADD(HOUR, 1, gunes) AS DUHA_BASLANGIC, TIMESTAMPADD(HOUR, -1, ogle) AS DUHA_BITIS,TIME_FORMAT(ADDTIME((SELECT imsak FROM "+ veritabaniIsmi +" WHERE tarih = DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY)),SEC_TO_TIME(-(ROUND(TIME_TO_SEC(TIMEDIFF('23:59:59', yatsi)) / 60) + ROUND(TIME_TO_SEC(TIMEDIFF((SELECT imsak FROM "+ veritabaniIsmi +" WHERE tarih = DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY)), '00:00:00')) / 60))/3 * 60)),'%H:%i:%s') AS teheccud_giris,(SELECT imsak FROM "+ veritabaniIsmi +" WHERE tarih = DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY)) AS teheccud_cikis FROM "+ veritabaniIsmi +" WHERE tarih = CURDATE()"
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
       console.log(data)
        return res.json(data);
    }) 
    })
app.listen(8081,()=>{console.log("listening")})
const axios = require("axios");

setInterval(async () => {
  try {
    await axios.get("https://pv-front-emirhankarakoc.vercel.app/istanbul");
    console.log("Pinged");
  } catch (error) {
    console.log(error);
  }
}, 1000 * 60 * 5);