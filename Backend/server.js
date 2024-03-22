const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: ["https://emirhan-namaz-front.kgzkbi.easypanel.host/"],
  })
);
const db = mysql.createConnection({
  host: "kgzkbi.easypanel.host",
  user: "mysql",
  password: "a24a3216d75682481eb8",
  database: "emirhan",
  port: 3306,
  // Bu satırı ekleyerek yeni kimlik doğrulama protokollerini etkinleştirebilirsiniz.
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from("a24a3216d75682481eb8"), // Şifrenizi buraya ekleyin.
  },
});

db.connect(function (err) {
  if (err) {
    console.error("Hata:", err);
  } else {
    console.log("Veritabanına başarıyla bağlandı.");
  }
});
app.get(`/getToday/:veritabaniIsmi`, (req, res) => {
  const veritabaniIsmi = req.params.veritabaniIsmi;
  const sql =
    "SELECT *,TIMESTAMPADD(MINUTE, -45, gunes) AS sabahnamazi,TIMESTAMPADD(MINUTE, 45, gunes) AS israkgiris,TIMESTAMPADD(HOUR, 1, gunes) AS israkcikis,aksam AS evvabingiris,TIMESTAMPADD(MINUTE, -45, yatsi) AS evvabincikis,TIMESTAMPADD(HOUR, 1, gunes) AS DUHA_BASLANGIC, TIMESTAMPADD(HOUR, -1, ogle) AS DUHA_BITIS,TIME_FORMAT(ADDTIME((SELECT imsak FROM " +
    veritabaniIsmi +
    " WHERE tarih = DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY)),SEC_TO_TIME(-(ROUND(TIME_TO_SEC(TIMEDIFF('23:59:59', yatsi)) / 60) + ROUND(TIME_TO_SEC(TIMEDIFF((SELECT imsak FROM " +
    veritabaniIsmi +
    " WHERE tarih = DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY)), '00:00:00')) / 60))/3 * 60)),'%H:%i:%s') AS teheccud_giris,(SELECT imsak FROM " +
    veritabaniIsmi +
    " WHERE tarih = DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY)) AS teheccud_cikis FROM " +
    veritabaniIsmi +
    " WHERE tarih = CURDATE()";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    return res.json(data);
  });
});
app.listen(8081, () => {
  console.log("listening");
});

app.get("/", (req, res) => {
  return res.send(
    "<h2>selam, hersey yolunda gidiyor. istekleri atabilirsin. cevaplamak icin sabirsizlaniyorum.</h2>"
  );
});
