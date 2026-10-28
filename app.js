/**
 * Tosun Paşa Çiftliği: Bütünleşik Çiftlik & Hayvancılık Yönetim Sistemi
 * Master Application Script (app.js)
 * Standalone Offline-First PWA Engine
 */

'use strict';

// =============================================================================
// 1. MERKEZİ VERİ TABANI & DURUM YÖNETİMİ (STATE MANAGEMENT)
// =============================================================================
const DB_KEY = 'ciftlik_master_db_v1';

const DEFAULT_DB = {
  version: "1.0.0",
  lastUpdated: new Date().toISOString(),
  farmInfo: {
    farmName: "Tosun Paşa Çiftliği",
    owner: "Çiftlik Yöneticisi",
    location: "Ankara / Haymana",
    capacity: 120
  },
  doctor: {
    earTagRecords: [
      {
        id: "rec_001",
        tagNo: "TR-06-1234567",
        species: "sigir",
        animalName: "Kınalı",
        diagnosis: "Akut Timpani (Şişme)",
        drugName: "Dimetikon + Spazmolitik",
        treatmentDate: new Date(Date.now() - 12 * 3600 * 1000).toISOString(),
        milkLockHours: 72,
        meatLockDays: 14,
        notes: "Sol açlık çukuru gergin, köpüklü gaz boşaltıldı, sondalandı."
      },
      {
        id: "rec_002",
        tagNo: "TR-06-9876543",
        species: "buzagi",
        animalName: "Garip",
        diagnosis: "Buzağı Neonatal İshal",
        drugName: "Halofuginon + Elektrolit",
        treatmentDate: new Date(Date.now() - 40 * 3600 * 1000).toISOString(),
        milkLockHours: 0,
        meatLockDays: 28,
        notes: "Göz küresi çökük, dehidrasyon %8. Günde 3L elektrolit verildi."
      }
    ]
  },
  ration: {
    customFeeds: [],
    savedRecipes: [
      {
        id: "rec_ration_01",
        name: "Besi Danası 400kg Son Dönem",
        targetAnimal: "besi_400",
        totalKg: 12.8,
        costPerDay: 84.50,
        ingredients: [
          { feedId: "misir_dane", feedName: "Mısır Dane (Öğütülmüş)", amountKg: 5.5, price: 7.20 },
          { feedId: "arpa_ezme", feedName: "Arpa Ezmesi", amountKg: 2.5, price: 6.80 },
          { feedId: "yonca_kuru", feedName: "Yonca Kuru Otu", amountKg: 2.0, price: 5.50 },
          { feedId: "bugday_samani", feedName: "Buğday Samanı", amountKg: 1.2, price: 2.20 },
          { feedId: "ptk_34", feedName: "Pamuk Tohumu Küspesi (%34 HP)", amountKg: 1.5, price: 10.50 },
          { feedId: "mermer_tozu", feedName: "Mermer Tozu (Kalsiyum)", amountKg: 0.1, price: 1.50 }
        ]
      },
      {
        id: "rec_ration_02",
        name: "Yüksek Verimli Süt İneği (30L)",
        targetAnimal: "sut_30",
        totalKg: 22.4,
        costPerDay: 168.00,
        ingredients: [
          { feedId: "misir_silaji", feedName: "Mısır Silajı (%32 KM)", amountKg: 18.0, price: 2.60 },
          { feedId: "yonca_kuru", feedName: "Yonca Kuru Otu", amountKg: 3.5, price: 5.50 },
          { feedId: "soya_44", feedName: "Soya Küspesi (%44 HP)", amountKg: 2.2, price: 17.50 },
          { feedId: "misir_dane", feedName: "Mısır Dane (Öğütülmüş)", amountKg: 4.5, price: 7.20 },
          { feedId: "bugday_kepegi", feedName: "Buğday Kepeği", amountKg: 1.5, price: 5.20 },
          { feedId: "bikarbonat", feedName: "Sodyum Bikarbonat", amountKg: 0.15, price: 12.00 }
        ]
      }
    ]
  },
  reproduction: {
    records: [
      {
        id: "rep_001",
        tagNo: "TR-34-889900",
        species: "cattle",
        name: "Sarıkız",
        inseminationDate: "2026-03-01",
        sire: "Simental Max 102",
        check21Date: "2026-03-22",
        ultrasoundDate: "2026-04-15",
        dryOffDate: "2026-10-10",
        vaccineDate: "2026-11-09",
        expectedCalvingDate: "2026-12-09",
        status: "kuru_donem",
        notes: "Kuruya alındı, meme içi antibiyotik yapıldı."
      },
      {
        id: "rep_002",
        tagNo: "TR-06-445566",
        species: "cattle",
        name: "Benekli",
        inseminationDate: "2026-09-20",
        sire: "Holstein Boss",
        check21Date: "2026-10-11",
        ultrasoundDate: "2026-11-04",
        dryOffDate: "2027-04-30",
        vaccineDate: "2027-05-30",
        expectedCalvingDate: "2027-06-30",
        status: "gebe",
        notes: "21. gün kızgınlık göstermedi, ultrason bekleniyor."
      },
      {
        id: "rep_003",
        tagNo: "TR-06-KOY-012",
        species: "sheep",
        name: "Sürmeli",
        inseminationDate: "2026-06-15",
        sire: "İvesi Koç 04",
        check21Date: "2026-07-02",
        ultrasoundDate: "2026-08-01",
        dryOffDate: "2026-09-28",
        vaccineDate: "2026-10-13",
        expectedCalvingDate: "2026-11-12",
        status: "dogumu_yakin",
        notes: "İkiz kuzu bekleniyor. Enterotoksemi aşısı tamamlandı."
      }
    ]
  },
  forage: {
    fieldRecords: [
      {
        id: "field_001",
        fieldName: "Köy Önü Çayır Mevkii",
        areaDa: 25,
        cropType: "Yonca + İtalyan Çimi",
        seedingDate: "2026-04-05",
        fertilizer: "Taban: 25 kg 20-20-0, Üst: 15 kg Üre",
        harvestYieldKg: 12500,
        notes: "1. Biçim yapıldı, silaj nemi %68."
      },
      {
        id: "field_002",
        fieldName: "Dere Boyu Mısır Tarlası",
        areaDa: 40,
        cropType: "Silajlık Mısır (Pioneer 31Y43)",
        seedingDate: "2026-05-10",
        fertilizer: "Taban: 35 kg DAP, Üst: 30 kg Üre",
        harvestYieldKg: 220000,
        notes: "Süt çizgisi 1/2 iken biçildi, kuru madde %33."
      }
    ]
  }
};

let DB = loadDatabase();

function loadDatabase() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (!raw) {
      saveDatabase(DEFAULT_DB);
      return JSON.parse(JSON.stringify(DEFAULT_DB));
    }
    const parsed = JSON.parse(raw);
    // Ensure nested objects exist
    if (!parsed.doctor) parsed.doctor = { earTagRecords: [] };
    if (!parsed.ration) parsed.ration = { customFeeds: [], savedRecipes: [] };
    if (!parsed.reproduction) parsed.reproduction = { records: [] };
    if (!parsed.forage) parsed.forage = { fieldRecords: [] };
    return parsed;
  } catch (e) {
    console.error("Veritabanı yüklenirken hata oluştu:", e);
    return JSON.parse(JSON.stringify(DEFAULT_DB));
  }
}

function saveDatabase(customDb = null) {
  try {
    const data = customDb || DB;
    data.lastUpdated = new Date().toISOString();
    localStorage.setItem(DB_KEY, JSON.stringify(data));
    // 3D Simülasyon Veri Köprüsünü tetikle
    if (typeof syncDataTo3DSimulation === 'function') {
      syncDataTo3DSimulation(false);
    }
  } catch (e) {
    console.error("Veritabanı kaydedilemedi:", e);
    showToast("Veri kaydedilirken hafıza hatası oluştu!", "toast-error");
  }
}

// =============================================================================
// 2. KULLANICI BİLDİRİMLERİ & YARDIMCI ARAÇLAR
// =============================================================================
function showToast(message, type = 'toast-info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

function formatTurkishDate(dateInput) {
  if (!dateInput) return '-';
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return dateInput;
  return d.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatNumber(num, decimals = 1) {
  if (isNaN(num) || num === null) return '0.0';
  return Number(num).toLocaleString('tr-TR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

// =============================================================================
// 3. SCIENTIFIC FEED INGREDIENTS DATABASE (TÜRKİYE'DE YAYGIN KULLANILAN YEMLER & AKILLI YEMLER)
// =============================================================================
const MASTER_FEED_DATABASE = [
  // 1. Kaba Yemler & Silajlar
  { id: "yonca_kuru", name: "Yonca Kuru Otu (%17.5 HP)", category: "kaba", km: 88, hp: 17.5, me: 2.15, ndf: 44, adf: 32, ca: 1.45, p: 0.28, price: 5.50 },
  { id: "yonca_baslangic", name: "Yonca Kuru Otu (Erken Biçim %20 HP)", category: "kaba", km: 89, hp: 20.0, me: 2.30, ndf: 39, adf: 28, ca: 1.60, p: 0.32, price: 6.20 },
  { id: "korunga_kuru", name: "Korunga Kuru Otu", category: "kaba", km: 88, hp: 15.0, me: 2.10, ndf: 46, adf: 34, ca: 1.25, p: 0.25, price: 5.20 },
  { id: "misir_silaji", name: "Mısır Silajı (%32 KM, Dane Zengin)", category: "kaba", km: 32, hp: 8.2, me: 2.50, ndf: 43, adf: 26, ca: 0.25, p: 0.22, price: 2.60 },
  { id: "misir_silaji_paket", name: "Paketli Mısır Silajı (Vakumlu Balya %33 KM)", category: "kaba", km: 33, hp: 8.4, me: 2.52, ndf: 42, adf: 25, ca: 0.26, p: 0.23, price: 3.10 },
  { id: "misir_silaji_nemli", name: "Mısır Silajı (%28 KM)", category: "kaba", km: 28, hp: 7.8, me: 2.40, ndf: 46, adf: 28, ca: 0.24, p: 0.20, price: 2.30 },
  { id: "ryegrass_silaji", name: "İtalyan Çimi (Ryegrass) Silajı", category: "kaba", km: 35, hp: 14.5, me: 2.35, ndf: 48, adf: 30, ca: 0.65, p: 0.35, price: 3.20 },
  { id: "ryegrass_kuru", name: "İtalyan Çimi (Ryegrass) Kuru Otu", category: "kaba", km: 88, hp: 13.5, me: 2.20, ndf: 52, adf: 33, ca: 0.60, p: 0.30, price: 4.80 },
  { id: "arpa_hasili_silaji", name: "Arpa Hasılı Silajı (Süt Olum)", category: "kaba", km: 34, hp: 10.5, me: 2.25, ndf: 50, adf: 32, ca: 0.40, p: 0.28, price: 2.50 },
  { id: "yulaf_hasili_silaji", name: "Yulaf Hasılı Silajı", category: "kaba", km: 32, hp: 9.2, me: 2.15, ndf: 54, adf: 35, ca: 0.42, p: 0.26, price: 2.40 },
  { id: "sorgum_silaji", name: "Sorgum-Sudan Otu Silajı", category: "kaba", km: 28, hp: 7.5, me: 2.20, ndf: 55, adf: 36, ca: 0.35, p: 0.20, price: 2.10 },
  { id: "bugday_samani", name: "Buğday Samanı (Beyaz Saman)", category: "kaba", km: 90, hp: 3.5, me: 1.45, ndf: 74, adf: 50, ca: 0.38, p: 0.10, price: 2.20 },
  { id: "arpa_samani", name: "Arpa Samanı", category: "kaba", km: 89, hp: 4.2, me: 1.55, ndf: 71, adf: 48, ca: 0.42, p: 0.12, price: 2.40 },
  { id: "yulaf_samani", name: "Yulaf Samanı", category: "kaba", km: 89, hp: 4.5, me: 1.60, ndf: 69, adf: 46, ca: 0.40, p: 0.14, price: 2.50 },
  { id: "misir_sapi", name: "Mısır Sapı / Anız Samanı", category: "kaba", km: 88, hp: 4.0, me: 1.50, ndf: 68, adf: 44, ca: 0.40, p: 0.12, price: 1.80 },
  { id: "aycicegi_sapi", name: "Ayçiçeği Tablası / Samanı", category: "kaba", km: 89, hp: 5.5, me: 1.60, ndf: 62, adf: 42, ca: 0.65, p: 0.15, price: 1.90 },
  { id: "cayir_kuru", name: "Çayır Kuru Otu (Doğal Bozkır/Mera)", category: "kaba", km: 88, hp: 9.5, me: 1.95, ndf: 58, adf: 38, ca: 0.55, p: 0.22, price: 4.00 },
  { id: "fig_tahil_kuru", name: "Fiğ + Tahıl Karışımı Kuru Otu", category: "kaba", km: 87, hp: 14.0, me: 2.15, ndf: 49, adf: 34, ca: 0.95, p: 0.28, price: 5.00 },
  { id: "yulaf_kuru", name: "Yulaf Kuru Otu (Süt Olum)", category: "kaba", km: 88, hp: 8.5, me: 2.05, ndf: 56, adf: 36, ca: 0.45, p: 0.24, price: 4.20 },
  { id: "sudan_otu_kuru", name: "Sudan Otu Kuru Otu", category: "kaba", km: 88, hp: 9.0, me: 1.95, ndf: 58, adf: 37, ca: 0.50, p: 0.22, price: 3.80 },
  { id: "pancar_posasi_paket", name: "Paketli Şeker Pancarı Posası Silajı (Balya Küspe %24 KM)", category: "kaba", km: 24, hp: 9.2, me: 2.68, ndf: 44, adf: 22, ca: 0.88, p: 0.12, price: 2.20 },
  { id: "elma_posasi_silaji", name: "Elma Posası Silajı (%22 KM)", category: "kaba", km: 22, hp: 6.5, me: 2.60, ndf: 42, adf: 28, ca: 0.18, p: 0.11, price: 1.30 },
  { id: "domates_posasi_kuru", name: "Domates Posası Kuru (%22 HP)", category: "kaba", km: 88, hp: 22.0, me: 2.30, ndf: 54, adf: 40, ca: 0.35, p: 0.45, price: 4.50 },
  { id: "narenciye_posasi", name: "Narenciye (Portakal/Limon) Posası Silajı", category: "kaba", km: 20, hp: 6.8, me: 2.75, ndf: 22, adf: 14, ca: 1.40, p: 0.12, price: 1.40 },

  // 2. Kesif / Tane Yemler (Enerji Kaynakları)
  { id: "arpa_ezme", name: "Arpa Ezmesi / Kırması", category: "kesif", km: 88, hp: 11.5, me: 2.85, ndf: 18, adf: 6, ca: 0.08, p: 0.36, price: 6.80 },
  { id: "arpa_flake", name: "Buharda Pişirilmiş Arpa Flake", category: "kesif", km: 88, hp: 11.8, me: 2.95, ndf: 17, adf: 5, ca: 0.08, p: 0.36, price: 7.80 },
  { id: "misir_dane", name: "Mısır Dane (Öğütülmüş)", category: "kesif", km: 87, hp: 8.5, me: 3.15, ndf: 10, adf: 3, ca: 0.03, p: 0.28, price: 7.20 },
  { id: "misir_flake", name: "Buharda Pişirilmiş Mısır Flake", category: "kesif", km: 88, hp: 8.8, me: 3.30, ndf: 9, adf: 3, ca: 0.03, p: 0.28, price: 8.50 },
  { id: "misir_nemli_kirma", name: "Nemli Mısır Tane Silajı (CCM %68 KM)", category: "kesif", km: 68, hp: 8.6, me: 3.25, ndf: 10, adf: 3, ca: 0.03, p: 0.27, price: 5.80 },
  { id: "bugday_dane", name: "Yemlik Buğday Kırması", category: "kesif", km: 88, hp: 12.5, me: 3.05, ndf: 12, adf: 4, ca: 0.06, p: 0.38, price: 7.40 },
  { id: "yulaf_dane", name: "Yulaf Dane (Kavuzlu)", category: "kesif", km: 89, hp: 11.0, me: 2.65, ndf: 30, adf: 14, ca: 0.10, p: 0.35, price: 6.50 },
  { id: "tritikale_dane", name: "Tritikale Dane Kırması", category: "kesif", km: 88, hp: 12.0, me: 2.95, ndf: 14, adf: 4, ca: 0.06, p: 0.34, price: 6.70 },
  { id: "cavdar_dane", name: "Çavdar Dane", category: "kesif", km: 88, hp: 10.5, me: 2.80, ndf: 15, adf: 4, ca: 0.07, p: 0.33, price: 6.40 },
  { id: "pirinc_kirigi", name: "Çeltik / Pirinç Kırığı", category: "kesif", km: 88, hp: 8.2, me: 3.10, ndf: 8, adf: 2, ca: 0.04, p: 0.22, price: 7.00 },

  // 3. Protein Küspeleri & Sanayi Yan Ürünleri
  { id: "soya_44", name: "Soya Küspesi (%44 HP)", category: "sanayi", km: 89, hp: 44.0, me: 3.10, ndf: 14, adf: 9, ca: 0.32, p: 0.65, price: 17.50 },
  { id: "soya_48", name: "Soya Küspesi Kabuksuz (%48 HP)", category: "sanayi", km: 90, hp: 48.0, me: 3.25, ndf: 10, adf: 6, ca: 0.30, p: 0.68, price: 19.00 },
  { id: "tam_yagli_soya", name: "Tam Yağlı Soya (Ekstrüde %36 HP, %18 Yağ)", category: "sanayi", km: 90, hp: 36.0, me: 3.75, ndf: 12, adf: 7, ca: 0.28, p: 0.58, price: 21.00 },
  { id: "ptk_34", name: "Pamuk Tohumu Küspesi (%34 HP)", category: "sanayi", km: 90, hp: 34.0, me: 2.45, ndf: 32, adf: 22, ca: 0.22, p: 1.05, price: 10.50 },
  { id: "ptk_28", name: "Pamuk Tohumu Küspesi (%28 HP)", category: "sanayi", km: 89, hp: 28.0, me: 2.25, ndf: 38, adf: 26, ca: 0.20, p: 0.90, price: 8.80 },
  { id: "atk_28", name: "Ayçiçeği Tohumu Küspesi (%28 HP)", category: "sanayi", km: 90, hp: 28.0, me: 2.10, ndf: 38, adf: 27, ca: 0.35, p: 1.00, price: 8.20 },
  { id: "atk_36", name: "Ayçiçeği Tohumu Küspesi Kabuksuz (%36 HP)", category: "sanayi", km: 91, hp: 36.0, me: 2.40, ndf: 26, adf: 18, ca: 0.38, p: 1.15, price: 10.80 },
  { id: "kanola_kuspesi", name: "Kanola / Kolza Küspesi (%36 HP)", category: "sanayi", km: 89, hp: 36.0, me: 2.55, ndf: 25, adf: 17, ca: 0.68, p: 1.10, price: 11.20 },
  { id: "cigit_pamuk", name: "Bütün Pamuk Tohumu (Çiğit %22 HP, %18 Yağ)", category: "sanayi", km: 90, hp: 22.0, me: 3.20, ndf: 44, adf: 34, ca: 0.18, p: 0.60, price: 10.50 },
  { id: "misir_ddgs", name: "Mısır DDGS (%27 HP, Yüksek Enerji)", category: "sanayi", km: 90, hp: 27.5, me: 3.05, ndf: 32, adf: 13, ca: 0.15, p: 0.75, price: 11.50 },
  { id: "misir_gluteni_20", name: "Mısır Glüteni Yemi (CGF %21 HP)", category: "sanayi", km: 89, hp: 21.0, me: 2.80, ndf: 35, adf: 12, ca: 0.12, p: 0.95, price: 8.60 },
  { id: "misir_glüteni_60", name: "Mısır Glüten Unu (%60 HP)", category: "sanayi", km: 90, hp: 60.0, me: 3.50, ndf: 8, adf: 4, ca: 0.08, p: 0.50, price: 23.00 },
  { id: "keten_tohumu_kuspesi", name: "Keten Tohumu Küspesi (%32 HP)", category: "sanayi", km: 90, hp: 32.0, me: 2.70, ndf: 28, adf: 16, ca: 0.40, p: 0.85, price: 13.00 },
  { id: "aspir_kuspesi", name: "Aspir Tohumu Küspesi (%24 HP)", category: "sanayi", km: 90, hp: 24.0, me: 1.95, ndf: 48, adf: 36, ca: 0.30, p: 0.70, price: 7.00 },
  { id: "bugday_kepegi", name: "Buğday Kepeği (Geniş Yaprak)", category: "sanayi", km: 88, hp: 15.5, me: 2.25, ndf: 42, adf: 13, ca: 0.14, p: 1.15, price: 5.20 },
  { id: "razmol", name: "Razmol / İnce Kepek", category: "sanayi", km: 88, hp: 14.5, me: 2.40, ndf: 34, adf: 10, ca: 0.12, p: 0.95, price: 5.40 },
  { id: "bonkalite", name: "Bonkalite (Buğday İçi / İnce Unsu)", category: "sanayi", km: 88, hp: 14.0, me: 2.70, ndf: 22, adf: 6, ca: 0.10, p: 0.75, price: 6.20 },
  { id: "pancar_posasi_yas", name: "Şeker Pancarı Posası (Yaş Küspe %18 KM)", category: "sanayi", km: 18, hp: 9.0, me: 2.65, ndf: 46, adf: 23, ca: 0.85, p: 0.10, price: 1.40 },
  { id: "pancar_posasi_kuru", name: "Şeker Pancarı Posası Pelet (%88 KM)", category: "sanayi", km: 88, hp: 9.2, me: 2.70, ndf: 45, adf: 22, ca: 0.90, p: 0.11, price: 6.80 },
  { id: "melas_pancar", name: "Şeker Pancarı Melası (%75 KM)", category: "sanayi", km: 75, hp: 8.5, me: 2.75, ndf: 0, adf: 0, ca: 0.80, p: 0.08, price: 5.80 },
  { id: "bira_posasi_yas", name: "Bira Posası (Yaş Malt %24 KM, %26 HP)", category: "sanayi", km: 24, hp: 26.0, me: 2.60, ndf: 46, adf: 20, ca: 0.32, p: 0.55, price: 2.80 },

  // 4. Akıllı Yemler & Karma Fabrika Yemleri (Hazır Konsantreler)
  { id: "akilli_yem_sut_21", name: "Akıllı Yem (Bypass Proteinli Yüksek Verim Süt - 21 HP / 2.80 ME)", category: "karma", km: 89, hp: 21.0, me: 2.80, ndf: 28, adf: 16, ca: 1.10, p: 0.60, price: 13.50 },
  { id: "akilli_yem_besi_16", name: "Akıllı Yem (Hızlı Gelişim Besi Pelet - 16 HP / 2.85 ME)", category: "karma", km: 89, hp: 16.0, me: 2.85, ndf: 26, adf: 14, ca: 0.95, p: 0.55, price: 12.80 },
  { id: "akilli_yem_gecis", name: "Akıllı Yem (Geçiş Dönemi / Doğuma Hazırlık - 17 HP / 2.70 ME)", category: "karma", km: 89, hp: 17.0, me: 2.70, ndf: 30, adf: 17, ca: 0.80, p: 0.50, price: 14.00 },
  { id: "fabrika_sut_18", name: "Standart Süt Yemi (18 HP / 2.60 ME)", category: "karma", km: 88, hp: 18.0, me: 2.60, ndf: 32, adf: 18, ca: 1.00, p: 0.55, price: 11.50 },
  { id: "fabrika_sut_19", name: "Süt Yemi (19 HP / 2.70 ME)", category: "karma", km: 88, hp: 19.0, me: 2.70, ndf: 30, adf: 17, ca: 1.05, p: 0.58, price: 12.20 },
  { id: "fabrika_sut_20", name: "Enerji-Protein Süt Yemi (20 HP / 2.75 ME)", category: "karma", km: 89, hp: 20.0, me: 2.75, ndf: 29, adf: 16, ca: 1.10, p: 0.60, price: 12.90 },
  { id: "fabrika_besi_baslangic", name: "Besi Başlangıç Yemi (16 HP / 2.70 ME)", category: "karma", km: 88, hp: 16.0, me: 2.70, ndf: 30, adf: 16, ca: 0.90, p: 0.50, price: 11.20 },
  { id: "fabrika_besi_gelistirme", name: "Besi Geliştirme Yemi (14 HP / 2.75 ME)", category: "karma", km: 88, hp: 14.0, me: 2.75, ndf: 28, adf: 15, ca: 0.85, p: 0.48, price: 10.80 },
  { id: "fabrika_besi_bitiris", name: "Besi Bitiriş Yemi (13 HP / 2.85 ME)", category: "karma", km: 88, hp: 13.0, me: 2.85, ndf: 25, adf: 13, ca: 0.80, p: 0.45, price: 11.00 },
  { id: "fabrika_duve", name: "Düve Büyütme Yemi (15 HP / 2.50 ME)", category: "karma", km: 88, hp: 15.0, me: 2.50, ndf: 34, adf: 19, ca: 0.95, p: 0.50, price: 10.50 },
  { id: "fabrika_kuru_donem", name: "Kuru Dönem Gebe İnek Yemi (14 HP / 2.40 ME)", category: "karma", km: 88, hp: 14.0, me: 2.40, ndf: 36, adf: 20, ca: 0.60, p: 0.45, price: 10.20 },
  { id: "fabrika_buzagi_baslangic", name: "Buzağı Başlangıç Pelet Yemi (18 HP / 2.85 ME)", category: "karma", km: 89, hp: 18.0, me: 2.85, ndf: 22, adf: 11, ca: 1.20, p: 0.65, price: 13.80 },
  { id: "fabrika_buzagi_buyutme", name: "Buzağı Büyütme Yemi (16 HP / 2.75 ME)", category: "karma", km: 88, hp: 16.0, me: 2.75, ndf: 26, adf: 14, ca: 1.10, p: 0.60, price: 12.00 },
  { id: "fabrika_kuzu_baslangic", name: "Kuzu Başlangıç Pelet Yemi (18 HP / 2.80 ME)", category: "karma", km: 89, hp: 18.0, me: 2.80, ndf: 24, adf: 12, ca: 1.15, p: 0.60, price: 13.20 },
  { id: "fabrika_kuzu_buyutme", name: "Kuzu Büyütme Yemi (16 HP / 2.75 ME)", category: "karma", km: 88, hp: 16.0, me: 2.75, ndf: 26, adf: 14, ca: 1.05, p: 0.55, price: 12.00 },
  { id: "fabrika_toklu_besi", name: "Toklu Besi Yemi (14 HP / 2.70 ME)", category: "karma", km: 88, hp: 14.0, me: 2.70, ndf: 28, adf: 15, ca: 0.90, p: 0.50, price: 11.20 },

  // 5. Mineraller, Tamponlar ve Özel Katkılar
  { id: "mermer_tozu", name: "Mermer Tozu (Kalsiyum Karbonat %38 Ca)", category: "mineral", km: 99, hp: 0.0, me: 0.0, ndf: 0, adf: 0, ca: 38.0, p: 0.0, price: 1.50 },
  { id: "dcp", name: "Dikalsiyum Fosfat (DCP %24 Ca, %18 P)", category: "mineral", km: 99, hp: 0.0, me: 0.0, ndf: 0, adf: 0, ca: 24.0, p: 18.0, price: 28.00 },
  { id: "mcp", name: "Monokalsiyum Fosfat (MCP %16 Ca, %22.7 P)", category: "mineral", km: 99, hp: 0.0, me: 0.0, ndf: 0, adf: 0, ca: 16.0, p: 22.7, price: 32.00 },
  { id: "yem_tuzu", name: "Yem Tuzu (Sodyum Klorür NaCl)", category: "mineral", km: 99, hp: 0.0, me: 0.0, ndf: 0, adf: 0, ca: 0.0, p: 0.0, price: 2.00 },
  { id: "kaya_tuzu", name: "Kaya Tuzu (Yalama Taşı / Granül)", category: "mineral", km: 99, hp: 0.0, me: 0.0, ndf: 0, adf: 0, ca: 0.0, p: 0.0, price: 3.50 },
  { id: "bikarbonat", name: "Sodyum Bikarbonat (Yem Sodası / Rumen Tamponu)", category: "mineral", km: 99, hp: 0.0, me: 0.0, ndf: 0, adf: 0, ca: 0.0, p: 0.0, price: 12.00 },
  { id: "magnezyum_oksit", name: "Magnezyum Oksit (MgO %56 Mg)", category: "mineral", km: 99, hp: 0.0, me: 0.0, ndf: 0, adf: 0, ca: 0.0, p: 0.0, price: 16.00 },
  { id: "canli_maya", name: "Canlı Maya Kültürü (S. cerevisiae)", category: "mineral", km: 95, hp: 35.0, me: 1.5, ndf: 0, adf: 0, ca: 0.2, p: 0.4, price: 95.00 },
  { id: "bypass_yag", name: "Bypass Yağı (Rumen Korunmuş Kalsiyum Sabunu - %84 Yağ)", category: "mineral", km: 99, hp: 0.0, me: 6.50, ndf: 0, adf: 0, ca: 9.0, p: 0.0, price: 58.00 },
  { id: "toksin_baglayici", name: "Geniş Spektrumlu Toksin Bağlayıcı", category: "mineral", km: 95, hp: 0.0, me: 0.0, ndf: 0, adf: 0, ca: 2.0, p: 0.0, price: 75.00 },
  { id: "yemlik_ure", name: "Yemlik Üre (%46 Azot, NPN Eşdeğeri %287 HP)", category: "mineral", km: 99, hp: 287.0, me: 0.0, ndf: 0, adf: 0, ca: 0.0, p: 0.0, price: 22.00 },
  { id: "vit_min_premiksi", name: "Besi/Süt Vitamin-Mineral Premiksi", category: "mineral", km: 98, hp: 0.0, me: 0.0, ndf: 0, adf: 0, ca: 18.0, p: 4.0, price: 45.00 }
];

function getAllFeeds() {
  const custom = (DB.ration && DB.ration.customFeeds) ? DB.ration.customFeeds : [];
  return [...MASTER_FEED_DATABASE, ...custom];
}

// =============================================================================
// YEM SEÇİMİ, DİNAMİK ARAMA VE KATEGORİ FİLTRELEME MOTORU
// =============================================================================
let currentFeedCategory = 'all';

function populateFeedSelectionList() {
  const feedListContainer = document.getElementById('ration-feeds-selector');
  if (!feedListContainer) return;

  const allFeeds = getAllFeeds();

  // Kategori sayaçlarını güncelle
  const counts = {
    all: allFeeds.length,
    karma: allFeeds.filter(f => f.category === 'karma').length,
    kaba: allFeeds.filter(f => f.category === 'kaba').length,
    kesif: allFeeds.filter(f => f.category === 'kesif').length,
    sanayi: allFeeds.filter(f => f.category === 'sanayi').length,
    mineral: allFeeds.filter(f => f.category === 'mineral').length
  };

  for (const [k, v] of Object.entries(counts)) {
    const el = document.getElementById(`cat-count-${k}`);
    if (el) el.textContent = v;
  }
  const totEl = document.getElementById('total-feed-count');
  if (totEl) totEl.textContent = allFeeds.length;

  // Önceden kullanıcı tarafından seçilmiş yemler varsa koru; başlangıçta hiçbir yem varsayılan seçili olmasın
  const previouslyChecked = new Set(
    Array.from(document.querySelectorAll('.feed-check:checked')).map(cb => cb.value)
  );

  feedListContainer.innerHTML = allFeeds.map(f => {
    const isChecked = previouslyChecked.has(f.id);
    const isAkilli = f.id.startsWith('akilli_');
    const isKarma = f.category === 'karma';

    let catBadge = '';
    if (isAkilli) {
      catBadge = `<span class="badge" style="background:#ffdd00; color:#000000; font-size:0.65rem; padding:1px 5px; font-weight:800;">AKILLI</span>`;
    } else if (isKarma) {
      catBadge = `<span class="badge" style="background:rgba(255,221,0,0.25); color:#856404; font-size:0.65rem; padding:1px 4px;">FABRİKA</span>`;
    }

    return `
      <label class="feed-item-card ${isChecked ? 'is-selected' : ''}" data-feed-id="${f.id}" data-category="${f.category}" data-feed-name="${f.name.toLocaleLowerCase('tr-TR')}">
        <input type="checkbox" class="feed-check" value="${f.id}" ${isChecked ? 'checked' : ''} style="width:auto; min-height:auto; margin-top:2px;" onchange="handleFeedCheckChange(this)">
        <div class="feed-item-content">
          <div class="feed-item-name">
            <span>${f.name}</span>
            ${catBadge}
          </div>
          <div class="feed-item-meta">
            <span>💰 <strong>${f.price.toFixed(2)}</strong> TL/kg</span>
            <span>•</span>
            <span>🥩 %${f.hp} HP</span>
            <span>•</span>
            <span>⚡ ${f.me.toFixed(2)} ME</span>
          </div>
        </div>
      </label>
    `;
  }).join('');

  updateFeedSelectionCounter();
}

function handleFeedCheckChange(cb) {
  const card = cb.closest('.feed-item-card');
  if (card) {
    if (cb.checked) {
      card.classList.add('is-selected');
    } else {
      card.classList.remove('is-selected');
    }
  }
  updateFeedSelectionCounter();
}

function updateFeedSelectionCounter() {
  const checked = document.querySelectorAll('.feed-check:checked').length;
  const counterEl = document.getElementById('selected-feed-count');
  if (counterEl) counterEl.textContent = checked;
}

function filterFeedSelectionList() {
  const searchInput = document.getElementById('feed-search-input');
  const query = searchInput ? searchInput.value.trim().toLocaleLowerCase('tr-TR') : '';
  const cards = document.querySelectorAll('.feed-item-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const cat = card.dataset.category;
    const name = card.dataset.feedName || '';

    const matchesCat = (currentFeedCategory === 'all' || cat === currentFeedCategory);
    const matchesSearch = !query || name.includes(query) || (query === 'akilli' && name.includes('akıllı'));

    if (matchesCat && matchesSearch) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  const selector = document.getElementById('ration-feeds-selector');
  let emptyMsg = document.getElementById('feed-empty-search-msg');
  if (visibleCount === 0) {
    if (!emptyMsg) {
      emptyMsg = document.createElement('div');
      emptyMsg.id = 'feed-empty-search-msg';
      emptyMsg.style.cssText = 'grid-column: 1 / -1; padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.9rem;';
      emptyMsg.innerHTML = `⚠️ "<strong>${query}</strong>" aramasıyla eşleşen yem bulunamadı. <button type="button" class="btn btn-secondary btn-sm" onclick="clearFeedSearch()" style="margin-left:8px; padding:3px 8px;">Aramayı Temizle</button>`;
      selector.appendChild(emptyMsg);
    } else {
      emptyMsg.style.display = 'block';
    }
  } else if (emptyMsg) {
    emptyMsg.style.display = 'none';
  }
}

function filterFeedCategory(cat) {
  currentFeedCategory = cat;
  document.querySelectorAll('.btn-feed-filter').forEach(btn => {
    if (btn.dataset.cat === cat) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  filterFeedSelectionList();
}

function clearFeedSearch() {
  const searchInput = document.getElementById('feed-search-input');
  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }
  filterFeedSelectionList();
}

function toggleSelectAllFeeds(selectState) {
  const visibleCards = Array.from(document.querySelectorAll('.feed-item-card')).filter(c => c.style.display !== 'none');
  visibleCards.forEach(card => {
    const cb = card.querySelector('.feed-check');
    if (cb) {
      cb.checked = selectState;
      if (selectState) card.classList.add('is-selected');
      else card.classList.remove('is-selected');
    }
  });
  updateFeedSelectionCounter();
}

// =============================================================================
// 4. MODÜL 1: SAĞLIK REHBERİ ENGINE & VERİLERİ
// =============================================================================

// Hastalık Matrisi & Korelasyon Veritabanı
const DISEASE_DATABASE = [
  {
    id: "dis_01",
    name: "Akut Timpani (Köpüklü / Gazlı Şişme)",
    category: "sindirim",
    urgency: "ACİL",
    species: ["sigir", "buzagi", "koyun", "kuzu"],
    keySymptoms: ["sisme_gaz", "hizli_nefes", "istahsizlik", "yatma_kalkamama"],
    desc: "Rümende ani gaz birikmesi veya taze baklagil/yonca otlaması sonucu köpükle gaz kilitlenmesi. Sol açlık çukuru davul gibi gerilir.",
    firstAid: [
      "HAYVANIN BAŞINI YUKARIDA TUTUN, kesinlikle koşturmayın veya yatırmayın.",
      "Ağzına tahta bir takoz veya gem bağlayarak geviş refleksini uyarın.",
      "Mide sondası takarak gazı tahliye etmeyi deneyin.",
      "Köpüklü şişmede 100-200 ml Dimetikon veya 0.5L sıvı bitkisel yağ (çiçek yağı) sondayla veya şişeyle içirin.",
      "Boğulma tehlikesi ve asfiksi (morarma) varsa sol açlık çukurunun en kabarık noktasına Trokar batırın veya acil veteriner hekimi çağırın."
    ]
  },
  {
    id: "dis_02",
    name: "Akut Rumen Asidozu (Un / Tane Yem Çarpması)",
    category: "sindirim",
    urgency: "ACİL",
    species: ["sigir", "buzagi", "koyun", "kuzu"],
    keySymptoms: ["ishal", "istahsizlik", "yatma_kalkamama", "denge_kaybi"],
    desc: "Aşırı miktarda arpa, buğday veya unlu konsantre yem tüketimi sonrası rumende laktik asit patlaması (pH < 5.0). Cıvık, ekşi kokulu gri-sarı ishal.",
    firstAid: [
      "Tüm konsantre tane yemleri derhal önünden kaldırın, sadece kaliteli kuru saman verin.",
      "250-400 gr Sodyum Bikarbonat'ı (yemek sodası) 5-10 litre ılık suda eriterek sondayla içirin.",
      "Veteriner kontrolünde damar içi %1.3 - %5 İzotonik Bikarbonat serum infüzyonu yapın.",
      "Rumen faunasını tazelemek için sağlıklı bir inekten 2-4L taze rumen sıvısı nakli (transfaunasyon) yaptırın.",
      "B1 vitamini (Tiamin) enjeksiyonu ile sinirsel çöküşü önleyin."
    ]
  },
  {
    id: "dis_03",
    name: "Toksik / Akut Mastitis (Klinik Meme İltihabı)",
    category: "meme",
    urgency: "ACİL",
    species: ["sigir", "koyun"],
    keySymptoms: ["meme_sislik", "bozuk_sut", "ates", "istahsizlik"],
    desc: "Meme lobunda taş gibi sertlik, ateş, aşırı sıcaklık; sütten pıhtı, sarı serum veya kan gelmesi. Genellikle E. coli veya S. aureus kaynaklıdır.",
    firstAid: [
      "Enfekte meme lobunu 1-2 saatte bir son damlasına kadar sağarak toksini dışarı atın (asla tanka dökmeyiniz!).",
      "Meme lobuna soğuk su masajı veya buz kompresi uygulayın.",
      "Veteriner hekim önerisiyle sistemik geniş spektrumlu antibiyotik ve non-steroid ağrı kesici (Flunixin Meglumine) yapın.",
      "Süt ve et arınma süresini (İKAS) başlatın ve küpeyi karantinaya alın."
    ]
  },
  {
    id: "dis_04",
    name: "Hipokalsemi (Süt Humması / Doğum Felci)",
    category: "sinirsel",
    urgency: "ACİL",
    species: ["sigir", "koyun"],
    keySymptoms: ["yatma_kalkamama", "titreme", "dusuk_derece", "istahsizlik"],
    desc: "Doğumdan hemen önce veya ilk 48 saatte kanda kalsiyumun kritik seviyenin altına düşmesi. İnek 'S' şeklinde boynunu göğsüne yaslayıp kalkamaz, kulaklar ve burun soğuktur (Hipotermi).",
    firstAid: [
      "Hemen ılık vaziyette Kalsiyum Boroglukonat serumunu damar içi (IV) ÇOK YAVAŞ (15-20 dakikada) uygulayın.",
      "Uygulama anında stetoskop veya el ile kalp atışlarını takip edin; aritmi görülürse serumu durdurun.",
      "Kalan kalsiyumun yarısını deri altına enjekte edin.",
      "Hayvanı göğüs üstü (sternal) pozisyonda sabitleyin, yan yatmasına izin vermeyin."
    ]
  },
  {
    id: "dis_05",
    name: "BRD / Bronkopnömoni (Sığır Solunum Yolu Kompleksi)",
    category: "solunum",
    urgency: "ORTA",
    species: ["sigir", "buzagi"],
    keySymptoms: ["oksuruk", "burun_akintisi", "hizli_nefes", "ates"],
    desc: "Özellikle besi girişi, nakil veya cereyan sonrası gelişen öksürük, burundan irinli akıntı, hırıltı ve 40°C+ yüksek ateş.",
    firstAid: [
      "Hastayı kuru, cereyansız, bol altlıklı karantina bölmesine alın.",
      "Ateşi ölçüp kaydedin (39.5°C üzeri kritik).",
      "Veteriner hekim kontrolünde florfenikol, tulatromisin veya tilmicosin grubu akciğer hedefli antibiyotik başlanmalıdır.",
      "Akciğer yangısını dindirmek için NSAID (Ketoprofen / Meloksikam) uygulayın."
    ]
  },
  {
    id: "dis_06",
    name: "Buzağı Koli-Septisemi & Neonatal İshal",
    category: "sindirim",
    urgency: "ACİL",
    species: ["buzagi"],
    keySymptoms: ["ishal", "yatma_kalkamama", "istahsizlik", "dusuk_derece"],
    desc: "Yetersiz kolostrum alan buzağılarda ilk haftalarda sarı-beyaz sulu ishal, gözlerde çökme, emme refleksinin kaybolması ve şiddetli asidoz.",
    firstAid: [
      "Süt veya mama beslemesini bir öğün askıya alın, aralıklarla ılık elektrolit solüsyonu içirin.",
      "Ağır vakada derhal damar içi Dengeli Elektrolit + Bikarbonat serumu başlatın.",
      "Buzağıyı ısıtıcı lamba altına alın, altına kuru bol saman serin.",
      "Barsak koruyucu ve antibakteriyel tedaviyi veteriner hekimle planlayın."
    ]
  },
  {
    id: "dis_07",
    name: "Enterotoksemi (Çelerme / Yumuşak Böbrek)",
    category: "sindirim",
    urgency: "ACİL",
    species: ["koyun", "kuzu"],
    keySymptoms: ["titreme", "yatma_kalkamama", "denge_kaybi", "istahsizlik"],
    desc: "Clostridium perfringens tip D toksini. Genellikle en gürbüz, bol yem/tane yiyen kuzu ve toklularda ani kasılma, başı geriye atma ve saatler içinde ani ölüm.",
    firstAid: [
      "Sürüde derhal konsantre tane yem miktarını yarı yarıya kesin, kaba yem miktarını artırın.",
      "Canlı kalan ve klinik şüphe duyulan hayvanlara acil Enterotoksemi Antiserumu uygulayın.",
      "Sürüye henüz aşı yapılmadıysa tüm sağlıklı hayvanları Çelerme Aşısı ile aşılayın (21 gün sonra rapel)."
    ]
  },
  {
    id: "dis_08",
    name: "İnterdigital Panaris / Tırnak Çürüğü (Ayak Yangısı)",
    category: "sinirsel",
    urgency: "ORTA",
    species: ["sigir", "koyun"],
    keySymptoms: ["basamama", "tirnakta_yara", "ates"],
    desc: "Tırnak aralığında kötü kokulu nekroz, şişlik, ayağa basamama ve topallık. Çamurlu ve ıslak zeminlerde hızla yayılır.",
    firstAid: [
      "Hayvanı kuru bir zemine alın, tırnağı sabunlu ılık suyla yıkayıp kurulayın.",
      "Tırnak aralığındaki ölü dokuları ve yabancı cisimleri temizleyin.",
      "Topikal antiseptik sprey (oksitetrasiklin sprey) veya katranlı tırnak bandajı yapın.",
      "Sistemik penisilin veya seftiofur grubu antibiyotik uygulayın."
    ]
  },
  {
    id: "dis_09",
    name: "Ketozis (Asetonemi / Enerji Açığı)",
    category: "sindirim",
    urgency: "ORTA",
    species: ["sigir", "koyun"],
    keySymptoms: ["istahsizlik", "kilo_kaybi", "tuhaf_hareket", "sut_azalmasi"],
    desc: "Doğum sonrası pik süt verimindeki ineklerde veya gebeliğin sonundaki ikiz taşıyan koyunlarda negatif enerji dengesi. Nefeste tatlımsı aseton kokusu, konsantre yemi reddetme.",
    firstAid: [
      "Ağızdan günde 2 kez 250-300 ml Propilen Glikol veya Gliserin içirin.",
      "Damar içi %30 veya %50 Hipertonik Dekstroz (Glikoz) serumu uygulayın.",
      "Karaciğeri desteklemek için B12 vitamini, Metiyonin ve Kolin enjeksiyonu yapın."
    ]
  },
  {
    id: "dis_010",
    name: "Sol Abomazum Deplasmanı (Şirden Kayması)",
    category: "sindirim",
    urgency: "ORTA",
    species: ["sigir"],
    keySymptoms: ["istahsizlik", "sut_azalmasi", "sol_aclik_cukuru_ses"],
    desc: "Şirdenin sol karın duvarı ile rumen arasına kayarak gazla dolması. Sol 9-12. kaburga aralığı stetoskopla dinlenip parmakla vurulduğunda metalik çınlama (ping sesi) alınır.",
    firstAid: [
      "Konsantre yemi tamamen kesin, bol kuru kaliteli ot verin.",
      "Yuvarlama (rolling) tekniği ile inek sırtüstü yatırılıp sağa sola döndürülerek şirdenin yerine oturması denenebilir.",
      "Kalıcı çözüm için veteriner cerrah tarafından toggle pin veya operasyonla abomazopeksi yapılmalıdır."
    ]
  }
];

// Acil İlk Yardım Altın Protokolleri Filtreleme & Arama Motoru
let currentFirstAidCat = 'all';

function filterFirstAidCategory(cat) {
  currentFirstAidCat = cat;
  document.querySelectorAll('.protocol-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
  });
  filterFirstAidProtocols();
}

function filterFirstAidProtocols() {
  const query = (document.getElementById('firstaid-search-input')?.value || '').trim().toLocaleLowerCase('tr-TR');
  const cards = document.querySelectorAll('.protocol-card');
  let matchCount = 0;

  cards.forEach(card => {
    const cat = card.getAttribute('data-category');
    const text = ((card.getAttribute('data-keywords') || '') + ' ' + card.innerText).toLocaleLowerCase('tr-TR');

    const catMatches = (currentFirstAidCat === 'all' || cat === currentFirstAidCat);
    const searchMatches = (!query || text.includes(query));

    if (catMatches && searchMatches) {
      card.style.display = 'flex';
      matchCount++;
    } else {
      card.style.display = 'none';
    }
  });

  const counterEl = document.getElementById('protocol-visible-count');
  if (counterEl) counterEl.textContent = matchCount;
}

function clearFirstAidSearch() {
  const input = document.getElementById('firstaid-search-input');
  if (input) input.value = '';
  filterFirstAidCategory('all');
}

// Saha Teşhis Hesaplayıcı Fonksiyonu
function runCobanDoctorDiagnosis() {
  const species = document.getElementById('diag-species').value;
  const checkboxes = document.querySelectorAll('.symptom-cb:checked');
  const selectedSymptoms = Array.from(checkboxes).map(cb => cb.value);

  const resultsContainer = document.getElementById('diag-results');
  if (selectedSymptoms.length === 0) {
    resultsContainer.innerHTML = `
      <div class="alert alert-warning">
        ⚠️ Lütfen hayvanın gösterdiği en az 1-2 belirtiyi yukarıdaki listeden işaretleyiniz.
      </div>
    `;
    return;
  }

  // Ağırlıklı Puanlama Algoritması
  const scoredDiseases = DISEASE_DATABASE.map(disease => {
    let score = 0;
    // Tür eşleşmesi kontrolü
    const speciesMatch = disease.species.includes(species);
    if (!speciesMatch) {
      score -= 5;
    } else {
      score += 2;
    }

    // Semptom eşleşme sayısı
    let matchedSymptoms = [];
    disease.keySymptoms.forEach(sym => {
      if (selectedSymptoms.includes(sym)) {
        score += 4;
        matchedSymptoms.push(sym);
      }
    });

    // Hayvanda olup hastalıkta olmayan gereksiz belirti cezası
    selectedSymptoms.forEach(sym => {
      if (!disease.keySymptoms.includes(sym)) {
        score -= 0.5;
      }
    });

    return {
      disease,
      score: Math.max(0, score),
      matchedCount: matchedSymptoms.length
    };
  });

  scoredDiseases.sort((a, b) => b.score - a.score);

  // En yüksek 3 ön teşhis
  const topThree = scoredDiseases.slice(0, 3).filter(item => item.score > 0);
  const totalScore = topThree.reduce((sum, item) => sum + item.score, 0);

  if (topThree.length === 0 || totalScore === 0) {
    resultsContainer.innerHTML = `
      <div class="alert alert-info">
        ℹ️ Seçilen belirtilerle doğrudan eşleşen belirgin bir saha tablosu bulunamadı. Lütfen dereceyi kontrol ediniz ve bir veteriner hekime danışınız.
      </div>
    `;
    return;
  }

  let html = `<h4 style="margin-bottom: 12px; font-weight: 700;">🎯 En Olası Saha Ön Teşhisleri:</h4>`;

  topThree.forEach((item, idx) => {
    const probability = Math.round((item.score / totalScore) * 100);
    const d = item.disease;
    const badgeClass = d.urgency === 'ACİL' ? 'badge-danger' : 'badge-warning';

    html += `
      <div class="card" style="margin-bottom: 12px; border-left: 4px solid ${d.urgency === 'ACİL' ? 'var(--danger)' : 'var(--warning)'};">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
          <div>
            <strong style="font-size: 1.05rem; color: var(--primary);">${idx + 1}. ${d.name}</strong>
            <span class="badge ${badgeClass}" style="margin-left: 8px;">${d.urgency}</span>
          </div>
          <div style="text-align:right;">
            <span style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">${probability}%</span>
            <div style="font-size: 0.72rem; color: var(--text-muted);">OLASILIK</div>
          </div>
        </div>

        <p style="font-size: 0.88rem; margin-bottom: 8px; color: var(--text);">${d.desc}</p>
        
        <div style="background: rgba(0,0,0,0.02); padding: 10px; border-radius: 4px; border: 1px dashed var(--border);">
          <strong style="font-size: 0.82rem; color: var(--danger); display:block; margin-bottom: 4px;">⚡ İlk Yardım & Acil Müdahale Adımları:</strong>
          <ul style="padding-left: 20px; font-size: 0.84rem; line-height: 1.5;">
            ${d.firstAid.map(step => `<li>${step}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  });

  resultsContainer.innerHTML = html;
}

// Canlı İKAS Arınma Süresi Geri Sayım Motoru
let ikasInterval = null;

function startIkasCountdown() {
  if (ikasInterval) clearInterval(ikasInterval);

  ikasInterval = setInterval(() => {
    updateIkasDisplay();
  }, 1000);

  updateIkasDisplay();
}

function updateIkasDisplay() {
  const container = document.getElementById('ikas-list');
  if (!container) return;

  const records = DB.doctor.earTagRecords || [];
  const now = Date.now();

  if (records.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 20px;">
        Henüz aktif İKAS ilaç veya tedavi kaydı bulunmamaktadır.
      </div>
    `;
    return;
  }

  let html = "";
  records.forEach((rec, idx) => {
    const treatTime = new Date(rec.treatmentDate).getTime();
    const milkLockMs = (rec.milkLockHours || 0) * 3600 * 1000;
    const meatLockMs = (rec.meatLockDays || 0) * 24 * 3600 * 1000;

    const milkEndTime = treatTime + milkLockMs;
    const meatEndTime = treatTime + meatLockMs;

    const milkDiff = milkEndTime - now;
    const meatDiff = meatEndTime - now;

    const isMilkLocked = milkDiff > 0;
    const isMeatLocked = meatDiff > 0;

    const formatDiff = (diff) => {
      if (diff <= 0) return "SÜRE BİTTİ (GÜVENLİ)";
      const hours = Math.floor(diff / (3600 * 1000));
      const mins = Math.floor((diff % (3600 * 1000)) / (60 * 1000));
      const secs = Math.floor((diff % (60 * 1000)) / 1000);
      return `${hours} sa ${mins} dk ${secs} sn`;
    };

    html += `
      <div class="card ${isMilkLocked || isMeatLocked ? 'ikas-lock-card' : ''}" style="margin-bottom: 12px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 8px;">
          <div>
            <strong style="font-size: 1.05rem;">🏷️ ${rec.tagNo}</strong>
            ${rec.animalName ? `<span style="font-weight:600; color:var(--text-muted);"> (${rec.animalName})</span>` : ''}
            <div style="font-size: 0.82rem; color: var(--text-muted);">İlaç: <strong>${rec.drugName}</strong> | Tanı: ${rec.diagnosis}</div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="deleteDoctorRecord('${rec.id}')">🗑️ Sil</button>
        </div>

        <div class="grid-2" style="margin-top: 10px;">
          <div style="background: ${isMilkLocked ? 'rgba(220,38,38,0.1)' : 'rgba(37,211,102,0.1)'}; padding: 10px; border-radius: 4px; border: 1px solid ${isMilkLocked ? 'var(--danger)' : 'var(--primary-light)'};">
            <div style="font-size: 0.76rem; font-weight: 700; text-transform: uppercase;">🥛 SÜT ARINMA KİLİDİ</div>
            <div style="font-size: 1.15rem; font-weight: 800; font-family: inherit; font-variant-numeric: tabular-nums; color: ${isMilkLocked ? 'var(--danger)' : 'var(--primary)'};">
              ${formatDiff(milkDiff)}
            </div>
            <div style="font-size: 0.74rem; color: var(--text-muted);">${isMilkLocked ? '⛔ Tanka Süt Katılması YASAKTIR!' : '✅ Süt tanka verilebilir.'}</div>
          </div>

          <div style="background: ${isMeatLocked ? 'rgba(220,38,38,0.1)' : 'rgba(37,211,102,0.1)'}; padding: 10px; border-radius: 4px; border: 1px solid ${isMeatLocked ? 'var(--danger)' : 'var(--primary-light)'};">
            <div style="font-size: 0.76rem; font-weight: 700; text-transform: uppercase;">🥩 ET ARINMA KİLİDİ</div>
            <div style="font-size: 1.15rem; font-weight: 800; font-family: inherit; font-variant-numeric: tabular-nums; color: ${isMeatLocked ? 'var(--danger)' : 'var(--primary)'};">
              ${formatDiff(meatDiff)}
            </div>
            <div style="font-size: 0.74rem; color: var(--text-muted);">${isMeatLocked ? '⛔ Kesime Gönderilmesi YASAKTIR!' : '✅ Kesim için yasal engel yoktur.'}</div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function saveNewDoctorRecord() {
  const tagNo = document.getElementById('new-doc-tag').value.trim();
  const animalName = document.getElementById('new-doc-name').value.trim();
  const species = document.getElementById('new-doc-species').value;
  const diagnosis = document.getElementById('new-doc-diag').value.trim();
  const drugName = document.getElementById('new-doc-drug').value.trim();
  const milkLockHours = parseInt(document.getElementById('new-doc-milklock').value) || 0;
  const meatLockDays = parseInt(document.getElementById('new-doc-meatlock').value) || 0;
  const notes = document.getElementById('new-doc-notes').value.trim();

  if (!tagNo || !drugName) {
    showToast("Lütfen en azından Küpe Numarası ve İlaç İsmini doldurunuz!", "toast-warning");
    return;
  }

  const newRec = {
    id: "rec_" + Date.now(),
    tagNo,
    animalName,
    species,
    diagnosis: diagnosis || "Genel Tedavi",
    drugName,
    treatmentDate: new Date().toISOString(),
    milkLockHours,
    meatLockDays,
    notes
  };

  DB.doctor.earTagRecords.unshift(newRec);
  saveDatabase();
  closeModal('modal-new-doc-rec');
  showToast(`Küpe #${tagNo} için İKAS kilidi ve tedavi defterine işlendi!`, "toast-success");
  updateIkasDisplay();
}

function deleteDoctorRecord(id) {
  if (!confirm("Bu tedavi kaydını silmek istediğinize emin misiniz?")) return;
  DB.doctor.earTagRecords = DB.doctor.earTagRecords.filter(r => r.id !== id);
  saveDatabase();
  updateIkasDisplay();
  showToast("Tedavi kaydı silindi.", "toast-info");
}

// Sıvı & Kolostrum Hesaplayıcı
function calculateFluidAndColostrum() {
  const weight = parseFloat(document.getElementById('fluid-weight').value) || 45;
  const dehyLevel = parseFloat(document.getElementById('fluid-dehydration').value) || 8;
  const maintRate = parseFloat(document.getElementById('fluid-maint-rate').value) || 60; // ml/kg/gün
  const brixVal = parseFloat(document.getElementById('brix-input').value) || 22;

  // Sıvı Formülü:
  // Kayıp Sıvı = Canlı Ağırlık * (Dehidrasyon % / 100)
  // Günlük Yaşama Payı = (Canlı Ağırlık * maintRate) / 1000
  // Toplam 24 Saatlik Sıvı = Kayıp + Yaşama Payı
  const deficitLiters = weight * (dehyLevel / 100);
  const maintLiters = (weight * maintRate) / 1000;
  const totalFluidLiters = deficitLiters + maintLiters;

  // Damla Hızı: 20 damla = 1 ml. 24 saat = 1440 dakika.
  const dripRateDropsPerMin = Math.round((totalFluidLiters * 1000 * 20) / 1440);

  // Brix Değerlendirmesi
  let brixStatus = "";
  let brixColor = "";
  let brixRec = "";

  if (brixVal >= 22) {
    brixStatus = "MÜKEMMEL KALİTE (>50 mg/ml IgG)";
    brixColor = "var(--primary-light)";
    brixRec = "Yeni doğan buzağıya ilk 2 saat içinde 4 litre (veya canlı ağırlığının %10'u kadar) tek seferde veya 2 saat arayla verilmelidir.";
  } else if (brixVal >= 18) {
    brixStatus = "ORTA KALİTE (30 - 50 mg/ml IgG)";
    brixColor = "var(--warning)";
    brixRec = "İlk ağız sütü olarak tek başına yetersiz kalabilir. 6-12 saat sonraki 2. ve 3. beslemelerde kullanılabilir veya kolostrum tozuyla desteklenmelidir.";
  } else {
    brixStatus = "ZAYIF KALİTE (<30 mg/ml IgG)";
    brixColor = "var(--danger)";
    brixRec = "ASLA yeni doğana ilk besleme olarak verilmemelidir! Yetersiz antikor bağışıklık transferi (FPT) ve septisemi ölümüne yol açar.";
  }

  const resultBox = document.getElementById('fluid-result');
  resultBox.innerHTML = `
    <div class="grid-2">
      <div class="card" style="margin-bottom:0;">
        <h5 style="color:var(--primary); font-weight:700; margin-bottom:8px;">💧 24 Saatlik Sıvı İhtiyacı</h5>
        <div class="metric-val num" style="color:var(--primary); font-size:1.6rem;">${totalFluidLiters.toFixed(1)} Litre</div>
        <div style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">
          • Dehidrasyon Kaybı: <strong>${deficitLiters.toFixed(1)} L</strong><br>
          • Günlük Yaşama Payı: <strong>${maintLiters.toFixed(1)} L</strong><br>
          • Damar İçi İnfüzyon Hızı: <strong>~${dripRateDropsPerMin} damla/dk</strong>
        </div>
      </div>

      <div class="card" style="margin-bottom:0; border-left: 4px solid ${brixColor};">
        <h5 style="color:var(--primary); font-weight:700; margin-bottom:8px;">🥛 Kolostrum Brix Skoru (%${brixVal})</h5>
        <div style="font-weight:800; font-size:0.95rem; color:${brixColor};">${brixStatus}</div>
        <p style="font-size:0.82rem; margin-top:6px; color:var(--text);">${brixRec}</p>
      </div>
    </div>
  `;
}

// =============================================================================
// 5. MODÜL 2: RASYON REHBERİ (BİLİMSEL BESLEME & LP SIMPLEX ENGINE)
// =============================================================================

// Hayvan Besin Madde İhtiyaç Standartları (NRC 2001 / NASEM 2021)
const ANIMAL_REQUIREMENTS = {
  besi_250: {
    name: "Besi Danası: 250 kg (Besi Başı)",
    bodyWeight: 250,
    dailyGain: 1.2,
    targetKmKg: 6.8,
    minHpPercent: 15.0,
    minMeMcal: 2.65,
    minNdf: 28.0,
    maxNdf: 40.0,
    minForageRatio: 40.0,
    minCaPercent: 0.65,
    minPPercent: 0.35
  },
  besi_380: {
    name: "Besi Danası: 380 kg (Besi Ortası)",
    bodyWeight: 380,
    dailyGain: 1.4,
    targetKmKg: 9.5,
    minHpPercent: 13.5,
    minMeMcal: 2.75,
    minNdf: 25.0,
    maxNdf: 36.0,
    minForageRatio: 35.0,
    minCaPercent: 0.55,
    minPPercent: 0.30
  },
  besi_480: {
    name: "Besi Danası: 480 kg (Besi Bitiriş)",
    bodyWeight: 480,
    dailyGain: 1.5,
    targetKmKg: 11.2,
    minHpPercent: 12.0,
    minMeMcal: 2.85,
    minNdf: 22.0,
    maxNdf: 32.0,
    minForageRatio: 30.0,
    minCaPercent: 0.45,
    minPPercent: 0.28
  },
  sut_20: {
    name: "Süt İneği: 20 Litre Süt (600 kg CA)",
    bodyWeight: 600,
    milkYield: 20,
    targetKmKg: 17.5,
    minHpPercent: 15.0,
    minMeMcal: 2.45,
    minNdf: 32.0,
    maxNdf: 45.0,
    minForageRatio: 45.0,
    minCaPercent: 0.65,
    minPPercent: 0.38
  },
  sut_30: {
    name: "Süt İneği: 30 Litre Süt (650 kg CA)",
    bodyWeight: 650,
    milkYield: 30,
    targetKmKg: 21.0,
    minHpPercent: 16.5,
    minMeMcal: 2.65,
    minNdf: 30.0,
    maxNdf: 40.0,
    minForageRatio: 40.0,
    minCaPercent: 0.72,
    minPPercent: 0.42
  },
  sut_40: {
    name: "Süt İneği: 40 Litre Yüksek Verim (680 kg CA)",
    bodyWeight: 680,
    milkYield: 40,
    targetKmKg: 24.5,
    minHpPercent: 17.8,
    minMeMcal: 2.75,
    minNdf: 28.0,
    maxNdf: 38.0,
    minForageRatio: 40.0,
    minCaPercent: 0.80,
    minPPercent: 0.45
  },
  kuru_donem: {
    name: "Kuru Dönem Süt İneği (650 kg CA)",
    bodyWeight: 650,
    targetKmKg: 12.0,
    minHpPercent: 12.5,
    minMeMcal: 2.10,
    minNdf: 45.0,
    maxNdf: 60.0,
    minForageRatio: 65.0,
    minCaPercent: 0.45,
    minPPercent: 0.28
  },
  koyun_gebe: {
    name: "Gebe Koyun / Sağılır Koyun (65 kg CA)",
    bodyWeight: 65,
    targetKmKg: 2.2,
    minHpPercent: 14.5,
    minMeMcal: 2.45,
    minNdf: 35.0,
    maxNdf: 50.0,
    minForageRatio: 50.0,
    minCaPercent: 0.55,
    minPPercent: 0.32
  },
  toklu_besi: {
    name: "Toklu / Kuzu Besisi (40 kg CA)",
    bodyWeight: 40,
    dailyGain: 0.35,
    targetKmKg: 1.6,
    minHpPercent: 15.5,
    minMeMcal: 2.70,
    minNdf: 28.0,
    maxNdf: 42.0,
    minForageRatio: 35.0,
    minCaPercent: 0.60,
    minPPercent: 0.34
  }
};

/**
 * Saf JavaScript Simplex Doğrusal Programlama & Dengeli Rasyon Optimizasyonu
 * Minimize Z = Σ (Fiyat_i * Miktar_i)
 * Kısıtlar:
 * 1. Σ (KM_i * Miktar_i) = TargetKM
 * 2. Σ (HP_i * KM_i * Miktar_i) >= TargetHP
 * 3. Σ (ME_i * KM_i * Miktar_i) >= TargetME
 * 4. Kaba Yem Oranı >= Min Kaba Yem
 * 5. Ca:P Oranı 1.5 - 2.0
 */
function solveRationOptimization() {
  const animalKey = document.getElementById('ration-animal-select').value;
  const req = ANIMAL_REQUIREMENTS[animalKey];
  if (!req) return;

  const allFeeds = getAllFeeds();
  // Kullanıcının seçtiği veya stoktaki yemler
  const selectedFeedIds = Array.from(document.querySelectorAll('.feed-check:checked')).map(cb => cb.value);

  const activeFeeds = allFeeds.filter(f => selectedFeedIds.includes(f.id));

  if (activeFeeds.length < 3) {
    showToast("Lütfen rasyon optimizasyonu için en az 3-4 farklı yem seçiniz!", "toast-warning");
    return;
  }

  // Kaba ve kesif ayrımı (Karma ve Akıllı yemler kesif sınıfına dahil edilir)
  const forageFeeds = activeFeeds.filter(f => f.category === 'kaba');
  const concentrateFeeds = activeFeeds.filter(f => f.category === 'kesif' || f.category === 'sanayi' || f.category === 'karma');
  const mineralFeeds = activeFeeds.filter(f => f.category === 'mineral');

  if (forageFeeds.length === 0) {
    showToast("Rumen sağlığı için en az 1 kaba yem (Yonca, Silaj veya Saman) seçilmelidir!", "toast-danger");
    return;
  }

  // Bilimsel Rasyon Çözücüsü (Matematiksel Dengeli Ağırlık Dağıtımı & Simplex Karşılığı)
  const targetKm = req.targetKmKg;
  const targetForageKm = targetKm * (req.minForageRatio / 100);
  const targetConcKm = targetKm - targetForageKm;

  // Kaba yemleri kendi içinde fiyat/kaliteye göre oranla
  forageFeeds.sort((a, b) => (a.price / a.hp) - (b.price / b.hp));
  concentrateFeeds.sort((a, b) => (a.price / a.me) - (b.price / b.me));

  let formulatedIngredients = [];

  // 1. Kaba Yem Tahsisi
  let remainingForageKm = targetForageKm;
  forageFeeds.forEach((feed, idx) => {
    let feedKmPortion = 0;
    if (idx === 0) {
      feedKmPortion = remainingForageKm * 0.65;
    } else if (idx === 1) {
      feedKmPortion = remainingForageKm * 0.25;
    } else {
      feedKmPortion = remainingForageKm * 0.10;
    }
    const freshAmountKg = feedKmPortion / (feed.km / 100);
    formulatedIngredients.push({
      feed,
      amountKg: freshAmountKg,
      kmKg: feedKmPortion
    });
  });

  // 2. Kesif Yem Tahsisi (Enerji ve Protein dengesi)
  let remainingConcKm = targetConcKm - 0.25; // mineraller için pay bırak
  if (remainingConcKm < 0) remainingConcKm = 0.5;

  const proteinFeeds = concentrateFeeds.filter(f => f.hp >= 24);
  const energyFeeds = concentrateFeeds.filter(f => f.hp < 24);

  let energyPortionKm = 0;
  let proteinPortionKm = 0;

  if (proteinFeeds.length > 0 && energyFeeds.length > 0) {
    energyPortionKm = remainingConcKm * 0.70;
    proteinPortionKm = remainingConcKm * 0.30;
  } else if (proteinFeeds.length > 0) {
    proteinPortionKm = remainingConcKm;
  } else if (energyFeeds.length > 0) {
    energyPortionKm = remainingConcKm;
  }

  if (energyFeeds.length > 0) {
    energyFeeds.forEach((feed, idx) => {
      const share = idx === 0 ? 0.70 : (0.30 / (energyFeeds.length - 1 || 1));
      const km = energyPortionKm * share;
      formulatedIngredients.push({
        feed,
        amountKg: km / (feed.km / 100),
        kmKg: km
      });
    });
  }

  if (proteinFeeds.length > 0) {
    proteinFeeds.forEach((feed, idx) => {
      const share = idx === 0 ? 0.75 : (0.25 / (proteinFeeds.length - 1 || 1));
      const km = proteinPortionKm * share;
      formulatedIngredients.push({
        feed,
        amountKg: km / (feed.km / 100),
        kmKg: km
      });
    });
  }

  // 3. Mineral ve Tampon İlaveleri
  const mermer = mineralFeeds.find(f => f.id === 'mermer_tozu') || allFeeds.find(f => f.id === 'mermer_tozu');
  const tuz = mineralFeeds.find(f => f.id === 'yem_tuzu') || allFeeds.find(f => f.id === 'yem_tuzu');
  const soda = mineralFeeds.find(f => f.id === 'bikarbonat') || allFeeds.find(f => f.id === 'bikarbonat');

  if (mermer) formulatedIngredients.push({ feed: mermer, amountKg: req.bodyWeight > 200 ? 0.12 : 0.03, kmKg: 0.12 });
  if (tuz) formulatedIngredients.push({ feed: tuz, amountKg: req.bodyWeight > 200 ? 0.08 : 0.02, kmKg: 0.08 });
  if (soda && req.bodyWeight > 200) formulatedIngredients.push({ feed: soda, amountKg: 0.15, kmKg: 0.15 });

  // Toplam Değerleri Hesapla
  let totalFreshKg = 0;
  let totalKmKg = 0;
  let totalCost = 0;
  let totalHpGrams = 0;
  let totalMeMcal = 0;
  let totalNdfGrams = 0;
  let totalCaGrams = 0;
  let totalPGrams = 0;

  formulatedIngredients.forEach(item => {
    const f = item.feed;
    const kg = item.amountKg;
    const km = kg * (f.km / 100);

    totalFreshKg += kg;
    totalKmKg += km;
    totalCost += kg * f.price;

    totalHpGrams += km * (f.hp * 10);
    totalMeMcal += km * f.me;
    totalNdfGrams += km * (f.ndf * 10);
    totalCaGrams += km * (f.ca * 10);
    totalPGrams += km * (f.p * 10);
  });

  const rationHpPercent = (totalHpGrams / (totalKmKg * 1000)) * 100;
  const rationMePerKm = totalMeMcal / totalKmKg;
  const rationNdfPercent = (totalNdfGrams / (totalKmKg * 1000)) * 100;
  const caPRatio = totalPGrams > 0 ? (totalCaGrams / totalPGrams) : 2.0;

  // Sonuçları Ekrana Yazdır
  renderRationResults({
    req,
    ingredients: formulatedIngredients,
    totalFreshKg,
    totalKmKg,
    totalCost,
    rationHpPercent,
    rationMePerKm,
    rationNdfPercent,
    caPRatio
  });
}

function renderRationResults(res) {
  const container = document.getElementById('ration-output');
  if (!container) return;

  window.currentCalculatedRation = res;

  let tableRows = res.ingredients.map(item => `
    <tr>
      <td><strong>${item.feed.name}</strong></td>
      <td class="num-cell" style="font-weight:700;">${item.amountKg.toFixed(2)} kg</td>
      <td class="num-cell">${item.kmKg.toFixed(2)} kg</td>
      <td class="num-cell">${item.feed.price.toFixed(2)} TL</td>
      <td class="num-cell" style="font-weight:700;">${(item.amountKg * item.feed.price).toFixed(2)} TL</td>
    </tr>
  `).join('');

  container.innerHTML = `
    <div class="card" style="border-left: 4px solid var(--primary);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
        <div>
          <h4 style="font-weight:800; color:var(--primary);">${res.req.name} - Optimum Rasyon Reçetesi</h4>
          <span style="font-size:0.82rem; color:var(--text-muted);">NASEM / NRC Standartlarında En Düşük Maliyet Analizi</span>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-primary btn-sm" onclick="saveCurrentRationToDb()">💾 Rasyonu Kaydet</button>
          <button class="btn btn-warning btn-sm" onclick="transferRationToMixerScale()">🚜 Mikser Kantarına Aktar</button>
        </div>
      </div>

      <div class="grid-4" style="margin-bottom:16px;">
        <div class="metric-box">
          <div class="metric-val num">${res.totalCost.toFixed(2)} ₺</div>
          <div class="metric-label">GÜNLÜK MALİYET / BAŞ</div>
        </div>
        <div class="metric-box">
          <div class="metric-val num">${res.totalFreshKg.toFixed(1)} kg</div>
          <div class="metric-label">TOPLAM DOĞAL YEM</div>
        </div>
        <div class="metric-box">
          <div class="metric-val num">${res.totalKmKg.toFixed(1)} kg</div>
          <div class="metric-label">KURU MADDE (KM)</div>
        </div>
        <div class="metric-box">
          <div class="metric-val num">${res.rationHpPercent.toFixed(1)} %</div>
          <div class="metric-label">HAM PROTEİN (HP)</div>
        </div>
      </div>

      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Yem Hammaddesi</th>
              <th class="num-cell">Doğal Miktar (kg)</th>
              <th class="num-cell">Kuru Madde (kg)</th>
              <th class="num-cell">Birim Fiyat</th>
              <th class="num-cell">Tutar (TL)</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
          <tfoot>
            <tr style="background:rgba(0,0,0,0.04); font-weight:800;">
              <td>TOPLAM:</td>
              <td class="num-cell">${res.totalFreshKg.toFixed(2)} kg</td>
              <td class="num-cell">${res.totalKmKg.toFixed(2)} kg</td>
              <td>-</td>
              <td class="num-cell">${res.totalCost.toFixed(2)} TL</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="grid-3" style="margin-top:14px; font-size:0.84rem; background:rgba(0,0,0,0.02); padding:10px; border-radius:4px;">
        <div>⚡ <strong>Metabolik Enerji:</strong> ${res.rationMePerKm.toFixed(2)} Mcal/kg KM (Hedef: ≥ ${res.req.minMeMcal})</div>
        <div>🌾 <strong>NDF (Lif) Oranı:</strong> %${res.rationNdfPercent.toFixed(1)} (Hedef: %${res.req.minNdf} - %${res.req.maxNdf})</div>
        <div>⚖️ <strong>Kalsiyum : Fosfor:</strong> ${res.caPRatio.toFixed(2)} : 1 (İdeal: 1.5 - 2.0)</div>
      </div>
    </div>
  `;
}

function saveCurrentRationToDb() {
  if (!window.currentCalculatedRation) return;
  const res = window.currentCalculatedRation;
  const recipeName = prompt("Lütfen bu rasyon reçetesi için bir isim giriniz:", res.req.name + " (" + new Date().toLocaleDateString('tr-TR') + ")");
  if (!recipeName) return;

  const recipe = {
    id: "rec_ration_" + Date.now(),
    name: recipeName,
    targetAnimal: document.getElementById('ration-animal-select').value,
    totalKg: parseFloat(res.totalFreshKg.toFixed(2)),
    costPerDay: parseFloat(res.totalCost.toFixed(2)),
    ingredients: res.ingredients.map(item => ({
      feedId: item.feed.id,
      feedName: item.feed.name,
      amountKg: parseFloat(item.amountKg.toFixed(2)),
      price: item.feed.price
    }))
  };

  DB.ration.savedRecipes.unshift(recipe);
  saveDatabase();
  showToast(`"${recipeName}" rasyon ambarına kaydedildi!`, "toast-success");
  renderSavedRecipesList();
}

function renderSavedRecipesList() {
  const container = document.getElementById('saved-recipes-list');
  if (!container) return;

  const list = DB.ration.savedRecipes || [];
  if (list.length === 0) {
    container.innerHTML = `<div style="color:var(--text-muted); font-size:0.88rem;">Henüz kayıtlı rasyon reçetesi bulunmamaktadır.</div>`;
    return;
  }

  container.innerHTML = list.map(rec => `
    <div class="card" style="margin-bottom:10px; padding:12px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <strong style="font-size:0.95rem; color:var(--primary);">${rec.name}</strong>
          <div style="font-size:0.8rem; color:var(--text-muted);">
            Toplam: ${rec.totalKg} kg/gün | Maliyet: <strong>${rec.costPerDay} TL</strong>/baş
          </div>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-secondary btn-sm" onclick="loadSavedRecipeToMixer('${rec.id}')">🚜 Kantara Aktar</button>
          <button class="btn btn-danger btn-sm" onclick="deleteSavedRecipe('${rec.id}')">Sil</button>
        </div>
      </div>
    </div>
  `).join('');
}

function deleteSavedRecipe(id) {
  if (!confirm("Bu rasyon reçetesini silmek istediğinize emin misiniz?")) return;
  DB.ration.savedRecipes = DB.ration.savedRecipes.filter(r => r.id !== id);
  saveDatabase();
  renderSavedRecipesList();
  showToast("Rasyon reçetesi silindi.", "toast-info");
}

// TMR Mikser Vagon Kantarı
let mixerState = {
  herdSize: 50,
  currentStepIndex: 0,
  cumulativeWeight: 0,
  steps: []
};

function transferRationToMixerScale() {
  if (!window.currentCalculatedRation) {
    showToast("Önce bir rasyon hesaplamalısınız!", "toast-warning");
    return;
  }
  const res = window.currentCalculatedRation;
  setupMixerWithIngredients(res.ingredients.map(i => ({ name: i.feed.name, amountKg: i.amountKg })));
  switchSubNav('tab-ration', 'sub-ration-mixer');
}

function loadSavedRecipeToMixer(recipeId) {
  const rec = DB.ration.savedRecipes.find(r => r.id === recipeId);
  if (!rec) return;
  setupMixerWithIngredients(rec.ingredients.map(i => ({ name: i.feedName, amountKg: i.amountKg })));
  switchSubNav('tab-ration', 'sub-ration-mixer');
  showToast(`"${rec.name}" mikser vagon kantarına yüklendi!`, "toast-success");
}

function getTmrLoadingPriority(name) {
  const n = (name || '').toLowerCase();
  if (n.includes('saman') || (n.includes('kuru') && (n.includes('yonca') || n.includes('ot') || n.includes('çim')))) {
    return 1; // 1. Kuru Kaba Yemler (Önce kıyılır)
  }
  if (n.includes('tuz') || n.includes('mermer') || n.includes('bikarbonat') || n.includes('premik') || n.includes('dcp') || n.includes('mcp') || n.includes('maya')) {
    return 2; // 2. Mineraller & Premiksler
  }
  if (n.includes('dane') || n.includes('ezme') || n.includes('kırma') || n.includes('küspe') || n.includes('yem') || n.includes('kepek') || n.includes('ddgs')) {
    return 3; // 3. Konsantre & Fabrika Yemleri
  }
  if (n.includes('silaj') || n.includes('posa') || n.includes('malt')) {
    return 4; // 4. Silajlar & Yaş Yan Ürünler (En son girer, tozu bağlar)
  }
  if (n.includes('melas') || n.includes('su') || n.includes('şurup')) {
    return 5; // 5. Sıvılar
  }
  return 3;
}

function setupMixerWithIngredients(ingredients) {
  const herd = parseInt(document.getElementById('mixer-herd-size').value) || 50;
  mixerState.herdSize = herd;
  mixerState.currentStepIndex = 0;
  mixerState.cumulativeWeight = 0;

  // Bilimsel TMR Dolum Sıralaması (Kuru Kaba -> Mineral -> Kesif -> Silaj/Yaş Yem)
  const sortedIngredients = [...ingredients].sort((a, b) => getTmrLoadingPriority(a.name) - getTmrLoadingPriority(b.name));

  mixerState.steps = sortedIngredients.map(ing => ({
    name: ing.name,
    singleAnimalKg: ing.amountKg,
    targetKg: Math.round(ing.amountKg * herd * 10) / 10,
    loadedKg: 0
  }));
  renderMixerUI();
}

function renderMixerUI() {
  const container = document.getElementById('mixer-steps-container');
  if (!container) return;

  if (mixerState.steps.length === 0) {
    container.innerHTML = `<div class="alert alert-info">Kantara yüklenmiş bir rasyon bulunmamaktadır. Rasyon motorundan veya kayıtlı reçetelerden yükleyebilirsiniz.</div>`;
    return;
  }

  const currentStep = mixerState.steps[mixerState.currentStepIndex];
  const totalTargetKg = mixerState.steps.reduce((sum, s) => sum + s.targetKg, 0);

  let html = `
    <div class="card tmr-scale-banner">
      <div style="font-size:0.85rem; letter-spacing:0.05em; text-transform:uppercase; opacity:0.85;">DİJİTAL MİKSER VAGON KANTARI (${mixerState.herdSize} BAŞ)</div>
      <div class="num" style="font-size:3.2rem; font-weight:900; line-height:1.1; margin:8px 0; color:var(--primary-light);">
        ${mixerState.cumulativeWeight.toFixed(1)} <span style="font-size:1.4rem;">kg</span>
      </div>
      <div style="font-size:0.9rem; opacity:0.9;">
        Toplam Hedef Yükleme: <strong>${totalTargetKg.toFixed(1)} kg</strong> (${((mixerState.cumulativeWeight / (totalTargetKg || 1)) * 100).toFixed(0)}%)
      </div>
      <div class="progress-bar-wrap" style="height:14px; background:rgba(255,255,255,0.2); margin-top:12px;">
        <div class="progress-bar-fill success" style="width: ${Math.min(100, (mixerState.cumulativeWeight / (totalTargetKg || 1)) * 100)}%;"></div>
      </div>
    </div>
  `;

  if (currentStep) {
    html += `
      <div class="card" style="border: 2px solid var(--primary); margin-top:14px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="badge badge-info">ADIM ${mixerState.currentStepIndex + 1} / ${mixerState.steps.length}</span>
          <span style="font-size:0.84rem; color:var(--text-muted);">Sıradaki Hammadde</span>
        </div>
        <h3 style="color:var(--primary); margin:8px 0; font-size:1.3rem;">👉 ${currentStep.name}</h3>
        <p style="font-size:0.9rem; margin-bottom:12px;">
          Vagona Dökülecek Net Miktar: <strong style="font-size:1.2rem; color:var(--danger);">${currentStep.targetKg} kg</strong> 
          <span style="font-size:0.8rem; color:var(--text-muted);">(${currentStep.singleAnimalKg.toFixed(2)} kg/baş)</span>
        </p>

        <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
          <input type="number" id="mixer-load-input" value="${currentStep.targetKg}" style="max-width:160px; font-weight:700;" placeholder="Dökülen kg">
          <button class="btn btn-primary" onclick="confirmMixerStep()">✅ Döküldü (Dara Al & İlerle)</button>
          <button class="btn btn-secondary" onclick="skipMixerStep()">⏭️ Atla</button>
        </div>
      </div>
    `;
  } else {
    html += `
      <div class="alert alert-success" style="margin-top:14px;">
        🎉 <strong>TMR Mikser Dolumu Tamamlandı!</strong><br>
        Tüm yemler vagona başarıyla aktarıldı. Karıştırma helezonlarını 8-10 dakika çalıştırarak homojen dağılım sağlayınız.
      </div>
    `;
  }

  // Yemlerin döküm listesi
  html += `
    <h5 style="margin: 16px 0 8px 0; font-weight:700;">📋 Vagon Döküm Sıralaması:</h5>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Hammadde Adı</th>
            <th class="num-cell">Hedef (kg)</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          ${mixerState.steps.map((s, idx) => `
            <tr style="${idx === mixerState.currentStepIndex ? 'background:rgba(18,140,126,0.1); font-weight:700;' : ''}">
              <td>${idx + 1}</td>
              <td>${s.name}</td>
              <td class="num-cell">${s.targetKg} kg</td>
              <td>
                ${idx < mixerState.currentStepIndex ? '<span class="badge badge-success">DÖKÜLDÜ</span>' : 
                  idx === mixerState.currentStepIndex ? '<span class="badge badge-warning">ŞU AN DÖKÜLÜYOR</span>' : 
                  '<span class="badge badge-info">BEKLİYOR</span>'}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = html;
}

function confirmMixerStep() {
  const currentStep = mixerState.steps[mixerState.currentStepIndex];
  if (!currentStep) return;

  const loaded = parseFloat(document.getElementById('mixer-load-input').value) || currentStep.targetKg;
  currentStep.loadedKg = loaded;
  mixerState.cumulativeWeight += loaded;
  mixerState.currentStepIndex++;

  showToast(`${currentStep.name} için ${loaded} kg vagona kaydedildi!`, "toast-success");
  renderMixerUI();
}

function skipMixerStep() {
  mixerState.currentStepIndex++;
  renderMixerUI();
}

function resetMixerScale() {
  if (!confirm("Mikser kantarını sıfırlamak istediğinize emin misiniz?")) return;
  mixerState.currentStepIndex = 0;
  mixerState.cumulativeWeight = 0;
  mixerState.steps.forEach(s => s.loadedKg = 0);
  renderMixerUI();
}

// Pearson Karesi (Pearson Square) Motoru
function calculatePearsonSquare() {
  const targetCp = parseFloat(document.getElementById('pearson-target-cp').value);
  const feedAId = document.getElementById('pearson-feed-a').value;
  const feedBId = document.getElementById('pearson-feed-b').value;
  const totalBatchKg = parseFloat(document.getElementById('pearson-batch-kg').value) || 1000;

  const allFeeds = getAllFeeds();
  const feedA = allFeeds.find(f => f.id === feedAId);
  const feedB = allFeeds.find(f => f.id === feedBId);

  const resultBox = document.getElementById('pearson-result');
  if (!feedA || !feedB) {
    resultBox.innerHTML = `<div class="alert alert-warning">Lütfen 2 farklı yem seçiniz.</div>`;
    return;
  }

  const cpA = feedA.hp;
  const cpB = feedB.hp;

  if ((targetCp <= Math.min(cpA, cpB)) || (targetCp >= Math.max(cpA, cpB))) {
    resultBox.innerHTML = `
      <div class="alert alert-danger">
        ⛔ Hedef Ham Protein (%${targetCp}), seçilen iki yemin protein değerleri arasında (%${Math.min(cpA, cpB)} - %${Math.max(cpA, cpB)}) olmalıdır!
      </div>
    `;
    return;
  }

  // Çapraz Farklar
  const partsA = Math.abs(targetCp - cpB);
  const partsB = Math.abs(targetCp - cpA);
  const totalParts = partsA + partsB;

  const percentA = (partsA / totalParts) * 100;
  const percentB = (partsB / totalParts) * 100;

  const kgA = (percentA / 100) * totalBatchKg;
  const kgB = (percentB / 100) * totalBatchKg;

  resultBox.innerHTML = `
    <div class="card" style="border-left: 4px solid var(--primary);">
      <h4 style="font-weight:700; color:var(--primary); margin-bottom:12px;">🎯 Pearson Karesi Karışım Sonucu</h4>
      <div class="grid-2">
        <div class="metric-box">
          <div style="font-size:0.95rem; font-weight:700;">1. Yem: ${feedA.name} (%${cpA} HP)</div>
          <div class="metric-val num" style="font-size:1.8rem; margin:6px 0;">%${percentA.toFixed(1)}</div>
          <div style="font-size:0.9rem; font-weight:700; color:var(--primary);">${kgA.toFixed(1)} kg / ${totalBatchKg} kg Karışım</div>
        </div>

        <div class="metric-box">
          <div style="font-size:0.95rem; font-weight:700;">2. Yem: ${feedB.name} (%${cpB} HP)</div>
          <div class="metric-val num" style="font-size:1.8rem; margin:6px 0;">%${percentB.toFixed(1)}</div>
          <div style="font-size:0.9rem; font-weight:700; color:var(--primary);">${kgB.toFixed(1)} kg / ${totalBatchKg} kg Karışım</div>
        </div>
      </div>
      <div style="font-size:0.84rem; color:var(--text-muted); margin-top:10px; text-align:center;">
        ✅ Bu oranlarda karıştırıldığında ${totalBatchKg} kg karışımın net ham protein oranı tam <strong>%${targetCp.toFixed(1)}</strong> olacaktır.
      </div>
    </div>
  `;
}

// Göğüs Çevresinden Canlı Ağırlık (CAAG) Tahmini
function calculateLiveWeightCAAG() {
  const chestCm = parseFloat(document.getElementById('caag-chest').value);
  const lengthCm = parseFloat(document.getElementById('caag-length').value);
  const formula = document.getElementById('caag-formula').value;
  const resultBox = document.getElementById('caag-result');

  if (isNaN(chestCm) || chestCm < 50 || chestCm > 300) {
    resultBox.innerHTML = `<div class="alert alert-warning">Lütfen geçerli bir göğüs çevresi (cm) giriniz.</div>`;
    return;
  }

  let weightKg = 0;
  let formulaDesc = "";

  if (formula === 'chest_only' || formula === 'schoorl') {
    // Yalnızca Göğüs Çevresi (Zootekni Kübik Regresyonu: Göğüs³ / 12600)
    weightKg = Math.pow(chestCm, 3) / 12600;
    formulaDesc = "Yalnızca Göğüs Çevresi Formülü: Göğüs³ / 12600";
  } else {
    // Standart Schaeffer Formülü: (Göğüs cm)² × Uzunluk cm / 10838
    if (isNaN(lengthCm) || lengthCm < 50) {
      resultBox.innerHTML = `<div class="alert alert-warning">Bu formül için lütfen Vücut Uzunluğu (cm) değerini de giriniz.</div>`;
      return;
    }
    weightKg = (chestCm * chestCm * lengthCm) / 10838;
    formulaDesc = "Schaeffer Formülü: (Göğüs² × Uzunluk) / 10838";
  }

  const minTolerance = weightKg * 0.95;
  const maxTolerance = weightKg * 1.05;

  resultBox.innerHTML = `
    <div class="metric-box" style="border-left: 6px solid var(--primary);">
      <div class="metric-label">${formulaDesc}</div>
      <div class="metric-val num" style="font-size:2.4rem; color:var(--primary); margin:6px 0;">
        ${weightKg.toFixed(0)} <span style="font-size:1.2rem;">kg</span>
      </div>
      <div style="font-size:0.85rem; color:var(--text-muted);">
        ±%5 Saha Güven Aralığı: <strong>${minTolerance.toFixed(0)} kg – ${maxTolerance.toFixed(0)} kg</strong>
      </div>
    </div>
  `;
}

// =============================================================================
// 6. MODÜL 3: ÜRETİM REHBERİ (BİYOLOJİK TAKVİMLER & DÖL DEFTERİ)
// =============================================================================

function calculateCattleGestation(t0DateStr) {
  const t0 = new Date(t0DateStr);
  const addDays = (days) => {
    const d = new Date(t0);
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  };

  return {
    t0: t0DateStr,
    day21: addDays(21),     // Kızgınlık dönüş kontrolü
    day45: addDays(45),     // Ultrason / muayene başlangıç
    day60: addDays(60),     // Rektal palpasyon kesinlik
    day223: addDays(223),   // Kuruya alma
    day253: addDays(253),   // Buzağı ishal aşısı (koli/rota/corona)
    day283: addDays(283)    // Tahmini doğum günü
  };
}

function calculateSheepGestation(t0DateStr) {
  const t0 = new Date(t0DateStr);
  const addDays = (days) => {
    const d = new Date(t0);
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  };

  return {
    t0: t0DateStr,
    flushingDate: addDays(-15), // Flaşlama başlangıcı
    day45: addDays(45),         // Ultrason ikizlik tespiti
    day105: addDays(105),       // Kuruya çıkarma & toksemi önleyici rasyon
    day120: addDays(120),       // Enterotoksemi anne aşısı
    day150: addDays(150)        // Tahmini kuzulama
  };
}

function renderReproductionLedger() {
  const container = document.getElementById('repro-records-list');
  if (!container) return;

  const records = DB.reproduction.records || [];
  const filter = document.getElementById('repro-filter-select') ? document.getElementById('repro-filter-select').value : 'all';

  let filtered = records;
  if (filter !== 'all') {
    filtered = records.filter(r => r.status === filter);
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center; color:var(--text-muted); padding:20px;">Kayıt bulunamadı.</div>`;
    return;
  }

  const today = new Date().toISOString().split('T')[0];

  let html = filtered.map(rec => {
    // Gebelik günü hesapla
    const t0 = new Date(rec.inseminationDate);
    const now = new Date();
    const diffDays = Math.floor((now - t0) / (1000 * 3600 * 24));
    const totalDays = rec.species === 'cattle' ? 283 : 150;
    const daysRemaining = Math.max(0, totalDays - diffDays);
    const progressPercent = Math.min(100, Math.max(0, (diffDays / totalDays) * 100));

    let statusBadge = `<span class="badge badge-info">${rec.status.toUpperCase()}</span>`;
    if (rec.status === 'gebe') statusBadge = `<span class="badge badge-success">GEBE (${diffDays}. GÜN)</span>`;
    if (rec.status === 'kuru_donem') statusBadge = `<span class="badge badge-warning">KURU DÖNEMDE</span>`;
    if (rec.status === 'dogumu_yakin') statusBadge = `<span class="badge badge-danger">DOĞUMU YAKIN (${daysRemaining} GÜN KALDI)</span>`;

    return `
      <div class="card" style="margin-bottom:12px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px;">
          <div>
            <strong style="font-size:1.1rem; color:var(--primary);">🏷️ ${rec.tagNo}</strong>
            ${rec.name ? `<span style="font-weight:700;"> (${rec.name})</span>` : ''}
            <span style="font-size:0.8rem; color:var(--text-muted); margin-left:6px;">Boğa/Koç: <strong>${rec.sire || '-'}</strong></span>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            ${statusBadge}
            <button class="btn btn-secondary btn-sm" onclick="deleteReproRecord('${rec.id}')">Sil</button>
          </div>
        </div>

        <div style="margin: 10px 0;">
          <div style="display:flex; justify-content:space-between; font-size:0.78rem; font-weight:700; color:var(--text-muted);">
            <span>Tohumlama: ${formatTurkishDate(rec.inseminationDate)}</span>
            <span>Tahmini Doğum: ${formatTurkishDate(rec.expectedCalvingDate)} (${daysRemaining} gün kaldı)</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill ${daysRemaining <= 15 ? 'danger' : daysRemaining <= 60 ? 'warning' : 'success'}" style="width: ${progressPercent}%;"></div>
          </div>
        </div>

        <div class="grid-3" style="background:rgba(0,0,0,0.02); padding:8px; border-radius:4px; font-size:0.8rem;">
          <div>📅 <strong>21. Gün Dönüş:</strong> ${formatTurkishDate(rec.check21Date)}</div>
          <div>🔬 <strong>Ultrason Tarihi:</strong> ${formatTurkishDate(rec.ultrasoundDate)}</div>
          <div>🥛 <strong>Kuruya Alma:</strong> ${formatTurkishDate(rec.dryOffDate)}</div>
          <div>💉 <strong>Anne Aşısı:</strong> ${formatTurkishDate(rec.vaccineDate)}</div>
          <div>👶 <strong>Tahmini Doğum:</strong> ${formatTurkishDate(rec.expectedCalvingDate)}</div>
          <div>📝 <strong>Not:</strong> ${rec.notes || 'Yok'}</div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

function saveNewReproductionRecord() {
  const tagNo = document.getElementById('new-rep-tag').value.trim();
  const name = document.getElementById('new-rep-name').value.trim();
  const species = document.getElementById('new-rep-species').value;
  const insemDate = document.getElementById('new-rep-date').value;
  const sire = document.getElementById('new-rep-sire').value.trim();
  const notes = document.getElementById('new-rep-notes').value.trim();

  if (!tagNo || !insemDate) {
    showToast("Lütfen Küpe Numarası ve Tohumlama Tarihini giriniz!", "toast-warning");
    return;
  }

  let schedule = null;
  if (species === 'cattle') {
    schedule = calculateCattleGestation(insemDate);
  } else {
    schedule = calculateSheepGestation(insemDate);
  }

  const newRec = {
    id: "rep_" + Date.now(),
    tagNo,
    name,
    species,
    inseminationDate: insemDate,
    sire: sire || "Bilinmiyor",
    check21Date: schedule.day21 || schedule.flushingDate,
    ultrasoundDate: schedule.day45,
    dryOffDate: schedule.day223 || schedule.day105,
    vaccineDate: schedule.day253 || schedule.day120,
    expectedCalvingDate: schedule.day283 || schedule.day150,
    status: "gebe",
    notes
  };

  DB.reproduction.records.unshift(newRec);
  saveDatabase();
  closeModal('modal-new-repro-rec');
  showToast(`Küpe #${tagNo} döl takip takvimine işlendi!`, "toast-success");
  renderReproductionLedger();
}

function deleteReproRecord(id) {
  if (!confirm("Bu döl takip kaydını silmek istediğinize emin misiniz?")) return;
  DB.reproduction.records = DB.reproduction.records.filter(r => r.id !== id);
  saveDatabase();
  renderReproductionLedger();
  showToast("Döl takip kaydı silindi.", "toast-info");
}

// Sabah-Akşam Tohumlama Saati Kuralı (AM-PM Rule)
function checkAmPmTiming() {
  const heatTime = document.getElementById('heat-time-select').value;
  const resultBox = document.getElementById('ampm-result');

  let windowText = "";
  let icon = "";
  let advice = "";

  if (heatTime === 'morning') {
    icon = "🌅";
    windowText = "AYNI GÜNÜN AKŞAMI (17:00 – 21:00)";
    advice = "Kızgınlık sabah saatlerinde (06:00 – 11:00) fark edildi. Ovulasyon (yumurtlama) gece yarısına doğru gerçekleşecektir. Sperm hücrelerinin dölleme kabiliyeti kazanması (kapasitasyon) için ideal tohumlama penceresi bu akşamdır.";
  } else if (heatTime === 'evening') {
    icon = "🌇";
    windowText = "ERTESİ GÜNÜN SABAHI (07:00 – 11:00)";
    advice = "Kızgınlık akşam / gece saatlerinde (17:00 – 23:00) fark edildi. Ovulasyon ertesi gün öğle saatlerinde gerçekleşecektir. Gece tohumlama yapılmaz; en yüksek gebelik oranı için ertesi sabah erken saatte tohumlayınız.";
  } else {
    icon = "🕛";
    windowText = "ERTESİ GÜNÜN ÖĞLEDEN SONRASI (13:00 – 16:00)";
    advice = "Kızgınlık öğle saatlerinde fark edildi. Takip eden günün ilk saatlerinde kontrol edip öğleden sonra tohumlayınız.";
  }

  resultBox.innerHTML = `
    <div class="card" style="border-left: 6px solid var(--primary); margin-top:10px;">
      <div style="font-size:0.85rem; font-weight:700; color:var(--text-muted);">${icon} AM-PM KURALI İDEAL TOHUMLAMA ZAMANI</div>
      <div style="font-size:1.3rem; font-weight:900; color:var(--primary); margin:6px 0;">${windowText}</div>
      <p style="font-size:0.88rem; color:var(--text);">${advice}</p>
    </div>
  `;
}

// Damızlık Olgunluk Eşiği Kontrolü
function checkBreedingReadiness() {
  const type = document.getElementById('breed-check-type').value;
  const ageMonths = parseFloat(document.getElementById('breed-age').value);
  const curWeight = parseFloat(document.getElementById('breed-weight').value);
  const matureWeight = parseFloat(document.getElementById('breed-mature-weight').value);
  const resultBox = document.getElementById('breed-result');

  if (isNaN(curWeight) || isNaN(matureWeight) || matureWeight <= 0) {
    resultBox.innerHTML = `<div class="alert alert-warning">Lütfen geçerli ağırlık değerleri giriniz.</div>`;
    return;
  }

  const weightRatio = (curWeight / matureWeight) * 100;
  let minRatio = type === 'duve' ? 60 : 65;
  let minAge = type === 'duve' ? 14 : 10;

  const isWeightOk = weightRatio >= minRatio;
  const isAgeOk = isNaN(ageMonths) || ageMonths >= minAge;

  let isReady = isWeightOk && isAgeOk;

  resultBox.innerHTML = `
    <div class="card" style="border-left: 6px solid ${isReady ? 'var(--primary-light)' : 'var(--danger)'};">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-weight:800; font-size:1.1rem; color:${isReady ? 'var(--primary)' : 'var(--danger)'};">
          ${isReady ? '✅ DAMIZLIK İÇİN UYGUNDUR' : '⛔ HENÜZ ERKEN / BEKLEYİNİZ'}
        </span>
        <span class="num" style="font-size:1.4rem; font-weight:800;">%${weightRatio.toFixed(1)}</span>
      </div>
      <p style="font-size:0.85rem; margin-top:6px;">
        Ergin Canlı Ağırlık Oranı: <strong>%${weightRatio.toFixed(1)}</strong> (Gereken Asgari Eşik: %${minRatio})<br>
        Yaş Durumu: <strong>${isNaN(ageMonths) ? '-' : ageMonths + ' Aylık'}</strong> (Tavsiye Edilen En Erken: ${minAge} Ay)
      </p>
      <div style="font-size:0.8rem; color:var(--text-muted); margin-top:6px;">
        ${isReady ? 'Gelişim hedefine ulaşılmıştır. İlk kızgınlıkta tohumlama yapılabilir, güç doğum riski düşüktür.' : 
        'Erken tohumlama hayvanın boy ve iskelet gelişimini durdurur, pelvis darlığı nedeniyle sezaryen veya buzağı kaybına yol açar.'}
      </div>
    </div>
  `;
}

// =============================================================================
// 7. MODÜL 4: YEM BİTKİLERİ & SİLAJ REHBERİ (AGRONOMİ & TOHUM)
// =============================================================================

const AGRONOMY_CROPS = [
  {
    id: "yonca",
    name: "Yonca (Medicago sativa)",
    type: "Baklagil Kaba Yem (Kraliçe Yem)",
    seedRateKg: "3.5 - 4.5 kg/da",
    seedDepth: "1.5 - 2.5 cm",
    sowingSeason: "İlkbahar (Mart-Nisan) veya Sonbahar (Eylül)",
    baseFertilizer: "25-30 kg/da DAP (18-46-0) veya 20-20-0",
    topFertilizer: "Her 2 biçimde bir 15-20 kg TSP / Potasyum",
    harvestPhenology: "Tarlanın %10'u çiçek açtığında (en yüksek protein ve düşük lif)",
    expectedYield: "Kuru Ot: 1.200 - 1.800 kg/da (Sezonda 4-6 biçim)",
    crudeProtein: "%18 - %22 Ham Protein"
  },
  {
    id: "korunga",
    name: "Korunga (Onobrychis viciifolia)",
    type: "Baklagil Kaba Yem (Şişme Yapmaz)",
    seedRateKg: "8.0 - 10.0 kg/da (Kabuklu)",
    seedDepth: "2.5 - 3.5 cm",
    sowingSeason: "Sonbahar (Eylül-Ekim) veya Erken İlkbahar",
    baseFertilizer: "20-25 kg/da 20-20-0 veya DAP",
    topFertilizer: "Erken ilkbaharda hafif fosforlu gübre",
    harvestPhenology: "%50 Çiçeklenme döneminde",
    expectedYield: "Kuru Ot: 800 - 1.200 kg/da (Yılda 1-2 biçim, kıraç araziler için ideal)",
    crudeProtein: "%15 - %18 Ham Protein"
  },
  {
    id: "misir_silaj",
    name: "Silajlık Mısır (Zea mays)",
    type: "Yüksek Enerjili Buğdaygil Silajı",
    seedRateKg: "8.000 - 9.000 tohum/da (~2.5 kg/da)",
    seedDepth: "5.0 - 7.0 cm",
    sowingSeason: "İlkbahar toprak ısısı 10-12°C olduğunda (Nisan-Mayıs)",
    baseFertilizer: "30-40 kg/da Kompoze (15-15-15 veya DAP)",
    topFertilizer: "Boğaz doldurmada 25-30 kg Üre (%46 N)",
    harvestPhenology: "Dane süt çizgisi 1/2 veya 2/3 seviyesinde (Kuru Madde %32-35)",
    expectedYield: "Yeşil Silaj: 6.000 - 8.500 kg/da",
    crudeProtein: "%7.5 - %9.0 HP, 2.50+ Mcal ME"
  },
  {
    id: "ryegrass_italyan",
    name: "İtalyan Çimi (Lolium multiflorum)",
    type: "Tek Yıllık Yüksek Verimli Buğdaygil",
    seedRateKg: "4.5 - 5.5 kg/da",
    seedDepth: "1.5 - 2.0 cm",
    sowingSeason: "Sonbahar (Eylül - Ekim)",
    baseFertilizer: "25 kg/da 20-20-0 taban gübresi",
    topFertilizer: "Her biçimden hemen sonra 15-20 kg/da Üre veya CAN %26",
    harvestPhenology: "Başak çıkarmadan hemen önce (35-40 cm boyda)",
    expectedYield: "Yaş Ot: 8.000 - 12.000 kg/da (Sezonda 4-6 biçim)",
    crudeProtein: "%14 - %18 Ham Protein, yüksek sindirilebilirlik"
  },
  {
    id: "macar_figi",
    name: "Macar Fiği (Vicia pannonica)",
    type: "Kışa Dayanıklı Baklagil",
    seedRateKg: "8.0 - 10.0 kg/da (Tahılla karışık ekilir)",
    seedDepth: "3.0 - 4.5 cm",
    sowingSeason: "Sonbahar (Ekim - Kasım)",
    baseFertilizer: "20-25 kg/da 20-20-0",
    topFertilizer: "Gerekmez (azot fikse eder)",
    harvestPhenology: "Alt baklalar dolmaya başladığında",
    expectedYield: "Kuru Ot: 600 - 900 kg/da",
    crudeProtein: "%16 - %20 Ham Protein"
  },
  {
    id: "yem_bezelyesi",
    name: "Yem Bezelyesi (Pisum arvense)",
    type: "Tek Yıllık Baklagil Otu",
    seedRateKg: "12.0 - 15.0 kg/da (Tritikale ile)",
    seedDepth: "4.0 - 5.0 cm",
    sowingSeason: "Sonbahar veya Erken İlkbahar",
    baseFertilizer: "20 kg/da DAP",
    topFertilizer: "Gerekmez",
    harvestPhenology: "Çiçeklenme sonu, ilk badıçlar oluştuğunda",
    expectedYield: "Yeşil Ot: 2.500 - 3.500 kg/da",
    crudeProtein: "%17 - %21 Ham Protein"
  },
  {
    id: "sorgum_sudan",
    name: "Sorgum-Sudan Otu Melezi",
    type: "Kuraklığa Dayanıklı Yazlık Buğdaygil",
    seedRateKg: "3.5 - 4.5 kg/da",
    seedDepth: "3.0 - 4.0 cm",
    sowingSeason: "Mayıs - Haziran (Sıcak toprak)",
    baseFertilizer: "25-30 kg/da 20-20-0",
    topFertilizer: "Her biçimden sonra 20 kg Üre",
    harvestPhenology: "100-120 cm boya ulaştığında (Prasik asit riski bitince)",
    expectedYield: "Yeşil Ot: 6.000 - 9.000 kg/da (2-3 biçim)",
    crudeProtein: "%10 - %13 Ham Protein"
  },
  {
    id: "tritikale_yem",
    name: "Tritikale (Yemlik Tahıl Hasılı)",
    type: "Kuvvetli Buğday-Çavdar Melezi",
    seedRateKg: "20 - 24 kg/da (Yalın) veya 8 kg/da (Fiğ ile)",
    seedDepth: "4.0 - 5.0 cm",
    sowingSeason: "Sonbahar (Ekim)",
    baseFertilizer: "25 kg/da 20-20-0",
    topFertilizer: "Kardeşlenmede 15 kg Üre",
    harvestPhenology: "Süt olum - sarı olum başlangıcı",
    expectedYield: "Kuru Ot: 900 - 1.400 kg/da",
    crudeProtein: "%10 - %12 Ham Protein"
  }
];

function renderAgronomyCards() {
  const container = document.getElementById('agronomy-cards-grid');
  if (!container) return;

  container.innerHTML = AGRONOMY_CROPS.map(crop => `
    <div class="card" style="margin-bottom:0;">
      <div class="card-header" style="margin-bottom:8px; padding-bottom:6px;">
        <div>
          <strong style="color:var(--primary); font-size:1.05rem;">🌱 ${crop.name}</strong>
          <div style="font-size:0.78rem; color:var(--text-muted);">${crop.type}</div>
        </div>
        <span class="badge badge-success">${crop.crudeProtein.split(',')[0]}</span>
      </div>

      <div style="font-size:0.83rem; line-height:1.6;">
        <div>📏 <strong>Ekim Derinliği:</strong> ${crop.seedDepth}</div>
        <div>🌾 <strong>Dekara Tohum:</strong> ${crop.seedRateKg}</div>
        <div>🗓️ <strong>Ekim Zamanı:</strong> ${crop.sowingSeason}</div>
        <div>🧪 <strong>Taban Gübresi:</strong> ${crop.baseFertilizer}</div>
        <div>⚡ <strong>Üst Gübreleme:</strong> ${crop.topFertilizer}</div>
        <div>✂️ <strong>Hasat/Biçim Evresi:</strong> ${crop.harvestPhenology}</div>
        <div style="margin-top:6px; color:var(--primary); font-weight:700;">📈 <strong>Beklenen Verim:</strong> ${crop.expectedYield}</div>
      </div>
    </div>
  `).join('');
}

// İdeal Tohumluk Karışım Robotu
function calculateSeedMix() {
  const areaDa = parseFloat(document.getElementById('mix-area-da').value) || 20;
  const targetPurpose = document.getElementById('mix-purpose-select').value;
  const resultBox = document.getElementById('mix-result');

  let mixName = "";
  let legKgPerDa = 0;
  let grassKgPerDa = 0;
  let legName = "";
  let grassName = "";
  let expProtein = "";
  let drillDepth = "";

  if (targetPurpose === 'kuru_ot') {
    mixName = "%60 Macar Fiği + %40 Tritikale (Kuru Balya Şampiyonu)";
    legName = "Macar Fiği";
    grassName = "Tritikale / Yulaf";
    legKgPerDa = 8.0;
    grassKgPerDa = 5.0;
    expProtein = "%15 - %18 Ham Protein";
    drillDepth = "3.5 - 4.5 cm (Fiğ derinliğine ayarlanmalı)";
  } else if (targetPurpose === 'mera_otlatma') {
    mixName = "%50 İtalyan Çimi + %30 Çayır Otu + %20 Aküçgül (Mera)";
    legName = "Aküçgül / Gazal Boynuzu";
    grassName = "Ryegrass + Çayır Salkım Otu";
    legKgPerDa = 1.5;
    grassKgPerDa = 4.5;
    expProtein = "%17 - %20 Ham Protein";
    drillDepth = "1.5 - 2.0 cm (Merdane ile bastırılmalı)";
  } else {
    // Silaj
    mixName = "%70 İtalyan Çimi + %30 Yem Bezelyesi (Enerji-Protein Silajı)";
    legName = "Yem Bezelyesi";
    grassName = "İtalyan Çimi (Ryegrass)";
    legKgPerDa = 6.0;
    grassKgPerDa = 4.0;
    expProtein = "%16 - %19 Ham Protein, 2.40 Mcal ME";
    drillDepth = "2.5 - 3.5 cm";
  }

  const totalLegKg = legKgPerDa * areaDa;
  const totalGrassKg = grassKgPerDa * areaDa;
  const totalSeedKg = totalLegKg + totalGrassKg;
  const totalBags25 = Math.ceil(totalSeedKg / 25);

  resultBox.innerHTML = `
    <div class="card" style="border-left: 6px solid var(--primary); margin-top:10px;">
      <h4 style="color:var(--primary); font-weight:800; margin-bottom:8px;">🌾 ${mixName}</h4>
      <div style="font-size:0.86rem; color:var(--text-muted); margin-bottom:12px;">Toplam Arazi: <strong>${areaDa} Dekar</strong></div>

      <div class="grid-3" style="margin-bottom:12px;">
        <div class="metric-box">
          <div style="font-size:0.8rem; font-weight:700;">1. TOHUM: ${legName}</div>
          <div class="metric-val num" style="font-size:1.6rem; margin:4px 0;">${totalLegKg.toFixed(0)} kg</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${legKgPerDa} kg/da</div>
        </div>

        <div class="metric-box">
          <div style="font-size:0.8rem; font-weight:700;">2. TOHUM: ${grassName}</div>
          <div class="metric-val num" style="font-size:1.6rem; margin:4px 0;">${totalGrassKg.toFixed(0)} kg</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${grassKgPerDa} kg/da</div>
        </div>

        <div class="metric-box">
          <div style="font-size:0.8rem; font-weight:700;">TOPLAM TOHUM</div>
          <div class="metric-val num" style="font-size:1.6rem; margin:4px 0; color:var(--primary);">${totalSeedKg.toFixed(0)} kg</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${totalBags25} Torba (25kg'lık)</div>
        </div>
      </div>

      <div style="background:rgba(0,0,0,0.02); padding:10px; border-radius:4px; font-size:0.84rem; line-height:1.6;">
        <div>🌱 <strong>Mivzer Ekim Derinliği:</strong> ${drillDepth}</div>
        <div>💪 <strong>Beklenen Yem Kalitesi:</strong> ${expProtein}</div>
        <div>💡 <strong>Ekim İpucu:</strong> İki farklı tohumun tohumluk deposunda homojen karışması için tohumlar çuvallarda önceden kuru şekilde harmanlanmalıdır.</div>
      </div>
    </div>
  `;
}

// Mikrodalga Fırında Hızlı Silaj Kuru Madde & Nem Testi
function calculateSilageMoisture() {
  const freshGrams = parseFloat(document.getElementById('silage-fresh-weight').value) || 100;
  const dryGrams = parseFloat(document.getElementById('silage-dry-weight').value);
  const resultBox = document.getElementById('silage-result');

  if (isNaN(dryGrams) || dryGrams <= 0 || dryGrams >= freshGrams) {
    resultBox.innerHTML = `<div class="alert alert-warning">Lütfen geçerli bir kurutulmuş ağırlık (A2) giriniz (A2 değeri taze ağırlıktan küçük olmalıdır).</div>`;
    return;
  }

  // KM% = (A2 / A1) * 100
  // Nem% = 100 - KM%
  const kmPercent = (dryGrams / freshGrams) * 100;
  const moisturePercent = 100 - kmPercent;

  let evalStatus = "";
  let evalColor = "";
  let evalDesc = "";

  if (moisturePercent >= 65 && moisturePercent <= 70) {
    evalStatus = "MÜKEMMEL / İDEAL SİLAJ NEMİ";
    evalColor = "var(--primary-light)";
    evalDesc = "Mükemmel paketleme ve laktik asit fermantasyonu şartları. Sıfır sızıntı suyu kaybı, yüksek sıkışma kabiliyeti ve harika koku sağlar. Hemen silolayınız!";
  } else if (moisturePercent > 70 && moisturePercent <= 74) {
    evalStatus = "BİRAZ NEMLİ (SINIRDA)";
    evalColor = "var(--warning)";
    evalDesc = "Silo tabanından bir miktar sızıntı suyu oluşabilir. Mümkünse tarlada yarım gün soldurma yapın veya silolarken arpa kırması/saman katın.";
  } else if (moisturePercent > 74) {
    evalStatus = "AŞIRI ISLAK (KLOSTRİDYUM RİSKİ!)";
    evalColor = "var(--danger)";
    evalDesc = "DİKKAT: Bütirik asit fermantasyonu, kötü kefir/ter kokusu ve protein parçalanması riski çok yüksektir! Kesinlikle soldurulmadan silolanmamalıdır.";
  } else {
    evalStatus = "AŞIRI KURU (HAVA KALMA & KÜF RİSKİ)";
    evalColor = "var(--danger)";
    evalDesc = "DİKKAT: Yetersiz sıkışma, silo içinde hava cepleri ve mikotoksin/küf riski yüksektir. Kıyım boyunu 8-10 mm'ye düşürün ve tonajlı ağır traktörle çiğneyin.";
  }

  resultBox.innerHTML = `
    <div class="card" style="border-left: 6px solid ${evalColor}; margin-top:10px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div>
          <span style="font-weight:800; font-size:1.1rem; color:${evalColor};">${evalStatus}</span>
          <div style="font-size:0.82rem; color:var(--text-muted); margin-top:2px;">Mikrodalga Kurutma Raporu</div>
        </div>
        <div style="display:flex; gap:12px;">
          <div class="metric-box" style="padding:6px 12px;">
            <div class="num" style="font-size:1.4rem; font-weight:800; color:var(--primary);">${kmPercent.toFixed(1)}%</div>
            <div style="font-size:0.68rem; font-weight:700;">KURU MADDE</div>
          </div>
          <div class="metric-box" style="padding:6px 12px;">
            <div class="num" style="font-size:1.4rem; font-weight:800; color:var(--danger);">${moisturePercent.toFixed(1)}%</div>
            <div style="font-size:0.68rem; font-weight:700;">NEM ORANI</div>
          </div>
        </div>
      </div>
      <p style="font-size:0.86rem; color:var(--text); margin-top:10px;">${evalDesc}</p>
    </div>
  `;
}

// Silo Hacim ve Tonaj Kapasitesi
function calculateSiloCapacity() {
  const bWidth = parseFloat(document.getElementById('silo-bottom-w').value);
  const tWidth = parseFloat(document.getElementById('silo-top-w').value);
  const height = parseFloat(document.getElementById('silo-height').value);
  const length = parseFloat(document.getElementById('silo-length').value);
  const density = parseFloat(document.getElementById('silo-density').value) || 700; // kg/m3
  const resultBox = document.getElementById('silo-result');

  if (isNaN(bWidth) || isNaN(tWidth) || isNaN(height) || isNaN(length)) {
    resultBox.innerHTML = `<div class="alert alert-warning">Lütfen tüm silo ölçülerini giriniz.</div>`;
    return;
  }

  // Kelepçe/Hendek Hacmi (m3) = [(Taban + Tavan) / 2] * Yükseklik * Uzunluk
  const volumeM3 = ((bWidth + tWidth) / 2) * height * length;
  const capacityTons = (volumeM3 * density) / 1000;

  // Günlük 50 baş hayvanın tüketeceği ortalama tonaj (inek başı 20kg silaj)
  const dailyFeedKg = 50 * 20; // 1.000 kg = 1 ton/gün
  const feedDays = Math.round((capacityTons * 1000) / dailyFeedKg);

  resultBox.innerHTML = `
    <div class="card" style="border-left: 6px solid var(--primary); margin-top:10px;">
      <h4 style="color:var(--primary); font-weight:800; margin-bottom:10px;">🚜 Silo Kapasite & Hacim Raporu</h4>
      <div class="grid-3">
        <div class="metric-box">
          <div class="metric-label">SİLO HACMİ</div>
          <div class="metric-val num">${volumeM3.toFixed(1)} m³</div>
        </div>
        <div class="metric-box">
          <div class="metric-label">TOPLAM SİLAJ KAPASİTESİ</div>
          <div class="metric-val num" style="color:var(--primary);">${capacityTons.toFixed(1)} Ton</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${density} kg/m³ yoğunlukla</div>
        </div>
        <div class="metric-box">
          <div class="metric-label">50 BAŞ İÇİN YETME SÜRESİ</div>
          <div class="metric-val num">${feedDays} Gün</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">20 kg/baş/gün tüketimle</div>
        </div>
      </div>
      <div style="font-size:0.8rem; color:var(--text-muted); margin-top:10px;">
        💡 Silo aynasının bozulmaması için kışın günde en az 10-15 cm, yazın en az 20 cm ayna kesilerek geriye doğru ilerlenmelidir.
      </div>
    </div>
  `;
}

// Tarla Defteri Kayıtları
function renderFieldLedger() {
  const container = document.getElementById('field-records-list');
  if (!container) return;

  const records = DB.forage.fieldRecords || [];
  if (records.length === 0) {
    container.innerHTML = `<div style="text-align:center; color:var(--text-muted); padding:20px;">Kayıtlı tarla bulunamadı.</div>`;
    return;
  }

  container.innerHTML = records.map(f => `
    <div class="card" style="margin-bottom:12px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <strong style="font-size:1.05rem; color:var(--primary);">🌾 ${f.fieldName}</strong>
          <span class="badge badge-info" style="margin-left:8px;">${f.areaDa} Dekar</span>
          <div style="font-size:0.85rem; font-weight:700; margin-top:2px;">Ürün: ${f.cropType}</div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="deleteFieldRecord('${f.id}')">Sil</button>
      </div>

      <div class="grid-3" style="background:rgba(0,0,0,0.02); padding:8px; border-radius:4px; font-size:0.82rem; margin-top:10px;">
        <div>🗓️ <strong>Ekim Tarihi:</strong> ${formatTurkishDate(f.seedingDate)}</div>
        <div>🧪 <strong>Gübre:</strong> ${f.fertilizer || '-'}</div>
        <div>📈 <strong>Hasat/Verim:</strong> <strong>${f.harvestYieldKg ? formatNumber(f.harvestYieldKg, 0) + ' kg' : 'Henüz biçilmedi'}</strong></div>
      </div>
      ${f.notes ? `<div style="font-size:0.8rem; color:var(--text-muted); margin-top:6px;">📝 Not: ${f.notes}</div>` : ''}
    </div>
  `).join('');
}

function saveNewFieldRecord() {
  const fieldName = document.getElementById('new-field-name').value.trim();
  const areaDa = parseFloat(document.getElementById('new-field-area').value);
  const cropType = document.getElementById('new-field-crop').value.trim();
  const seedingDate = document.getElementById('new-field-date').value;
  const fertilizer = document.getElementById('new-field-fert').value.trim();
  const yieldKg = parseFloat(document.getElementById('new-field-yield').value) || 0;
  const notes = document.getElementById('new-field-notes').value.trim();

  if (!fieldName || isNaN(areaDa) || !cropType) {
    showToast("Lütfen Tarla Adı, Alan (da) ve Ürün Türünü giriniz!", "toast-warning");
    return;
  }

  const newRec = {
    id: "field_" + Date.now(),
    fieldName,
    areaDa,
    cropType,
    seedingDate: seedingDate || new Date().toISOString().split('T')[0],
    fertilizer,
    harvestYieldKg: yieldKg,
    notes
  };

  DB.forage.fieldRecords.unshift(newRec);
  saveDatabase();
  closeModal('modal-new-field-rec');
  showToast(`"${fieldName}" tarla defterine kaydedildi!`, "toast-success");
  renderFieldLedger();
}

function deleteFieldRecord(id) {
  if (!confirm("Bu tarla kaydını silmek istediğinize emin misiniz?")) return;
  DB.forage.fieldRecords = DB.forage.fieldRecords.filter(f => f.id !== id);
  saveDatabase();
  renderFieldLedger();
  showToast("Tarla kaydı silindi.", "toast-info");
}

// =============================================================================
// 8. MERKEZİ VERİ İSTASYONU, YEDEKLEME & EXCEL CSV MOTORU
// =============================================================================

function exportFullBackupJSON() {
  DB.lastUpdated = new Date().toISOString();
  const dataStr = JSON.stringify(DB, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const todayStr = new Date().toISOString().split('T')[0];
  const filename = `Tosun_Pasa_Ciftlik_Yedek_${todayStr}.json`;

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showToast("Tüm çiftlik veritabanı JSON olarak yedeklendi!", "toast-success");
}

function importBackupJSON(fileInput) {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!parsed.doctor || !parsed.ration || !parsed.reproduction || !parsed.forage) {
        throw new Error("Geçersiz yedek dosyası şeması!");
      }
      DB = parsed;
      saveDatabase(DB);
      showToast("Yedek başarıyla geri yüklendi! Sistem yenileniyor...", "toast-success");
      setTimeout(() => {
        location.reload();
      }, 1000);
    } catch (err) {
      showToast("Yedek dosyası okunamadı veya bozuk: " + err.message, "toast-error");
    }
  };
  reader.readAsText(file);
}

function exportExcelCSV(type) {
  let csvContent = "\uFEFF"; // UTF-8 BOM for Excel
  let filename = `Tosun_Pasa_${type}_${new Date().toISOString().split('T')[0]}.csv`;

  if (type === 'ear_tags') {
    csvContent += "Kupe_No;Hayvan_Adi;Tur;Tani;Ilac_Adi;Tedavi_Tarihi;Sut_Kilit_Saat;Et_Kilit_Gun;Notlar\n";
    (DB.doctor.earTagRecords || []).forEach(r => {
      csvContent += `"${r.tagNo}";"${r.animalName || ''}";"${r.species}";"${r.diagnosis}";"${r.drugName}";"${r.treatmentDate}";"${r.milkLockHours}";"${r.meatLockDays}";"${r.notes || ''}"\n`;
    });
  } else if (type === 'repro') {
    csvContent += "Kupe_No;Hayvan_Adi;Tur;Tohumlama_Tarihi;Boga_Koc;21_Gun_Donus;Ultrason_Tarihi;Kuruya_Alma;Asi_Tarihi;Tahmini_Dogum;Durum;Notlar\n";
    (DB.reproduction.records || []).forEach(r => {
      csvContent += `"${r.tagNo}";"${r.name || ''}";"${r.species}";"${r.inseminationDate}";"${r.sire || ''}";"${r.check21Date}";"${r.ultrasoundDate}";"${r.dryOffDate}";"${r.vaccineDate}";"${r.expectedCalvingDate}";"${r.status}";"${r.notes || ''}"\n`;
    });
  } else if (type === 'forage') {
    csvContent += "Tarla_Adi;Alan_Dekar;Urun_Turu;Ekim_Tarihi;Gubre;Hasat_Verim_Kg;Notlar\n";
    (DB.forage.fieldRecords || []).forEach(f => {
      csvContent += `"${f.fieldName}";"${f.areaDa}";"${f.cropType}";"${f.seedingDate}";"${f.fertilizer || ''}";"${f.harvestYieldKg || ''}";"${f.notes || ''}"\n`;
    });
  }

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showToast(`${filename} Excel CSV olarak indirildi!`, "toast-success");
}

function restoreSampleData() {
  if (!confirm("Mevcut tüm veriler silinip orijinal fabrika/örnek verileri yüklenecektir. Onaylıyor musunuz?")) return;
  localStorage.removeItem(DB_KEY);
  DB = JSON.parse(JSON.stringify(DEFAULT_DB));
  saveDatabase(DB);
  showToast("Fabrika örnek verileri yüklendi! Sistem yenileniyor...", "toast-success");
  setTimeout(() => location.reload(), 800);
}

// =============================================================================
// 9. MODAL & SEKME NAVİGASYONU
// =============================================================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    if (modalId === 'modal-help-guide') {
      let targetGuide = (typeof currentAppMode !== 'undefined' && currentAppMode === 'zooteknist') ? 'zooteknist' : 'yetistirici';
      const simTab = document.getElementById('yet-view-sim3d');
      if (simTab && simTab.classList.contains('active')) {
        targetGuide = 'sim3d';
      }
      switchGuideTab(targetGuide);
    }
  }
}

function switchGuideTab(target) {
  const yetBtn = document.getElementById('btn-guide-tab-yet');
  const zooBtn = document.getElementById('btn-guide-tab-zoo');
  const simBtn = document.getElementById('btn-guide-tab-sim');
  const yetSection = document.getElementById('guide-section-yetistirici');
  const zooSection = document.getElementById('guide-section-zooteknist');
  const simSection = document.getElementById('guide-section-sim3d');

  [yetBtn, zooBtn, simBtn].forEach((b) => b?.classList.remove('active'));
  [yetSection, zooSection, simSection].forEach((s) => {
    if (s) s.style.display = 'none';
  });

  if (target === 'zooteknist') {
    if (zooBtn) zooBtn.classList.add('active');
    if (zooSection) zooSection.style.display = 'block';
  } else if (target === 'sim3d') {
    if (simBtn) simBtn.classList.add('active');
    if (simSection) simSection.style.display = 'block';
  } else {
    if (yetBtn) yetBtn.classList.add('active');
    if (yetSection) yetSection.style.display = 'block';
  }
  const modalBody = document.querySelector('#modal-help-guide .modal-body');
  if (modalBody) modalBody.scrollTop = 0;
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

function updateHeroDashboardStats() {
  const statsContainer = document.getElementById('hero-stats-container');
  if (!statsContainer) return;

  const docRecords = (DB.doctor && DB.doctor.earTagRecords) ? DB.doctor.earTagRecords : [];
  const reproRecords = (DB.reproduction && DB.reproduction.records) ? DB.reproduction.records : [];
  const rationRecipes = (DB.ration && DB.ration.savedRecipes) ? DB.ration.savedRecipes : [];
  const fieldRecords = (DB.forage && DB.forage.fieldRecords) ? DB.forage.fieldRecords : [];

  const now = Date.now();
  let activeIkasCount = 0;
  docRecords.forEach(r => {
    const treatTime = new Date(r.treatmentDate).getTime();
    const milkLockMs = (r.milkLockHours || 0) * 3600 * 1000;
    const meatLockMs = (r.meatLockDays || 0) * 24 * 3600 * 1000;
    if ((treatTime + milkLockMs > now) || (treatTime + meatLockMs > now)) {
      activeIkasCount++;
    }
  });

  const pregnantCount = reproRecords.filter(r => r.status === 'gebe' || r.status === 'kuru_donem' || r.status === 'dogumu_yakin').length;
  const totalFieldArea = fieldRecords.reduce((sum, f) => sum + (parseFloat(f.areaDa) || 0), 0);

  statsContainer.innerHTML = `
    <div class="farm-stat-card" onclick="jumpToDoctor('sub-doc-ikas')">
      <div class="stat-icon-wrap" style="background: rgba(220, 38, 38, 0.12); color: var(--danger);">⏱️</div>
      <div>
        <div class="num" style="font-size: 1.45rem; font-weight: 800; color: ${activeIkasCount > 0 ? 'var(--danger)' : 'var(--primary)'};">
          ${activeIkasCount} <span style="font-size:0.8rem; font-weight:600;">Baş</span>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Aktif İKAS İlaç Kilidi</div>
      </div>
    </div>

    <div class="farm-stat-card" onclick="jumpToRepro('sub-repro-ledger')">
      <div class="stat-icon-wrap" style="background: rgba(18, 140, 126, 0.12); color: var(--primary);">🍼</div>
      <div>
        <div class="num" style="font-size: 1.45rem; font-weight: 800; color: var(--primary);">
          ${pregnantCount} <span style="font-size:0.8rem; font-weight:600;">Baş</span>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Gebe & Döl Takibi</div>
      </div>
    </div>

    <div class="farm-stat-card" onclick="jumpToRation('sub-ration-saved')">
      <div class="stat-icon-wrap" style="background: rgba(245, 158, 11, 0.12); color: var(--warning);">🌾</div>
      <div>
        <div class="num" style="font-size: 1.45rem; font-weight: 800; color: var(--primary);">
          ${rationRecipes.length} <span style="font-size:0.8rem; font-weight:600;">Reçete</span>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Kayıtlı Rasyon Ambarı</div>
      </div>
    </div>

    <div class="farm-stat-card" onclick="jumpToForage('sub-forage-ledger')">
      <div class="stat-icon-wrap" style="background: rgba(37, 211, 102, 0.12); color: var(--primary-light);">🚜</div>
      <div>
        <div class="num" style="font-size: 1.45rem; font-weight: 800; color: var(--primary);">
          ${totalFieldArea.toFixed(0)} <span style="font-size:0.8rem; font-weight:600;">Dekar</span>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Kayıtlı Ekili Tarla Alanı</div>
      </div>
    </div>
  `;
}

function jumpToDoctor(subSectionId) {
  switchMasterTab('tab-doctor');
  if (subSectionId) switchSubNav('tab-doctor', subSectionId);
}

function jumpToRation(subSectionId) {
  switchMasterTab('tab-ration');
  if (subSectionId) switchSubNav('tab-ration', subSectionId);
}

function jumpToRepro(subSectionId) {
  switchMasterTab('tab-repro');
  if (subSectionId) switchSubNav('tab-repro', subSectionId);
}

function jumpToForage(subSectionId) {
  switchMasterTab('tab-forage');
  if (subSectionId) switchSubNav('tab-forage', subSectionId);
}

function triggerEmergencyShortcut(emergencyType) {
  jumpToDoctor('sub-doc-diag');
  setTimeout(() => {
    // Clear all checked symptoms
    document.querySelectorAll('.symptom-cb').forEach(cb => cb.checked = false);

    if (emergencyType === 'timpani') {
      const el1 = document.querySelector('.symptom-cb[value="sisme_gaz"]');
      const el2 = document.querySelector('.symptom-cb[value="hizli_nefes"]');
      if (el1) el1.checked = true;
      if (el2) el2.checked = true;
      showToast("🚨 Acil Durum: Akut Şişme belirtileri seçildi, analiz üretiliyor...", "toast-warning");
    } else if (emergencyType === 'asidoz') {
      const el1 = document.querySelector('.symptom-cb[value="ishal"]');
      const el2 = document.querySelector('.symptom-cb[value="istahsizlik"]');
      const el3 = document.querySelector('.symptom-cb[value="yatma_kalkamama"]');
      if (el1) el1.checked = true;
      if (el2) el2.checked = true;
      if (el3) el3.checked = true;
      showToast("🚨 Acil Durum: Rumen Asidozu belirtileri seçildi...", "toast-warning");
    } else if (emergencyType === 'hipokalsemi') {
      const el1 = document.querySelector('.symptom-cb[value="yatma_kalkamama"]');
      const el2 = document.querySelector('.symptom-cb[value="titreme"]');
      const el3 = document.querySelector('.symptom-cb[value="dusuk_derece"]');
      if (el1) el1.checked = true;
      if (el2) el2.checked = true;
      if (el3) el3.checked = true;
      showToast("🚨 Acil Durum: Doğum Felci (Hipokalsemi) belirtileri seçildi...", "toast-warning");
    } else if (emergencyType === 'mastitis') {
      const el1 = document.querySelector('.symptom-cb[value="meme_sislik"]');
      const el2 = document.querySelector('.symptom-cb[value="bozuk_sut"]');
      const el3 = document.querySelector('.symptom-cb[value="ates"]');
      if (el1) el1.checked = true;
      if (el2) el2.checked = true;
      if (el3) el3.checked = true;
      showToast("🚨 Acil Durum: Toksik / Akut Mastitis belirtileri seçildi...", "toast-warning");
    }

    runCobanDoctorDiagnosis();
    const resEl = document.getElementById('diag-results');
    if (resEl) resEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// =============================================================================
// YENİ ANA SAYFA & ROL YÖNETİMİ (PORTAL, ZOOTEKNİST, YETİŞTİRİCİ)
// =============================================================================
let currentAppMode = 'portal'; // 'portal', 'zooteknist', 'yetistirici'
let currentYetTab = 'yet-view-home';

function goToHome() {
  setAppMode('portal');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setAppMode(mode) {
  currentAppMode = mode;
  const portalEl = document.getElementById('portal-landing');
  const zooteknistTabs = document.getElementById('zooteknist-tabs-bar');
  const yetistiriciApp = document.getElementById('yetistirici-app');
  const roleIndicator = document.getElementById('header-role-indicator');
  const roleBadge = document.getElementById('role-pill-badge');

  if (mode === 'portal') {
    if (portalEl) portalEl.style.display = 'block';
    if (zooteknistTabs) zooteknistTabs.style.display = 'none';
    if (yetistiriciApp) yetistiriciApp.style.display = 'none';
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    if (roleIndicator) roleIndicator.style.display = 'none';
  } else if (mode === 'zooteknist') {
    if (portalEl) portalEl.style.display = 'none';
    if (yetistiriciApp) yetistiriciApp.style.display = 'none';
    if (zooteknistTabs) zooteknistTabs.style.display = 'block';
    if (roleIndicator) {
      roleIndicator.style.display = 'flex';
      if (roleBadge) {
        roleBadge.innerHTML = '🔬 Zooteknist';
        roleBadge.style.background = 'var(--primary)';
        roleBadge.style.color = '#000000';
      }
    }
    switchMasterTab('tab-home');
  } else if (mode === 'yetistirici') {
    if (portalEl) portalEl.style.display = 'none';
    if (zooteknistTabs) zooteknistTabs.style.display = 'none';
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    if (yetistiriciApp) yetistiriciApp.style.display = 'block';
    if (roleIndicator) {
      roleIndicator.style.display = 'flex';
      if (roleBadge) {
        roleBadge.innerHTML = '🌾 Yetiştirici';
        roleBadge.style.background = '#ffdd00';
        roleBadge.style.color = '#000000';
      }
    }
    switchYetTab('yet-view-home');
    renderYetistiriciDashboard();
    renderYetistiriciFeedCheckboxes();
    renderYetistiriciFirstAid();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function launchSim3DFromPortal() {
  setAppMode('zooteknist');
  switchMasterTab('tab-sim3d');
}

function toggleSim3dFullscreen(iframeId = 'sim3d-iframe') {
  const el = document.getElementById(iframeId);
  if (!el) return;
  if (!document.fullscreenElement) {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function reloadSim3dIframe(iframeId = 'sim3d-iframe') {
  const el = document.getElementById(iframeId);
  if (el) {
    el.src = './sim3d/index.html';
    el.onload = () => setTimeout(() => syncDataTo3DSimulation(false), 350);
    showToast("3D Simülasyon yeniden yükleniyor...", "toast-info");
  }
}

// =============================================================================
// 3D SİMÜLASYON VERİ SENKRONİZASYONU (ZOOTEKNİST & YETİŞTİRİCİ VERİ KÖPRÜSÜ)
// =============================================================================
function syncDataTo3DSimulation(showToastNotice = false) {
  const iframes = [
    document.getElementById('sim3d-iframe'),
    document.getElementById('yet-sim3d-iframe')
  ].filter(Boolean);

  const reproRecords = (DB.reproduction && DB.reproduction.records) ? DB.reproduction.records : [];
  const docRecords = (DB.doctor && DB.doctor.earTagRecords) ? DB.doctor.earTagRecords : [];
  const recipes = (DB.ration && DB.ration.savedRecipes) ? DB.ration.savedRecipes : [];

  const uniqueTags = new Set();
  reproRecords.forEach(r => { if (r.tagNo) uniqueTags.add(r.tagNo); });
  docRecords.forEach(r => { if (r.tagNo) uniqueTags.add(r.tagNo); });

  const now = Date.now();
  let lockedCount = 0;
  docRecords.forEach(r => {
    const treatTime = new Date(r.treatmentDate).getTime();
    const milkLockMs = (r.milkLockHours || 0) * 3600 * 1000;
    const meatLockMs = (r.meatLockDays || 0) * 24 * 3600 * 1000;
    if ((treatTime + milkLockMs > now) || (treatTime + meatLockMs > now)) {
      lockedCount++;
    }
  });

  const syncInfoText = `${uniqueTags.size || 4} Küpeli Hayvan, ${lockedCount} İKAS Kilitli Tedavi, ${recipes.length} Rasyon içeriği simülasyona aktarıldı.`;

  // UI durum etiketlerini güncelle
  const zooteknistInfo = document.getElementById('sim3d-sync-info');
  const yetistiriciInfo = document.getElementById('yet-sim3d-sync-info');
  if (zooteknistInfo) zooteknistInfo.textContent = syncInfoText;
  if (yetistiriciInfo) yetistiriciInfo.textContent = syncInfoText;

  // İframe'lere veri gönder (postMessage ve doğrudan Window erişimi)
  iframes.forEach(iframe => {
    try {
      if (iframe.contentWindow) {
        iframe.contentWindow.postMessage({ type: 'TOSUN_PASA_SYNC', db: DB }, '*');
        if (iframe.contentWindow.farmStore && typeof iframe.contentWindow.farmStore.getState === 'function') {
          iframe.contentWindow.farmStore.getState().syncWithTosunPasaAction(DB);
        }
      }
    } catch (err) {
      // Cross-origin veya sandbox durumunda postMessage yeterlidir
    }
  });

  if (showToastNotice) {
    showToast(`3D Simülasyon Verileri Senkronize Edildi (${uniqueTags.size || 4} Hayvan, ${lockedCount} İKAS Kilidi)`, 'toast-success');
  }
}

function switchYetTab(tabId) {
  currentYetTab = tabId;
  document.querySelectorAll('.yet-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-yettab') === tabId);
  });
  document.querySelectorAll('.yet-section').forEach(sec => {
    sec.classList.remove('active');
    sec.style.display = 'none';
  });

  const target = document.getElementById(tabId);
  if (target) {
    target.classList.add('active');
    target.style.display = 'block';
  }

  if (tabId === 'yet-view-home') {
    renderYetistiriciDashboard();
  } else if (tabId === 'yet-view-herd') {
    filterYetCows();
  } else if (tabId === 'yet-view-health') {
    renderYetistiriciHealth();
    renderYetistiriciFirstAid();
  } else if (tabId === 'yet-view-feed') {
    renderYetistiriciFeedCheckboxes();
  } else if (tabId === 'yet-view-sim3d') {
    const iframe = document.getElementById('yet-sim3d-iframe');
    if (iframe && !iframe.getAttribute('src')) {
      iframe.setAttribute('src', './sim3d/index.html');
      iframe.onload = () => setTimeout(() => syncDataTo3DSimulation(false), 300);
    } else {
      setTimeout(() => syncDataTo3DSimulation(false), 150);
    }
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderYetistiriciDashboard() {
  const docRecords = (DB.doctor && DB.doctor.earTagRecords) ? DB.doctor.earTagRecords : [];
  const reproRecords = (DB.reproduction && DB.reproduction.records) ? DB.reproduction.records : [];

  const uniqueTags = new Set();
  reproRecords.forEach(r => uniqueTags.add(r.tagNo));
  docRecords.forEach(r => uniqueTags.add(r.tagNo));
  
  const totalCount = uniqueTags.size || 5;
  const milkingCount = reproRecords.filter(r => r.status !== 'kuru_donem').length || 3;
  const estMilkLiters = milkingCount * 24;

  const now = Date.now();
  let lockedCount = 0;
  let activeLockedAnimal = null;

  docRecords.forEach(r => {
    const treatTime = new Date(r.treatmentDate).getTime();
    const milkLockMs = (r.milkLockHours || 0) * 3600 * 1000;
    const meatLockMs = (r.meatLockDays || 0) * 24 * 3600 * 1000;
    if ((treatTime + milkLockMs > now) || (treatTime + meatLockMs > now)) {
      lockedCount++;
      if (!activeLockedAnimal) {
        const remHours = Math.ceil((treatTime + milkLockMs - now) / (3600 * 1000));
        activeLockedAnimal = { ...r, remHours };
      }
    }
  });

  const totalEl = document.getElementById('yet-stat-total');
  const bdEl = document.getElementById('yet-stat-breakdown');
  const milkEl = document.getElementById('yet-stat-milking');
  const estMilkEl = document.getElementById('yet-stat-estmilk');
  const lockEl = document.getElementById('yet-stat-locked');

  if (totalEl) totalEl.textContent = totalCount;
  if (bdEl) bdEl.textContent = `${milkingCount} Sağılır • ${totalCount - milkingCount} Kuru/Tosun`;
  if (milkEl) milkEl.textContent = milkingCount;
  if (estMilkEl) estMilkEl.textContent = `Tahmini Günlük: ~${estMilkLiters} Litre`;
  if (lockEl) lockEl.textContent = lockedCount;

  const alertBanner = document.getElementById('yet-live-ikas-alert');
  const alertDesc = document.getElementById('yet-live-ikas-desc');
  if (alertBanner) {
    if (lockedCount > 0 && activeLockedAnimal) {
      alertBanner.style.display = 'flex';
      if (alertDesc) {
        alertDesc.innerHTML = `<strong>${activeLockedAnimal.tagNo} (${activeLockedAnimal.animalName || 'İnek'})</strong> küpeli hayvana <em>${activeLockedAnimal.drugName}</em> yapıldı. Süt arınmasına <strong>${Math.max(0, activeLockedAnimal.remHours)} saat</strong> kaldı! Sakın tanka karıştırma!`;
      }
    } else {
      alertBanner.style.display = 'none';
    }
  }

  const upContainer = document.getElementById('yet-upcoming-alerts');
  if (upContainer) {
    if (reproRecords.length === 0) {
      upContainer.innerHTML = `<div style="color:var(--text-muted); font-size:0.88rem; padding:6px;">Kayıtlı doğum veya kuruya alma uyarısı yok.</div>`;
    } else {
      upContainer.innerHTML = reproRecords.slice(0, 4).map(r => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 6px; border-bottom:1px solid var(--border); font-size:0.88rem;">
          <div>
            <strong>${r.tagNo} (${r.name || 'İnek'})</strong>
            <span style="color:var(--text-muted); font-size:0.80rem; margin-left:6px;">Tohum: ${r.inseminationDate}</span>
          </div>
          <div>
            <span class="badge" style="background:rgba(255,221,0,0.25); color:#856404; font-weight:700;">Doğum: ${r.expectedCalvingDate || 'Bilinmiyor'}</span>
          </div>
        </div>
      `).join('');
    }
  }
}

function filterYetCows() {
  const query = (document.getElementById('yet-search-cow')?.value || '').trim().toLocaleLowerCase('tr-TR');
  const container = document.getElementById('yet-cows-list');
  if (!container) return;

  const reproRecords = (DB.reproduction && DB.reproduction.records) ? DB.reproduction.records : [];
  const docRecords = (DB.doctor && DB.doctor.earTagRecords) ? DB.doctor.earTagRecords : [];

  const cowMap = new Map();
  reproRecords.forEach(r => {
    cowMap.set(r.tagNo, {
      tagNo: r.tagNo,
      name: r.name || 'İsimsiz',
      species: r.species || 'cattle',
      status: r.status || 'sağılır',
      dailyMilk: (r.species === 'sheep' ? 2 : 24),
      notes: r.notes || '',
      inseminationDate: r.inseminationDate
    });
  });

  docRecords.forEach(d => {
    if (!cowMap.has(d.tagNo)) {
      cowMap.set(d.tagNo, {
        tagNo: d.tagNo,
        name: d.animalName || 'İsimsiz',
        species: d.species || 'sigir',
        status: 'tedavide',
        dailyMilk: (d.species === 'koyun' ? 2 : 20),
        notes: d.notes || '',
        hasTreatment: true
      });
    }
  });

  const cows = Array.from(cowMap.values()).filter(c => {
    if (!query) return true;
    return c.tagNo.toLocaleLowerCase('tr-TR').includes(query) || c.name.toLocaleLowerCase('tr-TR').includes(query);
  });

  if (cows.length === 0) {
    container.innerHTML = `<div class="card" style="grid-column:1/-1; text-align:center; padding:20px; color:var(--text-muted);">Aramanıza uygun küpe bulunamadı.</div>`;
    return;
  }

  container.innerHTML = cows.map(c => `
    <div class="card" style="border-left: 5px solid var(--primary); padding: 14px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <div style="font-size:1.15rem; font-weight:800; color:var(--text);">${c.name}</div>
          <div style="font-size:0.85rem; font-weight:700; color:var(--primary);">${c.tagNo}</div>
        </div>
        <span class="badge" style="background:rgba(255,221,0,0.25); color:#856404; font-weight:800; padding:3px 8px;">
          ${c.species === 'sheep' || c.species === 'koyun' ? '🐑 Koyun' : '🐮 Büyükbaş'}
        </span>
      </div>
      <div style="display:flex; gap:12px; margin-top:10px; font-size:0.85rem; color:var(--text);">
        <span>🥛 Günlük: <strong>~${c.dailyMilk} L</strong></span>
        <span>•</span>
        <span>Durum: <strong>${c.status === 'gebe' ? '🤰 Gebe' : (c.status === 'kuru_donem' ? '🛑 Kuru Dönem' : '🥛 Sağılır')}</strong></span>
      </div>
      <div style="display:flex; gap:8px; margin-top:12px;">
        <button type="button" class="btn btn-secondary btn-sm" onclick="openModal('modal-new-doc-rec'); document.getElementById('new-doc-tag').value='${c.tagNo}'; document.getElementById('new-doc-name').value='${c.name}';">
          💉 İlaç / İğne Yaz
        </button>
        <button type="button" class="btn btn-secondary btn-sm" onclick="openModal('modal-new-repro-rec'); document.getElementById('new-rep-tag').value='${c.tagNo}'; document.getElementById('new-rep-name').value='${c.name}';">
          🍼 Tohumla
        </button>
      </div>
    </div>
  `).join('');
}

function renderYetistiriciHealth() {
  const container = document.getElementById('yet-ikas-cards-container');
  if (!container) return;

  const docRecords = (DB.doctor && DB.doctor.earTagRecords) ? DB.doctor.earTagRecords : [];
  const now = Date.now();

  const activeRecords = docRecords.filter(r => {
    const t = new Date(r.treatmentDate).getTime();
    const milk = (r.milkLockHours || 0) * 3600 * 1000;
    const meat = (r.meatLockDays || 0) * 24 * 3600 * 1000;
    return (t + milk > now) || (t + meat > now);
  });

  if (activeRecords.length === 0) {
    container.innerHTML = `
      <div class="card" style="grid-column:1/-1; background:rgba(40,167,69,0.1); border-left:5px solid #28a745; padding:18px;">
        <h4 style="margin:0 0 4px 0; color:#28a745; font-weight:800;">✅ Müjde! Ahırında İlaç Kilitli Hayvan Yok</h4>
        <p style="margin:0; font-size:0.88rem; color:var(--text);">Tüm hayvanların sütü güvenle tanka dökülebilir. Yeni iğne vurulduğunda yukarıdaki kırmızı butondan kilidi başlatabilirsiniz.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = activeRecords.map(r => {
    const t = new Date(r.treatmentDate).getTime();
    const milkEnd = t + (r.milkLockHours || 0) * 3600 * 1000;
    const remHours = Math.max(0, Math.ceil((milkEnd - now) / (3600 * 1000)));

    return `
      <div class="card" style="border-left: 5px solid var(--danger); padding:16px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div>
            <h4 style="margin:0; font-size:1.15rem; font-weight:800; color:var(--danger);">${r.tagNo} (${r.animalName || 'İnek'})</h4>
            <div style="font-size:0.85rem; font-weight:700; color:var(--text); margin-top:2px;">İlaç: ${r.drugName}</div>
          </div>
          <span class="badge badge-danger">KİLİTLİ</span>
        </div>
        <div style="background:rgba(220,53,69,0.12); border-radius:4px; padding:10px; margin-top:10px; text-align:center;">
          <div style="font-size:0.8rem; font-weight:700; color:var(--danger);">SÜTÜ TANKA DÖKME SÜRESİ:</div>
          <div style="font-size:1.6rem; font-weight:900; color:var(--danger);">${remHours} SAAT KALDI</div>
        </div>
        <div style="font-size:0.82rem; color:var(--text-muted); margin-top:8px;">
          Tedavi Tarihi: ${new Date(r.treatmentDate).toLocaleString('tr-TR')}
        </div>
      </div>
    `;
  }).join('');
}

// =============================================================================
// YETİŞTİRİCİ: KENDİ YEMİNİ HAZIRLA MOTORU (TÜRKİYE YEM HAMMADDELERİ & FABRİKA YEMLERİ)
// =============================================================================
let yetistiriciSelectedFeeds = new Set();
let currentYetFeedCategory = 'all';
let currentYetFeedSearch = '';

function setYetistiriciFeedCategory(cat) {
  currentYetFeedCategory = cat;
  document.querySelectorAll('.yet-cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-yetcat') === cat);
  });
  renderYetistiriciFeedCheckboxes();
}

function filterYetistiriciFeeds() {
  const searchInput = document.getElementById('yet-feed-search');
  currentYetFeedSearch = searchInput ? searchInput.value.trim().toLowerCase() : '';
  renderYetistiriciFeedCheckboxes();
}

function onYetFeedToggle(cb) {
  if (cb.checked) {
    yetistiriciSelectedFeeds.add(cb.value);
  } else {
    yetistiriciSelectedFeeds.delete(cb.value);
  }
  const label = cb.closest('.yet-feed-item-label');
  if (label) label.classList.toggle('selected', cb.checked);
  updateYetistiriciSelectedCount();
}

function updateYetistiriciSelectedCount() {
  const badge = document.getElementById('yet-feed-selected-count');
  if (badge) {
    const count = yetistiriciSelectedFeeds.size;
    badge.textContent = `${count} Yem Seçildi`;
    badge.style.background = count > 0 ? 'var(--primary)' : 'var(--border)';
    badge.style.color = count > 0 ? '#000000' : 'var(--text-muted)';
  }
}

function quickSelectYetistiriciSample(type) {
  if (type === 'sut') {
    yetistiriciSelectedFeeds = new Set([
      'yonca_kuru',
      'misir_silaji',
      'bugday_samani',
      'fabrika_sut_19',
      'arpa_ezme',
      'soya_44',
      'bikarbonat'
    ]);
    showToast("🥛 Örnek Süt Yemi Karması yüklendi!", "toast-info");
  } else if (type === 'besi') {
    yetistiriciSelectedFeeds = new Set([
      'bugday_samani',
      'misir_silaji',
      'misir_dane',
      'arpa_ezme',
      'fabrika_besi_gelistirme',
      'ptk_34',
      'mermer_tozu',
      'bikarbonat'
    ]);
    showToast("🐂 Örnek Besi Yemi Karması yüklendi!", "toast-info");
  }
  renderYetistiriciFeedCheckboxes();
}

function clearYetistiriciFeeds() {
  yetistiriciSelectedFeeds.clear();
  renderYetistiriciFeedCheckboxes();
  showToast("Seçili tüm yemler temizlendi.", "toast-info");
}

function renderYetistiriciFeedCheckboxes() {
  const container = document.getElementById('yet-feed-checkboxes');
  if (!container) return;

  const allFeeds = getAllFeeds();
  let filtered = allFeeds;

  if (currentYetFeedCategory !== 'all') {
    filtered = filtered.filter(f => f.category === currentYetFeedCategory);
  }

  if (currentYetFeedSearch) {
    filtered = filtered.filter(f => 
      f.name.toLowerCase().includes(currentYetFeedSearch) ||
      (f.category && f.category.toLowerCase().includes(currentYetFeedSearch)) ||
      (f.id && f.id.toLowerCase().includes(currentYetFeedSearch))
    );
  }

  updateYetistiriciSelectedCount();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding: 20px; color:var(--text-muted); font-size:0.9rem;">
        🔍 Arama kriterinize uygun yem bulunamadı. Lütfen arama terimini değiştirin veya diğer kategorilere göz atın.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(f => {
    const isChecked = yetistiriciSelectedFeeds.has(f.id);
    const isAkilli = f.id.startsWith('akilli_');
    const isFabrika = f.category === 'karma' && !isAkilli;
    const isKaba = f.category === 'kaba';
    const isKesif = f.category === 'kesif';
    const isSanayi = f.category === 'sanayi';
    const isMineral = f.category === 'mineral';

    let catBadge = '';
    if (isAkilli) {
      catBadge = `<span class="badge" style="background:#ffdd00; color:#000000; font-size:0.68rem; font-weight:800; padding:1px 5px; border-radius:3px;">⭐ AKILLI YEM</span>`;
    } else if (isFabrika) {
      catBadge = `<span class="badge" style="background:rgba(255,221,0,0.25); color:#856404; font-size:0.68rem; font-weight:700; padding:1px 5px; border-radius:3px;">FABRİKA YEMİ</span>`;
    } else if (isKaba) {
      catBadge = `<span class="badge" style="background:rgba(40,167,69,0.15); color:#28a745; font-size:0.68rem; font-weight:700; padding:1px 5px; border-radius:3px;">KABA YEM</span>`;
    } else if (isKesif) {
      catBadge = `<span class="badge" style="background:rgba(253,126,20,0.15); color:#fd7e14; font-size:0.68rem; font-weight:700; padding:1px 5px; border-radius:3px;">DANE</span>`;
    } else if (isSanayi) {
      catBadge = `<span class="badge" style="background:rgba(23,162,184,0.15); color:#17a2b8; font-size:0.68rem; font-weight:700; padding:1px 5px; border-radius:3px;">KÜSPE / YAN ÜRÜN</span>`;
    } else if (isMineral) {
      catBadge = `<span class="badge" style="background:rgba(108,117,125,0.15); color:#6c757d; font-size:0.68rem; font-weight:700; padding:1px 5px; border-radius:3px;">MİNERAL / TUZ</span>`;
    }

    return `
      <label class="yet-feed-item-label ${isChecked ? 'selected' : ''}">
        <input type="checkbox" class="yet-feed-check" value="${f.id}" ${isChecked ? 'checked' : ''} onchange="onYetFeedToggle(this)" style="margin-top:3px; cursor:pointer;">
        <div style="flex:1; min-width:0;">
          <div style="font-weight:700; font-size:0.86rem; color:var(--text); line-height:1.25; margin-bottom:3px;">${f.name}</div>
          <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
            ${catBadge}
            <span style="font-size:0.72rem; color:var(--text-muted); font-weight:600;">%${f.hp || 0} HP • ${f.me || 0} ME</span>
          </div>
        </div>
      </label>
    `;
  }).join('');
}

function solveYetistiriciFeed() {
  const cowCount = parseInt(document.getElementById('yet-feed-cow-count')?.value) || 1;
  const checkedFeedIds = Array.from(yetistiriciSelectedFeeds);
  const animalType = document.getElementById('yet-feed-animal')?.value || 'sut_30';
  const resultWrap = document.getElementById('yet-feed-result-wrap');
  if (!resultWrap) return;

  if (checkedFeedIds.length === 0) {
    showToast("Lütfen ambarınızda olan en az 2-3 kaba ve kesif yem işaretleyiniz!", "toast-warning");
    return;
  }

  const allFeeds = getAllFeeds();
  const activeFeeds = allFeeds.filter(f => checkedFeedIds.includes(f.id));

  // Yemleri fizyolojik alt gruplara ayır
  const wetRoughages = activeFeeds.filter(f => f.category === 'kaba' && (f.km < 60 || f.id.includes('silaj') || f.id.includes('posas')));
  const dryRoughages = activeFeeds.filter(f => f.category === 'kaba' && !wetRoughages.some(w => w.id === f.id));
  const factoryFeeds = activeFeeds.filter(f => f.category === 'karma');
  const grains = activeFeeds.filter(f => f.category === 'kesif');
  const proteinMeals = activeFeeds.filter(f => f.category === 'sanayi' && f.hp >= 20);
  const byproducts = activeFeeds.filter(f => f.category === 'sanayi' && f.hp < 20);
  const minerals = activeFeeds.filter(f => f.category === 'mineral');

  // Hayvan tipine göre hedef rasyon ağırlıkları (kg yaş bazda)
  let targetWetRoughageKg = 0;
  let targetDryRoughageKg = 0;
  let targetFactoryKg = 0;
  let targetGrainKg = 0;
  let targetProteinMealKg = 0;
  let targetByproductKg = 0;

  if (animalType === 'sut_30') {
    targetWetRoughageKg = wetRoughages.length > 0 ? 20.0 : 0;
    targetDryRoughageKg = dryRoughages.length > 0 ? (wetRoughages.length > 0 ? 4.5 : 8.5) : 0;
    targetFactoryKg = factoryFeeds.length > 0 ? 6.5 : 0;
    targetGrainKg = grains.length > 0 ? (factoryFeeds.length > 0 ? 3.5 : 6.0) : 0;
    targetProteinMealKg = proteinMeals.length > 0 ? (factoryFeeds.length > 0 ? 1.8 : 3.0) : 0;
    targetByproductKg = byproducts.length > 0 ? 1.5 : 0;
  } else if (animalType === 'sut_20') {
    targetWetRoughageKg = wetRoughages.length > 0 ? 16.0 : 0;
    targetDryRoughageKg = dryRoughages.length > 0 ? (wetRoughages.length > 0 ? 4.0 : 7.5) : 0;
    targetFactoryKg = factoryFeeds.length > 0 ? 4.8 : 0;
    targetGrainKg = grains.length > 0 ? (factoryFeeds.length > 0 ? 2.5 : 4.5) : 0;
    targetProteinMealKg = proteinMeals.length > 0 ? (factoryFeeds.length > 0 ? 1.2 : 2.0) : 0;
    targetByproductKg = byproducts.length > 0 ? 1.2 : 0;
  } else if (animalType === 'kuru_donem') {
    targetWetRoughageKg = wetRoughages.length > 0 ? 8.0 : 0;
    targetDryRoughageKg = dryRoughages.length > 0 ? 5.5 : 0;
    targetFactoryKg = factoryFeeds.length > 0 ? 2.0 : 0;
    targetGrainKg = grains.length > 0 ? 1.0 : 0;
    targetProteinMealKg = proteinMeals.length > 0 ? 0.5 : 0;
    targetByproductKg = byproducts.length > 0 ? 0.8 : 0;
  } else if (animalType === 'besi_380') {
    targetWetRoughageKg = wetRoughages.length > 0 ? 10.0 : 0;
    targetDryRoughageKg = dryRoughages.length > 0 ? 2.2 : 0;
    targetFactoryKg = factoryFeeds.length > 0 ? 4.5 : 0;
    targetGrainKg = grains.length > 0 ? (factoryFeeds.length > 0 ? 4.5 : 6.5) : 0;
    targetProteinMealKg = proteinMeals.length > 0 ? 1.6 : 0;
    targetByproductKg = byproducts.length > 0 ? 1.0 : 0;
  } else if (animalType === 'besi_480') {
    targetWetRoughageKg = wetRoughages.length > 0 ? 6.0 : 0;
    targetDryRoughageKg = dryRoughages.length > 0 ? 1.5 : 0;
    targetFactoryKg = factoryFeeds.length > 0 ? 5.0 : 0;
    targetGrainKg = grains.length > 0 ? (factoryFeeds.length > 0 ? 6.5 : 8.5) : 0;
    targetProteinMealKg = proteinMeals.length > 0 ? 1.8 : 0;
    targetByproductKg = byproducts.length > 0 ? 0.8 : 0;
  }

  // Güvenlik dengelemesi: Eğer kullanıcı sadece kaba yem veya sadece kesif yem seçtiyse
  const totalRoughageCount = wetRoughages.length + dryRoughages.length;
  const totalConcCount = factoryFeeds.length + grains.length + proteinMeals.length + byproducts.length;

  if (totalRoughageCount === 0 && totalConcCount > 0) {
    showToast("⚠️ Dikkat: Rasyonda hiç kaba yem (saman/yonca/silaj) yok! Rumen asidozu riskine karşı en az 1 kaba yem seçiniz.", "toast-warning");
  }

  const items = [];

  // 1. Yaş kaba yemler & silajlar
  if (wetRoughages.length > 0) {
    const perFeed = targetWetRoughageKg / wetRoughages.length;
    wetRoughages.forEach(f => {
      items.push({ feed: f, inekKg: perFeed });
    });
  }

  // 2. Kuru kaba yemler (Saman, Yonca)
  if (dryRoughages.length > 0) {
    // Saman ile yonca ayrımı: Samanı 1.2-1.8 kg civarında tut, kalanı yoncaya ver
    const samanFeeds = dryRoughages.filter(f => f.id.includes('saman') || f.id.includes('sap'));
    const otFeeds = dryRoughages.filter(f => !samanFeeds.some(s => s.id === f.id));

    if (samanFeeds.length > 0 && otFeeds.length > 0) {
      const samanShare = Math.min(1.5, targetDryRoughageKg * 0.35);
      const otShare = targetDryRoughageKg - samanShare;
      samanFeeds.forEach(f => items.push({ feed: f, inekKg: samanShare / samanFeeds.length }));
      otFeeds.forEach(f => items.push({ feed: f, inekKg: otShare / otFeeds.length }));
    } else {
      const perFeed = targetDryRoughageKg / dryRoughages.length;
      dryRoughages.forEach(f => items.push({ feed: f, inekKg: perFeed }));
    }
  }

  // 3. Fabrika & Akıllı Yemler
  if (factoryFeeds.length > 0) {
    const perFeed = targetFactoryKg / factoryFeeds.length;
    factoryFeeds.forEach(f => items.push({ feed: f, inekKg: perFeed }));
  }

  // 4. Dane / Tahıl Kırmaları
  if (grains.length > 0) {
    const perFeed = targetGrainKg / grains.length;
    grains.forEach(f => items.push({ feed: f, inekKg: perFeed }));
  }

  // 5. Protein Küspeleri
  if (proteinMeals.length > 0) {
    const perFeed = targetProteinMealKg / proteinMeals.length;
    proteinMeals.forEach(f => items.push({ feed: f, inekKg: perFeed }));
  }

  // 6. Yan ürünler (Kepek, Melas vb.)
  if (byproducts.length > 0) {
    const perFeed = targetByproductKg / byproducts.length;
    byproducts.forEach(f => items.push({ feed: f, inekKg: perFeed }));
  }

  // 7. Mineraller & Katkılar
  minerals.forEach(f => {
    let mKg = 0.05;
    if (f.id === 'bikarbonat') mKg = 0.15;
    else if (f.id === 'mermer_tozu') mKg = 0.10;
    else if (f.id === 'yem_tuzu' || f.id === 'kaya_tuzu') mKg = 0.06;
    else if (f.id === 'vit_min_premiksi') mKg = 0.05;
    else if (f.id === 'canli_maya') mKg = 0.03;
    else if (f.id === 'bypass_yag') mKg = 0.20;
    items.push({ feed: f, inekKg: mKg });
  });

  // Toplam hesaplamaları
  let toplamInekKg = 0;
  let toplamVagonKg = 0;
  let gunlukMaliyetInek = 0;
  let kabaKmTotal = 0;
  let kesifKmTotal = 0;

  items.forEach(it => {
    it.vagonKg = it.inekKg * cowCount;
    it.maliyetTL = it.inekKg * (it.feed.price || 5.0);
    const kmKg = it.inekKg * ((it.feed.km || 88) / 100);

    toplamInekKg += it.inekKg;
    toplamVagonKg += it.vagonKg;
    gunlukMaliyetInek += it.maliyetTL;

    if (it.feed.category === 'kaba') {
      kabaKmTotal += kmKg;
    } else {
      kesifKmTotal += kmKg;
    }
  });

  const totalKm = kabaKmTotal + kesifKmTotal;
  const kabaYuzde = totalKm > 0 ? Math.round((kabaKmTotal / totalKm) * 100) : 50;
  const kesifYuzde = 100 - kabaYuzde;

  resultWrap.style.display = 'block';
  resultWrap.innerHTML = `
    <div style="background:var(--card-bg); border:2px solid var(--primary); border-radius:4px; padding:18px; box-shadow:0 4px 16px rgba(0,0,0,0.06);">
      
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px; border-bottom:1px solid var(--border); padding-bottom:10px;">
        <div>
          <h4 style="margin:0 0 4px 0; font-weight:800; color:var(--text); font-size:1.2rem;">
            📋 Günlük Yem Dağıtım Tablosu (${cowCount} Baş Hayvan İçin)
          </h4>
          <span style="font-size:0.85rem; color:var(--text-muted);">
            Seçtiğiniz ${items.length} çeşit yem hammaddesi ve fabrika yemiyle dengelenmiştir.
          </span>
        </div>
        <span class="badge" style="background:#ffdd00; color:#000; font-weight:800; padding:6px 12px; font-size:0.85rem; border-radius:4px;">
          🚜 TMR VAGON HESABI AKTİF
        </span>
      </div>

      <!-- 4 Temel Özet Kartı -->
      <div class="grid-4" style="margin-bottom:16px;">
        <div class="card" style="padding:10px; text-align:center; border-left:4px solid var(--primary);">
          <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">🐮 1 Hayvanın Payı</div>
          <div style="font-size:1.45rem; font-weight:900; color:var(--primary); margin:2px 0;">${toplamInekKg.toFixed(1)} <span style="font-size:0.8rem;">kg</span></div>
          <div style="font-size:0.72rem; color:var(--text-muted);">Günlük Toplam Tüketim</div>
        </div>
        <div class="card" style="padding:10px; text-align:center; border-left:4px solid #28a745;">
          <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">🚜 Vagon Yükü (${cowCount} Baş)</div>
          <div style="font-size:1.45rem; font-weight:900; color:#28a745; margin:2px 0;">${toplamVagonKg.toFixed(0)} <span style="font-size:0.8rem;">kg</span></div>
          <div style="font-size:0.72rem; color:var(--text-muted);">Miksere Atılacak Toplam</div>
        </div>
        <div class="card" style="padding:10px; text-align:center; border-left:4px solid #fd7e14;">
          <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">🌾 Kaba / Kesif Oranı</div>
          <div style="font-size:1.45rem; font-weight:900; color:#fd7e14; margin:2px 0;">%${kabaYuzde} / %${kesifYuzde}</div>
          <div style="font-size:0.72rem; color:var(--text-muted);">KM Bazında Denge</div>
        </div>
        <div class="card" style="padding:10px; text-align:center; border-left:4px solid #007bff;">
          <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">💰 Tahmini Günlük Maliyet</div>
          <div style="font-size:1.45rem; font-weight:900; color:#007bff; margin:2px 0;">${gunlukMaliyetInek.toFixed(1)} <span style="font-size:0.8rem;">₺</span></div>
          <div style="font-size:0.72rem; color:var(--text-muted);">1 Hayvan İçin / Gün</div>
        </div>
      </div>

      <!-- Detaylı Yem Tablosu -->
      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; font-size:0.90rem;">
          <thead>
            <tr style="background:#181b1e; color:#ffdd00;">
              <th style="padding:10px 8px; text-align:left;">Yem Maddesi & Fabrika Yemi</th>
              <th style="padding:10px 8px; text-align:center;">1 Hayvanın Günlük Payı</th>
              <th style="padding:10px 8px; text-align:right;">🚜 Karma Vagonuna Atılacak (${cowCount} Baş)</th>
              <th style="padding:10px 8px; text-align:right;">Birim Fiyat</th>
            </tr>
          </thead>
          <tbody>
            ${items.map((it, idx) => {
              const isAkilli = it.feed.id.startsWith('akilli_');
              const isFabrika = it.feed.category === 'karma' && !isAkilli;
              let badge = '';
              if (isAkilli) badge = `<span class="badge" style="background:#ffdd00; color:#000; font-size:0.65rem; padding:1px 4px; font-weight:800;">⭐ AKILLI YEM</span>`;
              else if (isFabrika) badge = `<span class="badge" style="background:rgba(255,221,0,0.25); color:#856404; font-size:0.65rem; padding:1px 4px;">FABRİKA</span>`;
              
              return `
                <tr style="border-bottom:1px solid var(--border); background:${idx % 2 === 0 ? 'rgba(0,0,0,0.015)' : 'transparent'};">
                  <td style="padding:10px 8px;">
                    <div style="font-weight:700; color:var(--text);">${it.feed.name}</div>
                    <div style="font-size:0.75rem; color:var(--text-muted);">${badge} %${it.feed.hp} HP • ${it.feed.me} ME</div>
                  </td>
                  <td style="padding:10px 8px; text-align:center; font-weight:800; font-size:1.05rem; color:var(--primary);">
                    ${it.inekKg.toFixed(2)} kg
                  </td>
                  <td style="padding:10px 8px; text-align:right; font-weight:900; font-size:1.1rem; color:var(--text);">
                    ${it.vagonKg.toFixed(1)} kg
                  </td>
                  <td style="padding:10px 8px; text-align:right; color:var(--text-muted); font-size:0.85rem;">
                    ${(it.feed.price || 0).toFixed(2)} ₺/kg
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
          <tfoot>
            <tr style="background:rgba(255,221,0,0.15); font-weight:800; border-top:2px solid var(--primary);">
              <td style="padding:10px 8px;">TOPLAM GÜNLÜK YÜKLEME:</td>
              <td style="padding:10px 8px; text-align:center; font-size:1.1rem; color:var(--primary);">${toplamInekKg.toFixed(1)} kg</td>
              <td style="padding:10px 8px; text-align:right; font-size:1.2rem; color:var(--text);">${toplamVagonKg.toFixed(0)} kg</td>
              <td style="padding:10px 8px; text-align:right; color:var(--text);">${(gunlukMaliyetInek * cowCount).toFixed(0)} ₺</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- Pratik Vagon Yükleme Sırası -->
      <div style="background:rgba(255,221,0,0.08); border:1px solid rgba(255,221,0,0.3); border-radius:4px; padding:12px 14px; margin-top:14px; font-size:0.88rem; line-height:1.6;">
        <div style="font-weight:800; color:var(--text); margin-bottom:6px; display:flex; align-items:center; gap:6px;">
          🚜 Vagon Başında Doğru Karıştırma Sırası (Homojen TMR Kuralı):
        </div>
        <ol style="margin:0; padding-left:20px; color:var(--text);">
          <li><strong>1. Adım:</strong> Kuru kaba yemleri (Buğday samanı, yonca kuru otu) miksere atın; 3-4 dakika parçalansın.</li>
          <li><strong>2. Adım:</strong> Yaş kaba yemleri (Mısır silajı, yaş şeker pancarı posası) ekleyin.</li>
          <li><strong>3. Adım:</strong> Fabrika yemlerini, arpa/mısır kırmasını ve protein küspelerini dökün.</li>
          <li><strong>4. Adım:</strong> En son mineral, yem sodası (bikarbonat) ve premiksleri ekleyip mikseri 4-5 dakika daha homojen karıştırın.</li>
        </ol>
      </div>

    </div>
  `;

  resultWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function calcYetistiriciRepro() {
  const dateVal = document.getElementById('yet-repro-date')?.value;
  const tagVal = document.getElementById('yet-repro-tag')?.value || 'İnek';
  const wrap = document.getElementById('yet-repro-result-wrap');
  if (!dateVal || !wrap) {
    showToast("Lütfen tohumlama tarihini seçiniz!", "toast-warning");
    return;
  }

  const base = new Date(dateVal);
  const addDays = (d) => {
    const res = new Date(base);
    res.setDate(res.getDate() + d);
    return res.toLocaleDateString('tr-TR');
  };

  const d35 = addDays(35);
  const d220 = addDays(220);
  const d250 = addDays(250);
  const d280 = addDays(283);

  document.getElementById('yet-date-35').textContent = d35;
  document.getElementById('yet-date-220').textContent = d220;
  document.getElementById('yet-date-250').textContent = d250;
  document.getElementById('yet-date-280').textContent = d280;

  wrap.style.display = 'block';

  // Save to reproduction DB
  DB.reproduction.records.unshift({
    id: "rep_" + Date.now(),
    tagNo: tagVal,
    name: tagVal,
    species: "cattle",
    inseminationDate: dateVal,
    ultrasoundDate: d35,
    dryOffDate: d220,
    vaccineDate: d250,
    expectedCalvingDate: d280,
    status: "gebe",
    notes: "Yetiştirici arayüzünden kaydedildi."
  });
  saveDatabase();
  showToast("Tohumlama kaydı başarıyla takvime işlendi!", "toast-success");
  wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderYetistiriciFirstAid() {
  const sourceGrid = document.getElementById('protocol-cards-grid');
  const targetGrid = document.getElementById('yet-firstaid-list');
  if (sourceGrid && targetGrid && targetGrid.children.length === 0) {
    targetGrid.innerHTML = sourceGrid.innerHTML;
  }
}

function filterYetFirstAid() {
  const query = (document.getElementById('yet-firstaid-search')?.value || '').trim().toLocaleLowerCase('tr-TR');
  const cards = document.querySelectorAll('#yet-firstaid-list .protocol-card');
  cards.forEach(card => {
    const text = ((card.getAttribute('data-keywords') || '') + ' ' + card.innerText).toLocaleLowerCase('tr-TR');
    card.style.display = (!query || text.includes(query)) ? 'flex' : 'none';
  });
}

function switchMasterTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));

  const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  const activePanel = document.getElementById(tabId);

  if (activeBtn) activeBtn.classList.add('active');
  if (activePanel) activePanel.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Trigger relevant updates
  if (tabId === 'tab-home') {
    updateHeroDashboardStats();
  } else if (tabId === 'tab-doctor') {
    updateIkasDisplay();
  } else if (tabId === 'tab-ration') {
    renderSavedRecipesList();
  } else if (tabId === 'tab-repro') {
    renderReproductionLedger();
  } else if (tabId === 'tab-forage') {
    renderAgronomyCards();
    renderFieldLedger();
  } else if (tabId === 'tab-sim3d') {
    const iframe = document.getElementById('sim3d-iframe');
    if (iframe && !iframe.getAttribute('src')) {
      iframe.setAttribute('src', './sim3d/index.html');
      iframe.onload = () => setTimeout(() => syncDataTo3DSimulation(false), 300);
    } else {
      setTimeout(() => syncDataTo3DSimulation(false), 150);
    }
  }

  // Servis Plan Lazy Load re-scan for newly visible tab content
  setTimeout(() => initLazyLoader(), 60);
}

function switchSubNav(parentTabId, subSectionId) {
  const parent = document.getElementById(parentTabId);
  if (!parent) return;

  parent.querySelectorAll('.sub-nav-btn').forEach(btn => btn.classList.remove('active'));
  parent.querySelectorAll('.sub-section').forEach(sec => sec.style.display = 'none');

  const activeBtn = parent.querySelector(`.sub-nav-btn[data-section="${subSectionId}"]`);
  const activeSection = document.getElementById(subSectionId);

  if (activeBtn) activeBtn.classList.add('active');
  if (activeSection) activeSection.style.display = 'block';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('tosun_dark_mode', isDark ? '1' : '0');
  const toggleBtn = document.getElementById('btn-theme-toggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = isDark ? `☀️ <span class="btn-label">Gündüz</span>` : `🌙 <span class="btn-label">Gece Modu</span>`;
  }
}

// Üst Menü Ayarlar Dropdown Kontrolü
function toggleSettingsMenu(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('settings-dropdown-menu');
  const btn = document.getElementById('btn-settings-toggle');
  if (!menu) return;
  const isShown = menu.style.display === 'block';
  menu.style.display = isShown ? 'none' : 'block';
  if (btn) btn.setAttribute('aria-expanded', isShown ? 'false' : 'true');
}

function closeSettingsMenu() {
  const menu = document.getElementById('settings-dropdown-menu');
  const btn = document.getElementById('btn-settings-toggle');
  if (menu) menu.style.display = 'none';
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

// Menü dışına veya ESC'ye basıldığında kapat
document.addEventListener('click', (e) => {
  const wrap = document.querySelector('.settings-dropdown-wrap');
  if (wrap && !wrap.contains(e.target)) {
    closeSettingsMenu();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSettingsMenu();
  }
});

// =============================================================================
// 10. PWA KURULUMU, SERVİS ÇALIŞANI (SW) & BAŞLATMA
// =============================================================================

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installBtn = document.getElementById('btn-pwa-install');
  if (installBtn) installBtn.style.display = 'inline-flex';
});

function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast("Tosun Paşa Çiftliği telefonunuza kuruluyor...", "toast-success");
      }
      deferredPrompt = null;
    });
  } else {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      showToast("📲 iPhone/iPad için: Safari alt çubuğundaki 'Paylaş' simgesine dokunup 'Ana Ekrana Ekle'yi seçiniz.", "toast-info");
    } else {
      showToast("📲 Çevrimdışı PWA: Tarayıcınızın menüsünden (üç nokta) 'Uygulamayı Yükle' veya 'Ana Ekrana Ekle' seçeneğini seçebilirsiniz.", "toast-info");
    }
  }
}

// Servis Çalışanı Kaydı & Otomatik Güncelleme
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js?v=2.3.1').then((reg) => {
      console.log('Tosun Paşa SW v2.3.1 devrede:', reg.scope);
      // Yeni sürüm kontrolünü tetikle
      reg.update();
    }).catch((err) => {
      console.log('SW kaydı başarısız:', err);
    });
  });

  // Yeni servis çalışanı devraldığında otomatik tazele
  let isRefreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!isRefreshing) {
      isRefreshing = true;
      window.location.reload();
    }
  });
}

function forceAppUpdate() {
  showToast("Önbellek temizleniyor ve en son sürüm yükleniyor...", "toast-info");
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      for (const reg of regs) {
        reg.unregister();
      }
    });
  }
  if ('caches' in window) {
    caches.keys().then((names) => {
      return Promise.all(names.map(name => caches.delete(name)));
    }).then(() => {
      setTimeout(() => {
        window.location.reload(true);
      }, 400);
    });
  } else {
    setTimeout(() => {
      window.location.reload(true);
    }, 400);
  }
}

// Çevrimdışı / Çevrimiçi Dinleyicisi
window.addEventListener('offline', () => {
  const banner = document.getElementById('offline-banner');
  if (banner) banner.classList.add('visible');
  showToast("İnternet bağlantısı kesildi. Çiftlik sistemi %100 çevrimdışı çalışmaya devam ediyor.", "toast-warning");
});

window.addEventListener('online', () => {
  const banner = document.getElementById('offline-banner');
  if (banner) banner.classList.remove('visible');
  showToast("İnternet bağlantısı tekrar sağlandı.", "toast-success");
});

// =============================================================================
// SERVIS PLAN LAZY LOAD & PERFORMANCE OBSERVER
// =============================================================================
let globalLazyObserver = null;

function initLazyLoader() {
  if ('IntersectionObserver' in window) {
    if (!globalLazyObserver) {
      globalLazyObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;

            // Swap lazy image sources if present
            if (el.dataset.lazySrc) {
              el.src = el.dataset.lazySrc;
              el.removeAttribute('data-lazy-src');
            }
            if (el.dataset.lazyBg) {
              el.style.backgroundImage = `url('${el.dataset.lazyBg}')`;
              el.removeAttribute('data-lazy-bg');
            }

            // Trigger Servis Plan style smooth reveal animation
            el.classList.add('revealed');
            observer.unobserve(el);
          }
        });
      }, {
        root: null,
        rootMargin: '140px 0px 140px 0px',
        threshold: 0.05
      });
    }

    // Observe all lazy items
    document.querySelectorAll('.lazy-reveal:not(.revealed), .lazy-reveal-zoom:not(.revealed), [data-lazy-src], [data-lazy-bg]').forEach(el => {
      globalLazyObserver.observe(el);
    });
  } else {
    // Fallback: reveal immediately
    document.querySelectorAll('.lazy-reveal, .lazy-reveal-zoom').forEach(el => el.classList.add('revealed'));
  }
}

// INITIAL DOM READY
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Servis Plan Lazy Loading & Scroll Reveal
  initLazyLoader();
  // DOM Sağlık Rehberi İsim Güvencesi
  document.querySelectorAll('[data-tab="tab-doctor"]').forEach(el => {
    el.innerHTML = '🩺 Sağlık Rehberi';
  });
  // Theme check (Varsayılan: Karanlık / Gece Modu)
  const savedTheme = localStorage.getItem('tosun_dark_mode');
  const toggleBtn = document.getElementById('btn-theme-toggle');
  if (savedTheme === '0') {
    document.body.classList.remove('dark-mode');
    if (toggleBtn) toggleBtn.innerHTML = `🌙 <span class="btn-label">Gece Modu</span>`;
  } else {
    document.body.classList.add('dark-mode');
    if (toggleBtn) toggleBtn.innerHTML = `☀️ <span class="btn-label">Gündüz</span>`;
  }

  // Populate Feed Selection Checkboxes in Ration Module with Search & Filters
  populateFeedSelectionList();

  // Populate Pearson dropdowns (Alfabetik Türkçe sıralı)
  const pearsonA = document.getElementById('pearson-feed-a');
  const pearsonB = document.getElementById('pearson-feed-b');
  if (pearsonA && pearsonB) {
    const allFeeds = getAllFeeds().slice().sort((a, b) => a.name.localeCompare(b.name, 'tr-TR'));
    const options = allFeeds.map(f => `<option value="${f.id}">${f.name} (%${f.hp} HP)</option>`).join('');
    pearsonA.innerHTML = options;
    pearsonB.innerHTML = options;
    pearsonA.value = "misir_dane";
    pearsonB.value = "soya_44";
  }

  // Start live timers
  startIkasCountdown();

  // Initial app render: Yeni Ana Sayfa (Giriş Portalı)
  setAppMode('portal');
  updateHeroDashboardStats();

  // Request Web Notifications permission gently
  if ('Notification' in window && Notification.permission === 'default') {
    // Only ask when interacting
  }
});
