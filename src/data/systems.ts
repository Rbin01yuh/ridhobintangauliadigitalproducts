export interface System {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
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
  },
];