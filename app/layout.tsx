import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#06101e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// â”€â”€â”€ PRIMARY METADATA (SEO) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const metadata: Metadata = {
  metadataBase: new URL('https://indosukseslogistik.com'),

  title: {
    default: 'PT Indo Sukses Logistik â€” Depo Container & Cold Storage Tanjung Priok',
    template: '%s | PT Indo Sukses Logistik',
  },

  description:
    'PT Indo Sukses Logistik: penyedia jasa depo container halal, cold storage terkalibrasi, customs clearance 24/7, dan armada logistik di Pelabuhan Tanjung Priok, Jakarta Utara. Melayani seluruh Indonesia.',

  keywords: [
    // Brand
    'PT Indo Sukses Logistik', 'Indo Sukses Logistik', 'ISL Logistik', 'ISL Halal Hub',
    // Depo
    'depo container tanjung priok', 'depo container jakarta utara', 'depo container halal',
    'Depo ISL Pasoso', 'Depo ISL Arsa', 'depo container terdekat pelabuhan',
    'depo kontainer sertifikasi halal', 'depo dangerous goods',
    // Cold Storage
    'cold storage halal jakarta', 'cold storage terkalibrasi', 'cold storage narogong bekasi',
    'gudang beku tanjung priok', 'frozen room jakarta', 'chiller room jakarta',
    'cold storage 13400 pallet', 'cold storage 9500 m2',
    // Customs
    'customs clearance 24 jam', 'jasa kepabeanan tanjung priok',
    'pengurusan dokumen ekspor impor', 'freight forwarder jakarta',
    // Logistik
    'logistik jakarta', 'jasa logistik terintegrasi', 'ocean freight indonesia',
    'cargo transportation jabodetabek', 'armada truk logistik',
    'penanganan alat berat', 'storage alat berat tanjung priok',
    'kereta api logistik', 'rail freight indonesia',
    // Geo
    'logistik tanjung priok', 'logistik jakarta utara', 'logistik bekasi',
    'gudang logistik jabodetabek',
  ],

  authors: [{ name: 'PT Indo Sukses Logistik', url: 'https://indosukseslogistik.com' }],
  creator: 'PT Indo Sukses Logistik',
  publisher: 'PT Indo Sukses Logistik',
  category: 'Logistics & Supply Chain',

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'PT Indo Sukses Logistik â€” Depo Container & Cold Storage Tanjung Priok',
    description:
      'Infrastruktur logistik terintegrasi: Depo Halal Hub, Cold Storage 13.400 pallet, Customs Clearance 24/7, Armada Darat & Laut. Jl. Sulawesi No 1, Tanjung Priok, Jakarta Utara.',
    url: 'https://indosukseslogistik.com',
    siteName: 'PT Indo Sukses Logistik',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/ISL_logo.png',
        width: 1200,
        height: 630,
        alt: 'PT Indo Sukses Logistik â€” Solusi Logistik Terintegrasi Tanjung Priok',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'PT Indo Sukses Logistik â€” Depo Container & Cold Storage Tanjung Priok',
    description:
      'Depo Halal Hub, Cold Storage 13.400 pallet, Customs 24/7, Ocean Freight. Tanjung Priok & Bekasi.',
    images: ['/ISL_logo.png'],
  },

  icons: {
    icon: '/ISL_logo.png',
    shortcut: '/ISL_logo.png',
    apple: '/ISL_logo.png',
  },

  alternates: {
    canonical: 'https://indosukseslogistik.com',
    languages: { 'id-ID': 'https://indosukseslogistik.com' },
  },

  formatDetection: { telephone: true, email: true, address: true },
};

// â”€â”€â”€ SCHEMA.ORG JSON-LD â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://indosukseslogistik.com/#organization',
  name: 'PT Indo Sukses Logistik',
  alternateName: ['ISL Logistik', 'Indo Sukses Logistik', 'ISL'],
  url: 'https://indosukseslogistik.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://indosukseslogistik.com/ISL_logo.png',
    width: 512,
    height: 512,
  },
  image: 'https://indosukseslogistik.com/ISL_logo.png',
  description:
    'PT Indo Sukses Logistik adalah penyedia layanan logistik terintegrasi di Pelabuhan Tanjung Priok dengan spesialisasi depo container halal, cold storage terkalibrasi, customs clearance 24/7, dan armada transportasi.',
  foundingDate: '2010',
  foundingLocation: 'Jakarta Utara, Indonesia',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+62-821-3225-1222',
      email: 'cs@indosukseslogistik.com',
      availableLanguage: ['Indonesian', 'English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'market@indosukseslogistik.com',
    },
  ],
  sameAs: ['https://wa.me/6282132251222'],
  areaServed: { '@type': 'Country', name: 'Indonesia' },
};

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'WarehouseStore'],
  '@id': 'https://indosukseslogistik.com/#localbusiness',
  name: 'PT Indo Sukses Logistik â€” ISL Halal Hub',
  image: 'https://indosukseslogistik.com/ISL_logo.png',
  url: 'https://indosukseslogistik.com',
  telephone: '+62-821-3225-1222',
  email: 'cs@indosukseslogistik.com',
  priceRange: '$$',
  currenciesAccepted: 'IDR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Sulawesi No 1, Tanjung Priok',
    addressLocality: 'Jakarta Utara',
    addressRegion: 'DKI Jakarta',
    postalCode: '14310',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.1044,
    longitude: 106.8833,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  hasMap: 'https://maps.google.com/?q=-6.1044,106.8833',
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Sertifikasi', value: 'Halal & Dangerous Goods (DG)' },
    { '@type': 'PropertyValue', name: 'Jarak ke UTC', value: '700 m' },
    { '@type': 'PropertyValue', name: 'Jarak ke NPCT-1', value: '4,7 Km' },
    { '@type': 'PropertyValue', name: 'Jarak ke TPK Koja', value: '2,2 Km' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '48',
    bestRating: '5',
    worstRating: '1',
  },
};

const schemaServiceCatalog = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': 'https://indosukseslogistik.com/#services',
  name: 'Layanan Logistik Terintegrasi PT Indo Sukses Logistik',
  provider: { '@id': 'https://indosukseslogistik.com/#organization' },
  itemListElement: [
    {
      '@type': 'Service',
      name: 'Depo Container ISL Halal Hub (Tanjung Priok)',
      description: 'Depo container bersertifikasi Halal & Dangerous Goods di Tanjung Priok, jarak 700 m dari UTC. Kapasitas skala industri dengan CCTV 24/7.',
      serviceType: 'Container Depot',
      provider: { '@id': 'https://indosukseslogistik.com/#organization' },
      areaServed: { '@type': 'City', name: 'Jakarta Utara' },
    },
    {
      '@type': 'Service',
      name: 'Depo Container ISL Pasoso',
      description: 'Depo container strategis ISL Pasoso di kawasan Pelabuhan Tanjung Priok.',
      serviceType: 'Container Depot',
      provider: { '@id': 'https://indosukseslogistik.com/#organization' },
    },
    {
      '@type': 'Service',
      name: 'Depo Container ISL Arsa',
      description: 'Fasilitas depo container ISL Arsa di lingkungan Pelabuhan Tanjung Priok.',
      serviceType: 'Container Depot',
      provider: { '@id': 'https://indosukseslogistik.com/#organization' },
    },
    {
      '@type': 'Service',
      name: 'Halal Cold Storage Tanjung Priok',
      description: 'Cold storage terkalibrasi bersertifikasi Halal. Luas 3.600 mÂ². Cool Room 16-26Â°C, Chiller Room 0-8Â°C, Frozen Room -15 s/d -25Â°C.',
      serviceType: 'Cold Storage',
      provider: { '@id': 'https://indosukseslogistik.com/#organization' },
      areaServed: { '@type': 'City', name: 'Jakarta Utara' },
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Luas', value: '3.600 mÂ²' },
        { '@type': 'PropertyValue', name: 'Sertifikasi', value: 'Halal Certified' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Narogong Cold Storage Bekasi',
      description: 'Cold storage skala industri di Narogong, Kab. Bekasi. Luas 9.500 mÂ², kapasitas 13.400 posisi pallet.',
      serviceType: 'Cold Storage',
      provider: { '@id': 'https://indosukseslogistik.com/#organization' },
      areaServed: { '@type': 'City', name: 'Bekasi' },
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Luas', value: '9.500 mÂ²' },
        { '@type': 'PropertyValue', name: 'Kapasitas', value: '13.400 Posisi Pallet' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Customs Clearance 24/7',
      description: 'Pengurusan kepabeanan ekspor-impor 24 jam 7 hari di Pelabuhan Tanjung Priok. Dokumen lengkap, mitigasi risiko.',
      serviceType: 'Customs Broker',
      provider: { '@id': 'https://indosukseslogistik.com/#organization' },
    },
    {
      '@type': 'Service',
      name: 'Ocean Freight',
      description: 'Pengiriman kargo jalur laut domestik dan internasional dari Pelabuhan Tanjung Priok.',
      serviceType: 'Ocean Freight',
      provider: { '@id': 'https://indosukseslogistik.com/#organization' },
    },
    {
      '@type': 'Service',
      name: 'Cargo Transportation â€” Armada Darat & Kereta Api',
      description: 'Distribusi kargo darat menggunakan armada truk dan kereta api. Melayani Jabodetabek dan seluruh Indonesia.',
      serviceType: 'Freight Transportation',
      provider: { '@id': 'https://indosukseslogistik.com/#organization' },
    },
    {
      '@type': 'Service',
      name: 'Heavy Equipment Storage & Handling',
      description: 'Lapangan outdoor 5.000 mÂ² di Tanjung Priok. Reach Stacker, Forklift 3-15 Ton, Crane. Stripping, stuffing, assembling & pengiriman unit.',
      serviceType: 'Warehouse Storage',
      provider: { '@id': 'https://indosukseslogistik.com/#organization' },
    },
  ],
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apa itu PT Indo Sukses Logistik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PT Indo Sukses Logistik (ISL) adalah perusahaan logistik terintegrasi berkantor di Jl. Sulawesi No 1, Tanjung Priok, Jakarta Utara. ISL menyediakan layanan depo container halal, cold storage terkalibrasi, customs clearance 24/7, ocean freight, armada transportasi darat, dan penanganan alat berat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dimana lokasi depo container ISL Halal Hub?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ISL Halal Hub berlokasi di Jl. Sulawesi No 1, Tanjung Priok, Jakarta Utara â€” berjarak 700 m dari UTC (Upstream Terminal Container) dan 4,7 Km dari NPCT-1. Tersertifikasi Halal & Dangerous Goods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa kapasitas cold storage ISL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ISL memiliki dua cold storage: (1) Halal Cold Storage Tanjung Priok seluas 3.600 mÂ² dengan Cool Room, Chiller Room, dan Frozen Room; (2) Narogong Cold Storage Bekasi seluas 9.500 mÂ² kapasitas 13.400 posisi pallet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah ISL melayani customs clearance 24 jam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya, PT Indo Sukses Logistik menyediakan customs clearance 24 jam, 7 hari seminggu di Pelabuhan Tanjung Priok untuk dokumen ekspor-impor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana cara menghubungi PT Indo Sukses Logistik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hubungi ISL via WhatsApp +62-821-3225-1222, email cs@indosukseslogistik.com (customer service), atau market@indosukseslogistik.com (marketing & quotation). Tim kami siap 24/7.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apa saja depo container yang dioperasikan ISL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PT Indo Sukses Logistik mengoperasikan tiga depo: ISL Halal Hub (Tanjung Priok, sertifikasi Halal & DG), Depo ISL Pasoso (Tanjung Priok), dan Depo ISL Arsa (Tanjung Priok).',
      },
    },
    {
      '@type': 'Question',
      name: 'Apa layanan ISL untuk penanganan alat berat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ISL menyediakan lapangan outdoor 5.000 mÂ² di Tanjung Priok dengan Reach Stacker, Forklift 3-15 Ton, dan Crane. Layanan: bongkar muat on chasis, stripping & stuffing, assembling, dan pengiriman unit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah ISL melayani ocean freight dan kereta api?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya, ISL melayani ocean freight domestik dan internasional dari Tanjung Priok, serta angkutan kereta api sebagai alternatif distribusi darat jarak jauh ke seluruh Indonesia.',
      },
    },
  ],
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://indosukseslogistik.com/' },
    { '@type': 'ListItem', position: 2, name: 'Layanan', item: 'https://indosukseslogistik.com/#layanan' },
    { '@type': 'ListItem', position: 3, name: 'Depo Container', item: 'https://indosukseslogistik.com/#depo' },
    { '@type': 'ListItem', position: 4, name: 'Cold Storage', item: 'https://indosukseslogistik.com/#cold-storage' },
    { '@type': 'ListItem', position: 5, name: 'Kontak', item: 'https://indosukseslogistik.com/#kontak' },
  ],
};

// â”€â”€â”€ ROOT LAYOUT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" dir="ltr">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/ISL_logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/ISL_logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/ISL_logo.png" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* â”€â”€ GEO meta tags â”€â”€ */}
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Tanjung Priok, Jakarta Utara, Indonesia" />
        <meta name="geo.position" content="-6.1044;106.8833" />
        <meta name="ICBM" content="-6.1044, 106.8833" />

        {/* â”€â”€ Business meta â”€â”€ */}
        <meta name="classification" content="Logistics, Freight, Warehousing, Cold Storage" />
        <meta name="category" content="Business" />
        <meta name="coverage" content="Indonesia" />
        <meta name="distribution" content="global" />
        <meta name="language" content="Indonesian" />
        <meta name="revisit-after" content="7 days" />

        {/* â”€â”€ Schema.org JSON-LD: Organization â”€â”€ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
        {/* â”€â”€ Schema.org JSON-LD: LocalBusiness + GEO â”€â”€ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
        />
        {/* â”€â”€ Schema.org JSON-LD: Service Catalog â”€â”€ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaServiceCatalog) }}
        />
        {/* â”€â”€ Schema.org JSON-LD: FAQPage (AEO) â”€â”€ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
        />
        {/* â”€â”€ Schema.org JSON-LD: BreadcrumbList â”€â”€ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
