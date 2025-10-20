export interface System {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
  // Optional override for gradient using hex colors
  gradientColors?: [string, string];
  // Optional proposal link (Google Drive)
  proposalUrl?: string;
}

export const systems: System[] = [
  {
    id: '1',
    title: 'Sistem Informasi Inventori',
    category: 'Enterprise',
    description: 'Solusi manajemen inventori yang powerful dengan fitur tracking real-time dan analytics mendalam',
    features: [
      'Real-time Inventory Tracking',
      'Advanced Analytics Dashboard',
      'Multi-warehouse Support',
      'Automated Stock Alerts',
    ],
    icon: '📦',
    gradient: 'from-blue-500 to-cyan-500',
    proposalUrl: 'https://drive.google.com/drive/folders/1mbn5o1lw9gjZT7vW3eeBfS_sf-3oql6a',
  },
  {
    id: '2',
    title: 'Point of Sales (POS)',
    category: 'Pro',
    description: 'Sistem kasir modern dengan integrasi payment gateway dan laporan penjualan komprehensif',
    features: [
      'Fast Transaction Processing',
      'Payment Gateway Integration',
      'Sales Report & Analytics',
      'Multi-user Access Control',
    ],
    icon: '💳',
    gradient: 'from-emerald-500 to-teal-500',
    proposalUrl: 'https://drive.google.com/drive/folders/17Y800ZhFTf4rBT9h8VpIFSAHogc3S0oo',
  },
  {
    id: '3',
    title: 'Sistem Informasi Sekolah',
    category: 'Enterprise',
    description: 'Platform manajemen sekolah terpadu untuk administrasi akademik, kesiswaan, dan keuangan yang efisien',
    features: [
      'Manajemen Data Siswa & Guru',
      'Sistem Penilaian & Raport Digital',
      'Absensi Online & Monitoring',
      'Pembayaran SPP & Keuangan',
    ],
    icon: '🎓',
    gradient: 'from-purple-500 to-pink-500',
    proposalUrl: 'https://drive.google.com/drive/folders/1IDZysP5C5FebnstTvKfv8eiEqJWbZG5N',
  },
  {
    id: '5',
    title: 'Sistem Informasi Desa',
    category: 'Enterprise',
    description: 'Platform manajemen desa terpadu untuk administrasi, pelayanan publik, keuangan, aset, dan data kependudukan.',
    features: [
      'Manajemen Data Penduduk & KK',
      'Layanan Surat Online (Domisili, SKTM, dsb.)',
      'Keuangan & APBDes (Anggaran, Realisasi, Laporan)',
      'Arsip & Inventaris Desa',
    ],
    icon: '🏘️',
    gradient: 'from-red-600 to-red-700',
    gradientColors: ['#dc2626', '#b91c1c'],
    proposalUrl: 'https://drive.google.com/drive/folders/1_PAaqrwuP37GU5LXsI-w909-yPB7g_3g',
  },
  {
    id: '4',
    title: 'Company Profile',
    category: 'Pro',
    description: 'Website company profile profesional dengan design modern, responsive, dan SEO-optimized untuk meningkatkan brand awareness',
    features: [
      'Modern & Responsive Design',
      'SEO Optimized',
      'Content Management System',
      'Contact Form Integration',
    ],
    icon: '🏢',
    gradient: 'from-orange-500 to-red-500',
    proposalUrl: 'https://drive.google.com/',
  },
];