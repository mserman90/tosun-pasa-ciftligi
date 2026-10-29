# 📖 AgriTwin Pro: Dijital İkiz Süt Sığırcılığı Platformu - Kapsamlı Kullanım Kılavuzu & Akademik El Kitabı

**Sürüm:** `2.4.0`  
**Lisans:** MIT  
**Canlı Demo:** [https://mserman90.github.io/dairy-cattle-digital-twin/](https://mserman90.github.io/dairy-cattle-digital-twin/)  
**GitHub Deposu:** [mserman90/dairy-cattle-digital-twin](https://github.com/mserman90/dairy-cattle-digital-twin)  
**Uluslararası Standartlar:** NASEM (2021), NRC (2001), ICAR ADE v2.0, IDF 148A, VDI 4630, IPCC Tier 3, ISO 11784/11785.

---

## 📑 İçindekiler
1. [Sistem Mimarisi & Genel Bakış](#1-sistem-mimarisi--genel-bakış)
2. [Üst Göstergeler (KPI) & Finansal Karar İkizi](#2-üst-göstergeler-kpi--finansal-karar-ikizi)
3. [RTLS Barınak Haritası & Mikroklima Isı Haritası](#3-rtls-barınak-haritası--mikroklima-ısı-haritası)
4. [Biyometrik Sürü Kartları & Telemetri Akışı](#4-biyometrik-sürü-kartları--telemetri-akışı)
5. [Açıklanabilir Yapay Zeka (XAI) & Klinik Karar Destek](#5-açıklanabilir-yapay-zeka-xai--klinik-karar-destek)
6. [Genomik Seleksiyon, Pedigri & Akıllı Çiftleştirme İkizi](#6-genomik-seleksiyon-pedigri--akıllı-çiftleştirme-ikizi)
7. [Doğumhane Yönetimi, Distosi (Güç Doğum) & Kolostrum Brix](#7-doğumhane-yönetimi-distosi-güç-doğum--kolostrum-brix)
8. [Ahır İçi Otonom Robot Filosu İkizi](#8-ahır-içi-otonom-robot-filosu-ikizi)
9. [Döngüsel Ekonomi, Biyogaz & Net-Zero Enerji İkizi](#9-döngüsel-ekonomi-biyogaz--net-zero-enerji-ikizi)
10. [Çok Amaçlı RuFaS Rasyon Formülasyonu & Pareto İkizi](#10-çok-amaçlı-rufas-rasyon-formülasyonu--pareto-ikizi)
11. [Günlük Denetim Raporu & ICAR ADE Veri Entegrasyonu](#11-günlük-denetim-raporu--icar-ade-veri-entegrasyonu)
12. [Yapay Zeka Danışmanı & Kriz Senaryoları](#12-yapay-zeka-danışmanı--kriz-senaryoları)
13. [Akademik Kısaltmalar & Standartlar Sözlüğü](#13-akademik-kısaltmalar--standartlar-sözlüğü)

---

## 1. Sistem Mimarisi & Genel Bakış
AgriTwin Pro, modern süt sığırcılığı işletmelerinde fiziksel nesnelerin (inekler, robotlar, biyogaz reaktörleri, çevre sensörleri) gerçek zamanlı dijital kopyasını oluşturarak **tanısal, öngörüsel ve reçetesel (prescriptive)** kararlar üreten bütünleşik bir Hassas Hayvancılık (PLF) platformudur.

### 1.1 Çift Katmanlı Mimari
- **FastAPI Asenkron Arka Uç (Python 3.10+):** RESTful API uç noktaları (`/api/state`, `/api/step`, `/api/scenarios`, `/api/ai/query`, `/api/export/icar-ade`), Pydantic veri modelleri, deterministik biyolojik osilasyon motoru.
- **İstemci Taraflı Offline-First Motor (Vanilla JS / WebAssembly):** Sunucu kapalıyken dahi tam fonksiyonel simülasyon, 72 saatlik veri tamponlama (buffering), tarayıcı içi NLP kural motoru.

### 1.2 Donanım ve Sensör Katmanı
- **UWB (Ultra-Wideband) RFID:** IEEE 802.15.4z standardında ToF (Time-of-Flight) konumlandırma (±15 cm doğruluk).
- **Kablosuz İntraruminal Bolus:** pH kinetiği, retikulum sıcaklığı ve motilite kasılma frekansı.
- **3D Derinlik Kamerası (RGB-D):** Computer Vision tabanlı omurga kamburluğu (Lameness) ve pelvik açlık çukuru hacmi (BCS).
- **Hat İçi Sağım Spektrometresi:** 4 bağımsız meme lobundan elektriksel iletkenlik (mS/cm), akış hızı ve lökosit varlığı.

---

## 2. Üst Göstergeler (KPI) & Finansal Karar İkizi

### 2.1 Temel Sürü Metrikleri
- **Toplam Sürü Varlığı:** ICAR ADE standardında takip edilen dijital ikiz varlığı.
- **Sürü Sağlık Durumu (DSS):** Çok değişkenli lojistik regresyon ve Causal Bayesian Network sınıflandırması.
- **Maksimum THI (Sıcaklık-Nem İndeksi):** NRC (1971) formülasyonu:
  $$\text{THI} = (1.8 \cdot T + 32) - (0.55 - 0.0055 \cdot RH) \cdot (1.8 \cdot T - 26)$$
  - $\text{THI} < 68$: Termonötral konfor.
  - $\text{THI} \ge 72$: Orta ısı stresi (fan ve duş otomasyonu tetiklenir).
  - $\text{THI} \ge 78$: Şiddetli asidoz ve abort riski.
- **Otomatik Ayırma Kapısı (Smart Gate):** DeLaval / Lely akıllı ayırma kapısı mantığıyla hasta ve kızgınlıktaki hayvanları revir tüneline yönlendirir.

### 2.2 Finansal İkiz & IOFC
- **Yem Üzeri Gelir (IOFC):**
  $$\text{IOFC (₺/baş/gün)} = (\text{Günlük Süt (kg)} \times \text{Süt Fiyatı (₺/kg)}) - \text{Günlük Rasyon Maliyeti (₺)}$$
- Model, rasyon tasarrufu ve önlenen hastalık kayıpları üzerinden **14 - 18 ay** amortisman (ROI) projeksiyonu sunar.

---

## 3. RTLS Barınak Haritası & Mikroklima Isı Haritası
- 40 metre x 25 metre gerçek ölçekli ahır koordinat düzlemi.
- 8x5 (40 hücreli) mikroklima THI enterpolasyon ızgarası.
- **Radar Dalgaları (Radar Pulse):** Klinik uyarıdaki hayvanların etrafında kırmızı yanıp sönen halka; haritadaki hayvana tıklandığında anında **XAI Teşhis Modalı** açılır.
- **Otonom Robot Devriyesi:** Juno yem itici ve Discovery gübre vakumunun gerçek zamanlı konumları; tıklandığında filo paneli açılır.

---

## 4. Biyometrik Sürü Kartları & Telemetri Akışı
Her hayvan kartında canlı güncellenen fizyolojik parametreler:
- **DIM (Days in Milk):** Laktasyon günü (0-60 NEB, 60-120 pik, 120-305 orta/geç).
- **BCS (Vücut Kondisyon Skoru):** Ferguson et al. (1994) 1.0 - 5.0 ölçeği.
- **Topallık Skoru:** Sprecher et al. (1997) 1.0 - 5.0 skalası (Skor $\ge 2.5$ klinik alarm).
- **Rumen pH:** Krause & Oetzel (2006) kriteri: $\text{pH} < 5.80$ süresi $> 180\text{ dk/gün}$ ise SARA teşhis edilir.
- **Elektriksel İletkenlik (EC):** $> 5.80\text{ mS/cm}$ mastitis alarmıdır.
- **Geviş Süresi:** $35 - 45\text{ dk/2sa}$ normal fizyolojik aralıktır.
- **Vücut Sıcaklığı:** $38.5^\circ\text{C} - 39.2^\circ\text{C}$ bazal sıcaklık.

---

## 5. Açıklanabilir Yapay Zeka (XAI) & Klinik Karar Destek
- **Causal Feature Importance (SHAP):** Lundberg & Lee (2017) oyun teorisiyle tanıya etki eden ilk 5 biyolojik faktörü etki yüzdesiyle listeler.
- **Wood Laktasyon Fonksiyonu:**
  $$y(t) = a \cdot t^b \cdot e^{-c t}$$
  Beklenen süt verim eğrisi ile canlı ölçüm arasındaki sapmayı grafikler.
- **3D Computer Vision Yürüyüş & Pelvis Analizi:** Sırt kamburluk çizgisi (Spine SVG) ve kalça enine kesiti.
- **Rumen Biyokimyasal İkizi:** inSiliCow modeli, A:P oranı ($> 2.80$), VFA konsantrasyonu, tampon sodyum bikarbonat dozu.
- **4 Çeyrek Meme Spektrometresi:** RF, RR, LF, LR çeyreklerinin iletkenlik analizi ve enfekte lobun tahliyesi.
- **Veteriner Tedavisi & İlaç Arınma Kilidi (Withdrawal Period):** Antibiyotik uygulandığında robotik süt tankı vanası kilitlenir, süt atığa sevk edilir.

---

## 6. Genomik Seleksiyon, Pedigri & Akıllı Çiftleştirme İkizi
- **Wright Akrabalık Katsayısı ($F$):**
  $$F = \sum \left[ \left(\frac{1}{2}\right)^{n_1+n_2+1} \cdot (1 + F_A) \right]$$
  Güvenli sınır: $F < 6.25\%$ (Kuzen eşleşmesi altı).
- **GEBV & Net Merit (NM$):** 50.000 SNP işaretçili GBLUP modeli; ömür boyu kârlılık indeksi ($> +\$850$).
- **Resesif Genetik Kusur Elemesi:** HH1-HH6, BLAD ve CVM öldürücü gen taşıyıcılığı otomatik elenir.
- **3 Aday Boğa Eşleştirmesi:** Sürü ortalamasını ıslah ederken akrabalığı minimize eden optimal boğa önerileri.

---

## 7. Doğumhane Yönetimi, Distosi (Güç Doğum) & Kolostrum Brix
- **Pre-Partum Sıcaklık Düşüşü (PBTD):** Doğumdan 12-24 saat önce rektal/vajinal ısıda $-0.5^\circ\text{C}$ ile $-0.8^\circ\text{C}$ fizyolojik düşüş.
- **Distosi DSS:** Fötal-pelvik uyumsuzluk ve doğum sancısı tespiti; acil veteriner müdahale bildirimi.
- **Kolostrum Brix Refraktometrisi:**
  $$\text{Brix \%} \ge 22\% \iff \text{Kolostrum IgG} \ge 50\text{ g/L}$$
- **FPT (Pasif Transfer Yetmezliği) Önleme:** İlk 2-4 saat içinde buzağıya 4 litre yüksek kaliteli kolostrum beslenmesi.

---

## 8. Ahır İçi Otonom Robot Filosu İkizi
- **Lely Juno X Yem İtici:** 45 dakikada bir TMR yemini iter, seçiciliği önler, DMI'ı +%3.2 artırır.
  - Butonlar: `▶️ Ekstra Yem İtme Başlat`, `⚡ Şarja Gönder`.
- **Lely Discovery Vac Gübre Vakum Robotu:** Zemin amonyak emisyonunu %45 azaltır, tırnak lezyonlarını önler, toplanan atığı biyogaza aktarır.
  - Butonlar: `▶️ Koridoru Temizle`, `🛢️ Biyogaza Deşarj Et`.

---

## 9. Döngüsel Ekonomi, Biyogaz & Net-Zero Enerji İkizi
- **Mezofilik Anaerobik Çürütme (VDI 4630):** 38°C reaktör, günlük 3.6 ton gübre, 213 m³ biyogaz üretimi (%58 $\text{CH}_4$).
- **Kojenerasyon (CHP):** 35 kW elektrik + 50 kW termal sıcak su üretimi.
- **Net-Zero Pozitif (%400+):** Tüketilen 7 kW, üretilen 35 kW; fazla enerji şebekeye verilir.
- **Karbon Kredisi:** Yılda 312 ton $\text{CO}_2\text{e}$ sera gazı dengelenir.

---

## 10. Çok Amaçlı RuFaS Rasyon Formülasyonu & Pareto İkizi
- **RuFaS (Ruminant Farm Systems) Modeli:** Çok amaçlı optimizasyon.
  $$\min \left[ \text{Maliyet (₺)} \right] \quad \text{ve} \quad \min \left[ \text{Metan Yoğunluğu (g CH}_4\text{/kg DMI)} \right]$$
- **Stratejiler:**
  1. Bazal TMR Rasyonu (184 ₺, 420 g $\text{CH}_4$).
  2. RuFaS Çok Amaçlı Optimum: **Metan -%16.4, Yem Maliyeti +%14.2 Tasarruf**.
  3. Düşük Karbon Rasyonu: Metan -%28 (Kırmızı deniz yosunu takviyeli).
- Tek tıkla rasyon uygulama butonu (`✅ Seçilen Rasyonu Sürüye Uygula`).

---

## 11. Günlük Denetim Raporu & ICAR ADE Veri Entegrasyonu
- **Denetim Raporu:** Sürü telemetrisi, aktif tedaviler, karantina günleri ve enerji dengesini içeren Markdown raporu (Panoya kopyalama ve `.md` indirme).
- **ICAR ADE JSON Export:** Uluslararası Hayvan Kayıt Komitesi Animal Data Exchange v2.0 JSON standardında resmi veri aktarımı.

---

## 12. Yapay Zeka Danışmanı & Kriz Senaryoları
- **Doğal Dil Arayüzü:** Türkçe zooteknik ve veteriner soru-cevap asistanı.
- **4 Profesyonel Persona:** Çiftlik Müdürü, Sürü Veteriner Hekimi, Zooteknist/Besleme Uzmanı, Biyogaz Mühendisi.
- **7 Anlık Kriz Senaryosu:**
  - 🚨 Distosi / Güç Doğum Alarmı
  - 🦠 Subklinik Mastitis Olgusu
  - 🧪 Rumen Asidozu / SARA
  - 🔥 Barınakta Isı Dalgası (THI > 78)
  - ⚡ Kızgınlık / Estrus Tespiti
  - 🦶 Topallık / Tırnak Olgusu
  - 🌿 RuFaS Rasyon Optimizasyonu

---

## 13. Akademik Kısaltmalar & Standartlar Sözlüğü
- **NASEM:** National Academies of Sciences, Engineering, and Medicine (2021 NRC Besleme Standartları).
- **ICAR:** International Committee for Animal Recording (ISO 11784/11785 RFID & ADE v2.0).
- **IDF:** International Dairy Federation (IDF Standard 148A Somatik Hücre Sayımı).
- **SARA:** Subakut Rumen Asidozu (Krause & Oetzel 2006).
- **DIM:** Days in Milk (Laktasyon Günü).
- **BCS:** Body Condition Score (Ferguson 1994 1-5 Skalası).
- **THI:** Temperature-Humidity Index (NRC 1971 / Collier 2012).
- **GEBV:** Genomic Estimated Breeding Value (Meuwissen 2001 GBLUP).
- **NM$:** Net Merit Dollars (USDA-CDCB Ömür Boyu Kârlılık).
- **TPI:** Total Performance Index (Holstein Association USA).
- **PBTD:** Pre-Partum Body Temperature Drop (Streyl 2011).
- **FPT:** Failure of Passive Transfer (Buczinski 2016 IgG < 10 g/L).
- **IOFC:** Income Over Feed Cost (Penn State Extension).
- **CHP:** Combined Heat and Power (VDI 4630 Biyogaz Kojenerasyon).
- **RuFaS:** Ruminant Farm Systems Konsorsiyumu.
- **SHAP:** SHapley Additive exPlanations (Lundberg & Lee 2017).
