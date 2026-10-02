// Static data for ISL company profile website

export const services = [
  {
    icon: '🏗️',
    title: 'Depo Container',
    description:
      'Jaringan fasilitas kontainer strategis dengan sertifikasi khusus Halal dan Dangerous Goods. Tersedia di tiga lokasi utama dengan akses langsung ke terminal pelabuhan.',
    badge: 'Halal & DG Certified',
    num: '01',
  },
  {
    icon: '📋',
    title: 'Customs Clearance 24/7',
    description:
      'Pengurusan kepabeanan terintegrasi dengan sistem INSW & Bea Cukai. Mencakup pengurusan PIB, PEB, pemeriksaan fisik, izin teknis BPOM & SNI, serta tracking real-time.',
    badge: 'INSW Integrated',
    num: '02',
  },
  {
    icon: '❄️',
    title: 'Storage Solutions',
    description:
      'Dry, Cold, dan Heavy Equipment Storage skala besar. Cold storage dengan kapasitas frozen, chiller, dan cool room yang terkalibrasi untuk berbagai kebutuhan industri.',
    badge: 'Dry · Cold · Heavy',
    num: '03',
  },
  {
    icon: '🚛',
    title: 'Cargo Transportation',
    description:
      'Distribusi darat dengan armada komprehensif melintasi Jabodetabek. 23 unit kendaraan berbagai jenis termasuk trailer, blindvan, CDE, dan frozen truck.',
    badge: '23 Unit Armada',
    num: '04',
  },
  {
    icon: '🚢',
    title: 'Ocean Freight',
    description:
      'Pengiriman jalur laut domestik dan internasional. Didukung oleh Depo ISL Pasoso dengan integrasi kereta api langsung pada rute Jakarta–Semarang.',
    badge: 'Domestik & International',
    num: '05',
  },
  {
    icon: '⚙️',
    title: 'Heavy Equipment Handling',
    description:
      'Stripping, stuffing, assembling, dan pengiriman alat berat. Fasilitas outdoor 5.000 m² dengan reach stacker, forklift 3-15 ton, dan crane di Tanjung Priok.',
    badge: 'On-Chassis & Breakbulk',
    num: '06',
  },
];

export const depos = [
  {
    id: 'halal-hub',
    featured: true,
    badge: '⭐ Depo Utama · Halal & DG Certified',
    title: 'ISL Halal Hub — Tanjung Priok',
    description:
      'Fasilitas terlengkap untuk Dry, Isotanks, dan Reefer containers. Keamanan tingkat tinggi dengan sistem hydrant (water & dry), CCTV 24/7, dan akses langsung ke fasilitas pemadam kebakaran.',
    specs: [
      { value: '13.127 m²', label: 'Total Area' },
      { value: '3.600 m²', label: 'Cold Storage' },
      { value: '5.879 m²', label: 'Non-Plugging' },
      { value: '3.648 m²', label: 'Plugging Area' },
      { value: '700m', label: 'dari UTC' },
      { value: '1.8 km', label: 'dari Ter3' },
    ],
  },
  {
    id: 'pasoso',
    featured: false,
    badge: '🚂 Rail Integrated',
    title: 'ISL Pasoso',
    description:
      'Bersebelahan langsung dengan Stasiun Pasoso. Integrasi kereta api langsung untuk rute Jakarta–Semarang yang lebih efisien dan ramah lingkungan.',
    specs: [
      { value: '21.101 m²', label: 'Total Area' },
      { value: '1.4 km', label: 'dari Ter3' },
    ],
  },
  {
    id: 'arsa',
    featured: false,
    badge: '⚓ Domestic Port Hub',
    title: 'Depo ISL Arsa',
    description:
      'Pusat logistik pelabuhan domestik di Tanjung Priok. Pilihan terbaik untuk akses cepat ke port domestik.',
    specs: [
      { value: '9.506 m²', label: 'Total Area' },
      { value: '1.3 km', label: 'Kade 106' },
      { value: '1.7 km', label: 'Kade 100' },
    ],
  },
];

export const coldStorages = [
  {
    id: 'halal-cold',
    title: 'Halal Cold Storage',
    location: '📍 Jl. Sulawesi No.1, Tanjung Priok · 3.600 m²',
    temps: [
      { label: 'Cool Room', range: '16°C – 26°C', detail: '4 Chamber × 144 Ton' },
      { label: 'Chiller Room', range: '0°C – 8°C', detail: '4 Ch×144T + 4 Ch×240T' },
      { label: 'Frozen Room', range: '-15°C – -25°C', detail: '4 Chamber × 144 Ton' },
    ],
    badge: '✓ Halal Certified',
    extra: null,
  },
  {
    id: 'narogong',
    title: 'Narogong Cold Storage',
    location: '📍 Narogong, Kab. Bekasi · 9.500 m²',
    temps: [
      { label: 'Frozen Room', range: 'Skala Industri', detail: 'Kapasitas Besar' },
      { label: 'Chiller Room', range: 'Tersedia', detail: 'Kapasitas Industri' },
    ],
    badge: null,
    extra: '13.400 Posisi Pallet (PP)',
  },
];

export const fleet = [
  { icon: '🚚', count: 11, type: 'Trailer' },
  { icon: '🚐', count: 6, type: 'Blindvan' },
  { icon: '🚛', count: 2, type: 'CDE Long' },
  { icon: '🚚', count: 1, type: 'CDD Jumbo' },
  { icon: '❄️', count: 1, type: 'CDD Frozen' },
  { icon: '🚌', count: 1, type: 'CDE Standard' },
  { icon: '🧊', count: 1, type: 'Frozen Traga' },
  { icon: '🏆', count: 23, type: 'Total Unit', highlight: true },
];

export const hexCards = [
  { icon: '🏗️', label: 'Depo' },
  { icon: '🚢', label: 'Ocean Freight' },
  { icon: '📋', label: 'Customs' },
  { icon: '🚛', label: 'Transport' },
  { icon: '⭐', label: 'ISL HUB', highlight: true },
  { icon: '❄️', label: 'Cold Storage' },
  { icon: '⚙️', label: 'Heavy Equip' },
  { icon: '🏭', label: 'Storage' },
  { icon: '🚂', label: 'Kereta Api' },
];

export interface LogoItem {
  name: string;
  src: string;
  scale?: boolean;
  maxScale?: boolean;
  superScale?: boolean;
  ultraScale?: boolean;
  cleanBg?: boolean;
}

export const customsLogos: LogoItem[] = [
  { name: 'GEELY', src: '/customs clearance/geely.png', maxScale: true },
  { name: 'Milk Life', src: '/customs clearance/milk life.jpg', maxScale: true },
  { name: 'Kopi Tubruk Gadjah', src: '/customs clearance/kopi tubruk gadjah.png', maxScale: true },
  { name: 'SAVORIA', src: '/customs clearance/savoria.png', maxScale: true },
  { name: 'Hydro Plus', src: '/customs clearance/hydro plus.png', maxScale: true },
  { name: "FOX'S Coffee World", src: '/customs clearance/foxs coffe world.png', maxScale: true },
  { name: 'Delizio Caffino', src: '/customs clearance/caffino.webp' },
  { name: 'KRIZZI', src: '/customs clearance/krizzi.jpg', maxScale: true },
  { name: 'Sumber Kopi Prima', src: '/customs clearance/sumber kopi prima.webp' },
  { name: 'Prima Top Boga', src: '/customs clearance/prima top boga.png' },
  { name: 'Global Dairi Alami', src: '/customs clearance/global dairi alami.webp' },
];

export const depoLogos: LogoItem[] = [
  { name: 'CJ Logistics', src: '/customer depo/cj logistics.jpg', superScale: true },
  { name: 'BK Logistics Group', src: '/customer depo/bp logistics grup.avif', maxScale: true },
  { name: 'Cakraindo', src: '/customer depo/Cakraindo.jpg', maxScale: true },
  { name: 'ENEOS', src: '/customer depo/Eneos.png', maxScale: true },
  { name: 'BASF', src: '/customer depo/basf.png', superScale: true },
  { name: 'Indah Kiat', src: '/customer depo/indah kiat.webp', superScale: true },
  { name: 'Barry Callebaut', src: '/customer depo/barry.webp', ultraScale: true },
  { name: 'Henkel', src: '/customer depo/henkel.png', cleanBg: true, maxScale: true },
  { name: 'Smart Agribusiness', src: '/customer depo/smart.webp', superScale: true },
  { name: 'SANY', src: '/customer depo/sany.png' },
  { name: 'Sinarmas', src: '/customer depo/sinarmas.png', maxScale: true },
  { name: 'Michelin', src: '/customer depo/michelin.png', cleanBg: true, ultraScale: true },
  { name: 'Midea', src: '/customer depo/midea.jpg', maxScale: true },
  { name: 'Fonterra', src: '/customer depo/fonterra.png', maxScale: true },
  { name: 'MATTEL', src: '/customer depo/mattel.png', maxScale: true },
  { name: 'Sari Roti', src: '/customer depo/sari roti.webp', superScale: true },
  { name: 'Sarihusada / Nutricia', src: '/customer depo/sarihusada.png', maxScale: true },
  { name: 'MANE', src: '/customer depo/mane.webp', superScale: true },
  { name: 'AkzoNobel', src: '/customer depo/akzonobel.webp', maxScale: true },
  { name: 'PT Mitsui Indonesia', src: '/customer depo/mitsui.jpg', superScale: true },
  { name: 'LX Pantos', src: '/customer depo/LX Pantos.png', ultraScale: true },
  { name: 'ZOOMLION', src: '/customer depo/zoomlion.jpg' },
  { name: 'MattRoy Logistics', src: '/customer depo/mattroy.jpeg' },
  { name: 'KKV', src: '/customer depo/kkv.png' },
  { name: 'International (AkzoNobel)', src: '/customer depo/international an akzonobel brand.jpg' },
  { name: 'Bangun Putra Pesaka', src: '/customer depo/bangun Putra pesaka.jpg', maxScale: true },
  { name: 'Corinthian Doors', src: '/customer depo/corinthian doors.png', maxScale: true },
  { name: 'Kencana Pesaka Abadi', src: '/customer depo/kencana pesaka abadi.webp', maxScale: true },
  { name: 'Nippon Shokubai', src: '/customer depo/nippon shokubai.webp', maxScale: true },
  { name: 'Styrindo Mono Indonesia', src: '/customer depo/styrindo.jpg', maxScale: true },
  { name: 'Surabaya Bahari Logistindo', src: '/customer depo/surabaya bahari.webp', maxScale: true },
  { name: 'TOTAL', src: '/customer depo/total.png', maxScale: true },
  { name: 'ZINUS', src: '/customer depo/zinus.png', cleanBg: true, ultraScale: true },
  { name: 'Ben Line Agencies', src: '/customer depo/ben line.png', maxScale: true },
  { name: 'ASCC', src: '/customer depo/ascc.png', maxScale: true },
];

export const customsClients = [
  'GEELY',
  'Milk Life',
  'Kopi Tubruk Gadjah',
  'SAVORIA',
  'Hydro Plus',
  "FOX'S Coffee World",
  'Prima Top Boga',
  'Delizio Caffino',
  'KRIZZI',
  'Sumber Kopi Prima',
  'Global Dairi Alami',
];

export const depoClients = [
  'CJ Logistics',
  'BASF',
  'Indah Kiat',
  'Barry Callebaut',
  'Henkel',
  'Smart Agribusiness',
  'SANY',
  'Sinarmas Bio Energy',
  'Michelin',
  'Zinus',
  'Midea',
  'Fonterra',
  'MATTEL',
  'Sari Roti',
  'Nutricia',
  'Sojitz',
  'MANE',
  'AkzoNobel',
  'ENEOS',
  'PT Mitsui Indonesia',
  'LX Pantos',
  'ZOOMLION',
  'MattRoy Logistics',
  'MINISO',
  'KKV',
  'PT KAO Indonesia',
];

export const stats = [
  { target: 3, label: 'Depo Kontainer' },
  { target: 23, label: 'Unit Armada' },
  { target: 43734, label: 'M² Total Area' },
  { target: 24, label: 'Jam Customs Service' },
];
