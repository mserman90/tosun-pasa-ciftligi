# 📖 Tosun Paşa Çiftliği: Kapsamlı Kullanım Kılavuzu & Operasyonel Saha El Kitabı
### Yetiştirici, Zooteknist, 3D Çiftlik Simülasyonu ve AgriTwin Çoklu Dijital İkiz Rehberi

---

## 🌾 1. Giriş ve Temel Çalışma Felsefesi

**Tosun Paşa Çiftliği**, geleneksel hayvancılık birikimini en son zootekni, veteriner hekimlik ve siber-fiziksel dijital ikiz teknolojileriyle birleştiren çevrimdışı öncelikli (Offline-First PWA) bir karar destek sistemidir. 

Uygulama iki temel kullanıcı profiline ve iki ileri teknoloji platformuna hitap eder:
1. **🌾 Yetiştirici Modu (Pratik Saha Portalı):** Basit, anlaşılır, büyük dokunmatik butonlarla donatılmış; küpe arama, ilaç arınma süresi (İKAS) takibi, 3 adımda kolay rasyon ve döl takibi sağlayan saha dostu arayüz.
2. **🔬 Zooteknist Modu (Bilimsel Karar Masası):** NRC 2001 / NASEM 2021 standartlarında Doğrusal Programlama (Simplex LP), Pearson Karesi, laktasyon eğrisi analizi, dehidrasyon sıvı tedavisi ve kaba yem agronomisi araçlarını barındıran profesyonel çalışma masası.
3. **🎮 3D Gerçekçi Çiftlik Simülasyonu (WebGL Serious Game):** CIGR ve Wisconsin barınak standartlarında modellenmiş, Doğu➔Batı katlanır V-kanat gübre sıyırıcıları, serbest kamera, biyogüvenlik koridorları ve animasyonlu ekipmanları içeren siber-fiziksel simülasyon oyunu.
4. **🌐 AgriTwin Çoklu Dijital İkiz Ekosistemi (Multi-Twin Platform):** 14 uzmanlaşmış alt ikiz, $8 \times 5$ (40 hücre) RTLS mekânsal ısı haritası, otonom robot filosu (Juno & Discovery), 60 kW biyogaz kojenerasyon, TWIN4MILK açıklanabilir yapay zeka (XAI) ve Türkçe doğal dil AI danışmanı.

---

## 🌾 2. Yetiştirici Portalı Kullanım Kılavuzu (Pratik Saha Rehberi)

### 2.1. Ana Sayfa (Giriş Portalı)
Uygulama açıldığında 4 temel operasyon kartı sizi karşılar:
- **🌾 Yetiştirici Portalı:** Tek dokunuşla pratik çiftlik yönetimine geçiş yapar.
- **🔬 Zooteknist Masası:** Bilimsel rasyon, agronomi ve derin veterinerlik modüllerini açar.
- **🎮 3D Gerçekçi Oyun:** WebGL 3D ahır sahnesini tam ekranda başlatır.
- **🌐 Dijital İkiz (AgriTwin):** 14 modüllü dijital ikiz kokpitine yönlendirir.

### 2.2. Sürü Takibi ve Küpe Defteri
* **Hayvan Arama:** Arama kutusuna küpe numarasının son 4 hanesini veya hayvanın adını (örn: *Sarıkız*, *4455*) yazarak anında bulun.
* **Yeni Hayvan Kaydı:** `[➕ Yeni Hayvan Ekle]` butonuna basarak küpe no, tür (Sığır, Buzağı, Koyun, Kuzu), isim, ırk ve doğum tarihini girin.
* **Hayvan Durum Kartı:** Her hayvanın kartında güncel gebelik durumu, aktif ilaç kilidi ve tahmini süt verimi renkli etiketlerle listelenir.

### 2.3. Sağlık & Canlı İKAS İlaç Kilit Sistemi
* **Kritik Kural:** Bir hayvana antibiyotik veya ilaç uygulandığında, yasal arınma süresi dolana kadar sütü tanka dökülemez, eti tüketime sunulamaz.
* **Yeni Tedavi Kaydı:** `[➕ Tedavi / İlaç Başlat]` butonuna dokunun; küpe no, konulan teşhis, uygulanan ilaç, süt arınma süresi (saat) ve et arınma süresini (gün) kaydedin.
* **Canlı Kırmızı Güvenlik Rozeti:** Tedavi süresi devam eden hayvanlar kırmızı renkle vurgulanır ve ana sayfada *"DİKKAT: 1 İneğin Sütünde İlaç Kalıntısı Var! Tankı Kilitleyin!"* uyarısı çıkar. Arınma süresi bittiğinde kilit kendiliğinden yeşile döner.

### 2.4. 3 Adımda Pratik Yem Hazırlama
1. **1. Adım:** Besleyeceğiniz hayvan grubunu seçin (Örn: *Yüksek Verimli Süt İneği - 25-30 Litre* veya *Besi Danası*).
2. **2. Adım:** Ahırınızdaki hayvan sayısını girin (Örn: *40 Baş*).
3. **3. Adım:** Ambarınızda bulunan yemleri işaretleyin (Mısır Silajı, Yonca, Arpa, Soya, Kepek vb.).
4. **Sonuç:** Sistem anında hayvan başına ve toplam sürü için çuval/araba bazında döküm tablosunu çıkarır.

### 2.5. Döl Takibi & Doğum Geri Sayımı
* Tohumlama tarihi girilen her gebe inek için 283 günlük gebelik sayacı başlar.
* **Kritik Gün Uyarıları:**
  * **21. Gün:** Kızgınlık tekrarı kontrolü (Boğaya gelme belirtisi var mı?).
  * **45. Gün:** Ultrason / Rektal gebelik muayenesi.
  * **223. Gün:** Kuruya alma zamanı (Sağımı kesin, meme içi kuru dönem tüpü uygulayın).
  * **253. Gün:** Doğum öncesi buzağı ishal aşısı.
  * **283. Gün:** Tahmini doğum tarihi.

---

## 🔬 3. Zooteknist Profesyonel Çalışma Masası Kılavuzu

### 3.1. Klinik Triyaj, Dehidrasyon & Sıvı Tedavisi
* **Semptom Ağırlıklı Triyaj Motoru:** Sığır, buzağı ve küçükbaşlarda solunum, sindirim ve lokomosyon semptomlarını seçerek en olası 3 klinik tanıyı yüzdesel güven skoruyla listeleyin.
* **Dehidrasyon & Sıvı İhtiyacı Formülasyonu:**
  $$\text{Sıvı Açığı (L)} = \text{Canlı Ağırlık (kg)} \times \left(\frac{\text{Dehidrasyon}\%}{100}\right)$$
  $$\text{24 Saatlik İdame (L)} = \text{Canlı Ağırlık (kg)} \times 0.06$$
  $$\text{Toplam Sıvı} = \text{Açık} + \text{İdame} + \text{Devam Eden Kayıplar}$$
* **Optik Brix Kolostrum Skalası:** Sağılan ilk ağız sütünün kalitesini optik Brix refraktometresi ile değerlendirin:
  * **Brix $\ge \%22$:** Üstün Kalite (IgG $> 50\,\text{g/L}$) ➔ Yeni doğan buzağıya ilk 2 saatte $4\,\text{L}$ içirin.
  * **Brix $<\%18$:** Yetersiz / Kalitesiz Kolostrum ➔ Kolostrum bankasından dondurulmuş kaliteli kolostrum kullanın.

### 3.2. NRC/CNCPS Bilimsel Rasyon Hazırlama & Simplex LP
* **Doğrusal Programlama (LP) Optimizasyonu:** Belirlenen kuru madde (KM), ham protein (HP), metabolize olabilir enerji (ME), NDF, ADF, kalsiyum ve fosfor kısıtlarını sağlayan en düşük maliyetli (Least-Cost) rasyonu milisaniyeler içinde hesaplar.
* **Pearson Karesi Robotu:** İki hammadde arasında (Örn: %8.5 HP Dane Mısır ile %44 HP Soya Küspesi) hedeflenen protein derişimini yakalamak için gereken karışım yüzdelerini hesaplar.
* **TMR Mikser Kantarı:** Reçeteyi sürü büyüklüğü ile çarpar; traktör operatörü için hammadde bazında dara sıfırlama ve kümülatif tartım kılavuzu sunar.

### 3.3. Biyolojik Üreme Çarkları
* **283 Günlük Büyükbaş İnek Çarkı:** Gebe hayvanların periparturiyent evrelerini grafiksel olarak modeller.
* **150 Günlük Küçükbaş Koç Katımı Takvimi:** Flaşlama (flushing) beslemesi, ultrason ikizlik taraması, gebelik toksemisi (ikiz kuzu hastalığı) önleme rasyonu ve enterotoksemi aşı takvimini yönetir.
* **AM-PM Tohumlama Kuralı:** Sabah fark edilen kızgınlıkta aynı gün akşam; akşam fark edilen kızgınlıkta ertesi sabah tohumlama yapılmalıdır.

### 3.4. Kaba Yem Agronomisi & Silo Mühendisliği
* **15+ Yem Bitkisi Kartı:** Yonca, silajlık mısır, korunga, İtalyan çimi (ryegrass), fiğ ve yem bezelyesi için tohum miktarı, ekim derinliği, taban/üst gübreleme ve biçim fenolojisi bilgileri.
* **Mikrodalga Silaj Nem Testi:** $100\,\text{g}$ kıyılmış numuneyi mikrodalgada kurutarak fırın kuru ağırlığından anlık nem yüzdesini bulun (İdeal paketleme nemi: %65–%68).
* **Hendek/Kelepçe Silo Tonaj Hesabı:** Silo hacmi ($m^3$) ile sıkıştırma yoğunluğunu ($700\,\text{kg/m}^3$) çarparak toplam tonajı ve örtü naylonu ihtiyacını hesaplar.

---

## 🎮 4. 3D Gerçekçi Çiftlik Simülasyonu & Biyogüvenlik Kılavuzu

### 4.1. Serbest Kamera & Gezinme Kontrolleri
* 🖱️ **Fare Sol Tık + Sürükleme:** Çiftlik etrafında 360° serbest yörüngede (Orbit) dönerek ahırı istediğiniz açıdan görmenizi sağlar.
* 🖱️ **Fare Sağ Tık VEYA W - A - S - D Tuşları:** Kamerayı ahır koridorları boyunca ileri-geri ve sağa-sola yatay olarak kaydırır (Pan).
* 🔍 **Fare Tekerleği:** Yakınlaşma ve uzaklaşma (Zoom) yaparak bireysel inekleri, yemlik kilitlerini veya buzağı kulübelerini inceler.
* ⌨️ **Q ve E Tuşları:** Kameranın uçuş yüksekliğini yukarı kaldırır (Q) veya zemin seviyesine alçaltır (E).
* ⌨️ **R Tuşu (Sıfırla):** Kamerayı anında varsayılan ideal izometrik çiftlik açısına geri döndürür.
* 🐮 **İneğe Tıklama:** Sahnede gezen herhangi bir ineğe tıkladığınızda o ineğin küpe kartı, anlık davranışı (yeme, geviş getirme, dinlenme), laktasyon günü, süt verimi ve meme iletkenliği açılır.

### 4.2. Lojistik & Biyogüvenlik Yönetim Paneli (Kısayol: L)
Alt araç çubuğundaki kamyon simgesine tıklayarak veya klavyeden **"L"** tuşuna basarak 4 ana hareket modülünü yönetebilirsiniz:
1. 🚶 **İnsan Hareketleri:** Personel giriş kaydı, çizme dezenfeksiyon havuzu ve veteriner vizitesi.
2. 🐄 **Hayvan Hareketleri:** Sağım yönlendirmesi, Dr. Nigel Cook ayak banyosundan geçiş ve revir sevkleri.
3. 🚜 **Alet & Ekipman Lojistiği:** TMR mikser vagonu, buzağı süt taksisi ve gübre sıyırıcıları.
4. 🛡️ **Biyogüvenlik Haritası (3D Rotalar):**
   * 🟢 **Yeşil Hat (Temiz Alan):** Personel girişi, buzağı kulübeleri ve sağım odası.
   * 🔵 **Mavi Hat (Sağım Döngüsü):** Sağmal ineklerin sağımhaneye gidişi ve dönüşteki ayak banyosu koridoru.
   * 🔴 **Kırmızı Hat (Kirli/Karantina):** Revir, karantina bölmesi, gübre kanalı ve atık lagünü.
   * 💡 **Temizden Kirliye Kuralı:** Hastalık yayılımını önlemek için personel ve ekipman daima: *Buzağı / Sağım Odası ➔ Genç Hayvanlar ➔ Sağmal İnekler ➔ Hasta Reviri ➔ Gübre/Atık Sahası* yönünde hareket etmelidir.

### 4.3. Çift Koridor Otomatik Gübre Sıyırıcıları
* **Doğru Tahliye Yönü (Doğu ➔ Batı):** Sıyırıcılar temiz Doğu girişinden ($x = +6$) başlar, koridordaki gübreyi önüne katarak Batı ucundaki enine tahliye ızgarasına ($x = -27$) ve lagüne doğru iter.
* **Katlanır V-Kanat Mekanizması:** İleri sıyırma yaparken kanatlar açılarak $3.4\,\text{m}$ koridor genişliğini tam kaplar. Geri dönüşte kanatlar içe katlanarak ($1.2\,\text{m}$) gübreyi geriye çekmez.
* **Hayvan Güvenliği:** Sıyırıcı $3.0\,\text{m/dk}$ düşük hızla hareket eder; ineklerin bacaklarına çarpmadan üzerinden atlamalarına olanak tanır.

### 4.4. Otonom Ahır Robotları & Biyogaz Tesisi
* **Lely Juno-X Yem İtici Robotu:** Yem yolunda her 2 saatte bir tur atarak yem masasına dökülen kaba yemleri yanaştırır; alt sıyırıcı eteği döner.
* **Lely Discovery-Vac Gübre Vakumu:** Izgarasız beton koridorları tarayarak gübreyi vakumlar ve tırnak enfeksiyonunu %28 azaltır.
* **Biyogaz Reaktörü & 60 kW CHP:** Ahırın doğu kanadında ($x=24, y=0, z=18$) konumlandırılmış yeşil membran gaz kubbesi, beton çürütücü tank ve kojenerasyon egzozu.

---

## 🌐 5. AgriTwin Çoklu Dijital İkiz Ekosistemi Kılavuzu

### 5.1. Kokpit Görünüm Seçici (Subtab Bar)
Dijital İkiz ekranında 3 ana çalışma katmanı yer alır:
1. 🏛️ **AgriTwin Çoklu İkiz Süiti (14 Modül Tam Kokpit & RTLS):** Canlı mikroklima haritası, robot filosu, biyogaz kojenerasyon ve AI danışmanı içeren gömülü süit.
2. 🧠 **TWIN4MILK XAI & inSiliCow / RuFaS Karar Destek:** Erken teşhis uyarıları, rasyon kaydırıcıları, IoT sensör telemetrisi ve ayırma kapısı günlüğü.
3. 🧬 **14 Uzmanlaşmış İkiz Modülü & Doğrudan Erişim:** Genomik, doğum, robotlar, biyogaz, rasyon ve vizyon modüllerine doğrudan erişim kartları.

### 5.2. 40 Hücreli ($8 \times 5$) RTLS Mikroklima Isı Haritası
* Ahır içi sıcaklık ve bağıl nem sensörlerinden gelen verilerle her bir hücrenin NRC Sıcaklık-Nem İndeksi (THI) hesaplanır.
* **UWB İnek Konumları:** İneklerin hangi hücrede yattığı ve yemliğe ne kadar süre ayırdığı anlık izlenir.
* **Otonom HVAC Aktivasyonu:** $\text{THI} \ge 72$ olduğunda fanlar kademe 1; $\text{THI} \ge 78$ olduğunda fanlar kademe 2 ve yüksek basınçlı su sisleme nozulları otomatik açılır.

### 5.3. TWIN4MILK Açıklanabilir Yapay Zeka (XAI) Erken Uyarıları
Sistem sadece "bu inek hasta" demez; nedenselliği ve biomarker kanıtlarını sunar:
* **TR-34-001 (Sarıkız) - Subklinik Mastitis (%92 Güven):**
  * *Kanıtlar:* Sol arka çeyrek iletkenliği $6.82\,\text{mS/cm}$, Süt verimi $-\%14.2$, Retikülorumen sıcaklığı $39.4^\circ\text{C}$.
  * *Eylem:* `[🚪 Pnömatik Kapıyı Yönlendir: Revir (Pen B)]` butonuna dokunun; sağım çıkışındaki ayırma kapısı ineği revir bölmesine ayırır.
* **TR-34-004 (Alaca) - Subakut Rumen Asidozu / SARA (%88 Güven):**
  * *Kanıtlar:* inSiliCow Rumen pH $5.48$, Geviş süresi $320\,\text{dk/gün}$ (%32 düşüş).
  * *Eylem:* Pnömatik kapıyı Diyet Dengeleme Bölmesine yönlendirir.
* **TR-34-002 (Benekli) - Östrus / Ovulasyon Zirvesi (%95 Güven):**
  * *Kanıtlar:* 3D ivmeölçer aktivitesi $+\%240$, Yatma süresi $-4.5\,\text{saat}$.
  * *Eylem:* Pnömatik kapıyı Tohumlama Bölmesine (Pen A) yönlendirir.
* **TR-34-003 (Kınalı) - Erken Topallık / Lokomosyon Riski (%84 Güven):**
  * *Kanıtlar:* Yürüme asimetrisi $\%18$, Günlük adım $1,420$, Ayak banyosu tereddütlü geçiş (Skor 3).
  * *Eylem:* Pnömatik kapıyı Tırnak Bakım Bölmesine yönlendirir.

### 5.4. inSiliCow & RuFaS "What-If" (Eğer-Olursa) Karar Destek Simülatörü
Rasyon ve çevre kaydırıcılarını değiştirerek sonuçları anında görün:
* **Nişasta Oranı (%20–%32):** Nişasta arttıkça tahmini süt verimi artar; ancak %28 üzerine çıktığında rumen pH değeri $5.80$'in altına inerek SARA riski kırmızıya döner.
* **Ham Protein (%14–%20):** Protein dengesini ve rasyon maliyetini ayarlar.
* **Barınak Sıcaklığı ($10^\circ\text{C}–38^\circ\text{C}$):** $25^\circ\text{C}$ üzerine çıkıldığında ısı stresi kaynaklı süt verim kaybı ve enterik metan artışı hesaplanır.
* **Sürü Büyüklüğü (20–150 Baş):** Çiftliğin günlük net kâr değişimini (TL/gün) sürü toplamı üzerinden canlı hesaplar.

### 5.5. Doğal Dil Türkçe AI Çiftlik Danışmanı
Gömülü AgriTwin süitindeki sohbet kutusuna doğal Türkçe ile sorular sorabilirsiniz:
* *"Doğumhane ve distosi durumu nedir?"* ➔ Doğum bekleyen ineklerin vücut sıcaklığı düşüşü ve sancı frekansını raporlar.
* *"Kolostrum brix ve buzağı durumu?"* ➔ Son doğan buzağıların kolostrum kalite ölçümünü ve FPT riskini bildirir.
* *"Genomik boğa ve eşleştirme önerisi?"* ➔ En yüksek Net Merit değerine sahip boğaları ve Wright akrabalık kontrolünü sunar.
* *"Biyogaz enerji üretimi ve şebeke durumu?"* ➔ Günlük üretilen kWh elektrik miktarını, kojenerasyon durumunu ve gelirini özetler.

---

## 💾 6. Veri İstasyonu, Yedekleme & Raporlama

### 6.1. JSON Tam Çiftlik Yedeği Alma ve Geri Yükleme
* Üst menüdeki dişli çark simgesine veya ayarlar menüsünden **"💾 Merkezi Çiftlik Veri İstasyonu"** seçeneğine tıklayın.
* **[💾 Tüm Çiftliği Yedekle (JSON İndir)]:** Küpe defteri, aktif ilaç kilitleri, rasyonlar, tohumlamalar, tarlalar ve dijital ikiz geçmişinin tamamını tek bir dosyada (`Tosun_Pasa_Ciftlik_Yedek_YYYY-MM-DD.json`) bilgisayarınıza veya telefonunuza indirir.
* **[📂 Yedekten Geri Yükle (JSON Seç)]:** Yeni bir cihaza geçtiğinizde veya verileri geri yüklemek istediğinizde indirdiğiniz JSON dosyasını seçerek tüm çiftliği 1 saniyede geri yükleyin.

### 6.2. Excel Uyumlu CSV Dışa Aktarımı
* **Küpe & Tedaviler (CSV):** Hayvan listesi, teşhisler ve İKAS arınma süreleri.
* **Döl Takip Defteri (CSV):** Tohumlama, ultrason, kuruya alma ve doğum takvimleri.
* **Tarla Defteri (CSV):** Parsel büyüklükleri, gübreleme ve biçim tonajları.
* *Not:* Dosyalar Türkçe karakter bozulmasını engelleyen `\uFEFF` UTF-8 BOM destekli ve Excel ile tam uyumlu noktalı virgül (`;`) ayraçlı olarak oluşturulur.

### 6.3. ICAR ADE v2 Standardında JSON Çıktısı
* Dijital İkiz panelindeki **[📥 ICAR ADE JSON İndir]** butonuna basarak ISO 11787 / 17532 standardında küresel hayvan veri protokolü çıktısı alabilirsiniz.

---

## ❓ 7. Sıkça Sorulan Sorular (SSS) ve Acil Protokoller

### S1: İnternetim kesilirse uygulama çalışmaya devam eder mi?
**Cevap:** Evet. Tosun Paşa Çiftliği **%100 Çevrimdışı Öncelikli (Offline-First PWA)** mimariyle tasarlanmıştır. Telefonunuz uçak modunda olsa dahi tüm rasyon formülleri, İKAS sayaçları, döl takvimi ve kılavuzlar kesintisiz çalışır.

### S2: Verilerim internete veya üçüncü şahıslara gider mi?
**Cevap:** Kesinlikle hayır. Tüm verileriniz yalnızca kendi cihazınızın yerel tarayıcı hafızasında (`localStorage`) şifreli benzeri yerel alanda saklanır. Harici hiçbir sunucuya hayvan veya finans verisi iletilmez.

### S3: SARA asidoz alarmı verildiğinde acil ne yapmalıyım?
**Cevap:** 
1. TMR mikser vagonunda kaba yem oranını artırın (en az %45–%50 KM bazında kaba yem).
2. İnek başına günlük $150\,\text{g}$ Sodyum Bikarbonat tampon ilave edin.
3. Tane tahılların (arpa, mısır) aşırı ince öğütülmesini engelleyin; geviş getirmeyi teşvik etmek için en az $3-5\,\text{cm}$ lif uzunluğu sağlayın.

### S4: Buzağıda dehidrasyon ve ishal fark ettiğimde ilk adım ne olmalıdır?
**Cevap:**
1. Derhal hayvanı temiz buzağı kulübesine ayırın.
2. Deri elastikiyeti ve göz küresi çöküklüğüne göre dehidrasyon oranını belirleyin (%8 dehidrasyonda $40\,\text{kg}$ buzağı için $3.2\,\text{L}$ sıvı açığı vardır).
3. Sütü kesmeyin; süt öğünleri arasında ılık elektrolit solüsyonu içirin. Emme refleksi kaybolmuşsa derhal veteriner hekim çağırarak damar içi (IV) izotonik sıvı başlatın.
