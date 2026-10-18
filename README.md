# 🐂 Tosun Paşa Çiftliği
### Bütünleşik Çiftlik & Hayvancılık Yönetim Sistemi
**%100 Çevrimdışı Öncelikli (Offline-First PWA) • Sıfır Harici Sunucu • Mobil Öncelikli Saha Portalı**

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-success?style=flat&logo=github)](https://mserman90.github.io/tosun-pasa-ciftligi/)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-128c7e?style=flat&logo=pwa)](https://mserman90.github.io/tosun-pasa-ciftligi/)
[![License: MIT](https://img.shields.io/badge/License-MIT-075e54.svg)](LICENSE)

---

## 🎯 Vizyon ve Temel İlkeler

Tosun Paşa Çiftliği; yaylada, merada, dağda veya bodrum ahırında hücresel veri veya Wi-Fi internet bağlantısı olmadan **veteriner hekimlik** ve **zootekni** bilimini pratik çiftçi diliyle birleştiren çevrimdışı tekil bir mobil karar destek sistemidir.

- **%100 Çevrimdışı Çalışma (Offline-First):** Service Worker (Önbellek Öncelikli) mimarisi sayesinde internet kesildiğinde dahi tüm formüller, algoritmalar ve kayıt defterleri eksiksiz çalışır.
- **Sıfır Harici Sunucu (Zero-Server Dependency):** Tüm veriler yalnızca kullanıcının kendi cihazında (`localStorage`) saklanır; harici sunuculara hiçbir veri aktarılmaz.
- **Saha Şartlarına Uygun Tasarım:** 4px katı köşe yuvarlama standardı, yüksek kontrastlı gece/gündüz modu, min. 42px dokunmatik kullanım alanı ve muhasebe hizalı `tabular-nums` rakam formatı.

---

## 🧩 4 Temel Uzmanlık Modülü

### 1. 🩺 Çoban Doktor (Saha Ön Teşhis & Triyaj)
- **Saha Karar Ağacı Motoru:** Sığır, buzağı, koyun ve kuzu için sindirim, solunum, meme ve sinirsel/ayak semptomlarını ağırlıklı puanlama algoritmasıyla analiz ederek en olası 3 ön teşhisi yüzdesel olasılıkla listeler.
- **Hızlı Ateş / Rektal Derece Kontrolü:** Tür bazında (sığır 38.0–39.0°C, buzağı 38.5–39.5°C, koyun 38.5–39.5°C, kuzu 39.0–40.0°C) vücut ısısını analiz eder.
- **Canlı İKAS Süt & Et Arınma Süresi Kilidi:** Saniye saniye geri sayan kilit sayacı ile yasal arınma süresi dolana kadar süt tankı ve kesim yasağını kırmızı güvenlik banner'ıyla engeller.
- **Sıvı & Kolostrum Hesaplayıcı:** Dehidrasyon yüzdesi (%5-%12) ve yaşama payı (50-80 ml/kg) ile 24 saatlik damla hızı hesabı; Brix refraktometre kalite skalası.
- **Acil Altın Protokoller:** Akut Timpani (trokar/sonda), Rumen Asidozu (bikarbonat), Çelerme ve Hipokalsemi (yavaş damar içi kalsiyum).

### 2. 🌾 Rasyon Rehberi (Bilimsel Besleme & LP Simplex)
- **Doğrusal Programlama (Simplex LP Robotu):** NRC 2001 ve NASEM 2021 standartlarında KM, Ham Protein, ME Enerji, NDF lif ve Ca:P (1.5–2.0) kısıtlarını sağlarken en ucuz maliyetli reçeteyi optimize eder.
- **45+ Bilimsel Yem Ambarı:** Kaba yemler, tane tahıllar, protein küspeleri (PTK %34, Soya %44, ATK %28 vb.) ve mineral tamamlayıcılar.
- **TMR Mikser Vagon Kantarı:** Reçeteyi sürü hayvan sayısı ile (örn: 50 baş) çarpar; sırayla döküm adımlarında kantar sıfırlama (dara) ve kümülatif tartım göstergesi sunar.
- **Pearson Karesi Robotu:** İki yem arasında hedeflenen protein oranını yakalamak için gereken karışım yüzdeleri ve parti kilogramları.
- **Canlı Ağırlık (CAAG) Tahmini:** Göğüs çevresi ve vücut uzunluğundan baskülsüz canlı ağırlık formülü.

### 3. 🍼 Üretim Rehberi (Döl Verimi & Biyolojik Takvimler)
- **283 Günlük Büyükbaş İnek Çarkı:** 21. gün kızgınlık dönüş kontrolü, 45. gün ultrason, 223. gün kuruya alma, 253. gün buzağı ishal aşısı ve 283. gün doğum takvimi.
- **150 Günlük Küçükbaş Koç Katımı Takvimi:** Flaşlama beslemesi (flushing), ultrason ikizlik tespiti, 105. gün gebelik toksemisi önleme rasyonu, 120. gün enterotoksemi aşısı ve 150. gün kuzulama takvimi.
- **AM-PM Tohumlama Kuralı:** Sabah fark edilen kızgınlıkta aynı günün akşamı; akşam fark edilen kızgınlıkta ertesi sabah tohumlama kuralı.
- **Damızlık Olgunluk Eşiği Kontrolü:** Düvelerde en az %60-65 canlı ağırlık ve 14-16 ay yaş kontrolü.

### 4. 🌱 Yem Bitkileri & Silaj Rehberi (Agronomi & Tohum)
- **15+ Agronomi Bitki Kartı:** Yonca, Korunga, Silajlık Mısır, Ryegrass, Macar Fiği, Yem Bezelyesi, Tritikale vb. için ekim derinliği, dekara tohum, gübreleme ve biçim fenolojisi.
- **İdeal Tohumluk Karışım Robotu:** Kuru ot, mera veya silaj hedefine göre baklagil-buğdaygil tohum oranları ve torba sayısı.
- **Mikrodalga Silaj Nem Testi:** $100\,\text{g}$ numune kurutularak KM ve nem oranı hesaplanır (%65-70 ideal paketleme nemi).
- **Kelepçe/Hendek Silo Hacim & Tonajı:** Silo hacmi ($m^3$) ve sıkıştırma yoğunluğuyla ($700\,\text{kg/m}^3$) toplam tonaj hesabı.

---

## 💾 Veri Merkezi, Yedekleme & CSV

- **Tüm Çiftliği Yedekle (JSON):** `Tosun_Pasa_Ciftlik_Yedek_YYYY-MM-DD.json` formatında tek tıkla tam yedekleme ve geri yükleme.
- **Excel Uyumlu CSV:** Türkçe karakter bozulmasını önleyen `\uFEFF` UTF-8 BOM destekli noktalı virgül (`;`) ayraçlı dışa aktarım (Küpe & Tedavi Defteri, Döl Takip Defteri, Tarla Defteri).

---

## 📱 Canlı Demo & Kurulum (PWA)

Uygulama doğrudan GitHub Pages üzerinde yayındadır:  
👉 **[https://mserman90.github.io/tosun-pasa-ciftligi/](https://mserman90.github.io/tosun-pasa-ciftligi/)**

- **Telefona / Bilgisayara İndirme:** Tarayıcınızda açtıktan sonra sağ üstteki **[📲 Yükle]** butonuna tıklayarak veya tarayıcı menüsünden *"Ana Ekrana Ekle"* seçeneğini seçerek yerel uygulama olarak kurabilirsiniz.
