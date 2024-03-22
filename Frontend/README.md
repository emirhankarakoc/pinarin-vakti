 # Nafile namaz vakitleri uygulamasi
bu uygulama , annemin istegi uzerine hazirlanmistir. bildiginiz veya bilmediginiz uzere nafile namaz vakitlerini veren bir api yok. biraz kovaladim bulamadim. dedim ki en iyisi kendim yapayim. 
hem veritabani dersi aliyorum bu sene , hemde annem istiyor(cunku boyle bir ihtiyac var).
#
kendim bi veritabani hostladim , bu veritabanina veri ekleyip kendi yazdigim backendden api olusturup kendi yazdigim frontendden istek atiyorum. 3 parca halinde aciklayacagim simdi.
### veri ekleme (veritabanina)
proje soyle calisiyor. ben diyanetin websitesine girip herhangi bir siteden yillik veriyi kopyaliyoruz. daha sonra VERITABANINA-VERI-EKLEYICI-JAVAKODU dosyasini aciyoruz. bismillah metodunun birinci parametresi sehrin ismini , ikinci parametresi de diyanetten kopyaladiginiz uzuuuuuun 1 yillik datayi aliyor. direkt kopyala yapistir yapicaksiniz herhangi bi json yok. zaten VERITABANINA-VERI-EKLEYICI-JAVAKODU'nda ben o stringi işliyorum efendi efendi. o 365 gunluk ciktisini da veritabanina kopyala yapistir yapiyoruz. bu kadar basit-ti (veri ekleme isleri)

### veriyi veritabanindan cekme ve api hazirlama (backend expressjs)
valla cok ugrastik springbootta yapmak icin ama cors cors cors canimiz cikti. Aselsis'te calisirken bunu yapiyordum. oradaki tum backendciler bakti. okuldan 2 tane hocama sordum onlar da bakti. cors hatasini duzeltemedik.
en sonunda gittim expressjs ile bastan yazdim TUUUUUUUM backendi ( 17 satir kod). bu kadar basit evet cunku TUM is aslinda T-SQL SORGUSU'nda. upuzun bi sorgu. matematik islemlerini de veritabani sorgusunda yapiyorum. baktim bir donem veritabani sorgusu yazdim, bu iste de iyiyim. en iyisi bunu veritabaninda yapmak. cunku javada Date kullanmayi bilmiyorum.

### frontend tarafi, react
kolaydi. axios ile get yaptigim jsonu tek tek useEffect ile dagittim componentlere, iclerini doldurdum. projeyi de deployladim.
[Alin size link](https://pv-front-emirhankarakoc.vercel.app/)
proje gec aciliyor farkindayim eger  7 dolar bagislarsaniz 1 aylik backend satin alabilirim.

### ucretsiz deploy edebileceginiz servisler
veritabani - aiven
backend (java yok. docker kullanmaniz lazim geri kalanlari var) - render
frontend - vercel


