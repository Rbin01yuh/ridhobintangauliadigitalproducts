export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  badges: Array<{
    text: string;
    type: 'verified' | 'bestseller' | 'promo' | 'new';
  }>;
  icon: string;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Template Landing Page',
    price: 'Rp 149.000',
    description: 'Hot',
    badges: [
      { text: 'Verified ✓', type: 'verified' },
      { text: 'Best Seller 🔥', type: 'bestseller' },
    ],
    icon: '🎨',
  },
  {
    id: '2',
    title: 'Digital Marketing E-Book',
    price: 'Rp 20.000',
    originalPrice: 'Rp 99.000',
    description: 'Promo',
    badges: [
      { text: 'Verified ✓', type: 'verified' },
      { text: 'PROMO 🎉', type: 'promo' },
    ],
    icon: '📚',
  },
  {
    id: '3',
    title: 'UI Kit Figma',
    price: 'Rp 20.000',
    originalPrice: 'Rp 149.000',
    description: 'Promo',
    badges: [
      { text: 'Verified ✓', type: 'verified' },
      { text: 'PROMO 🎉', type: 'promo' },
    ],
    icon: '🎯',
  },
  {
    id: '4',
    title: 'Jasa Joki Project Skripsi',
    price: 'Start from Rp 250.000',
    description: 'Custom - Spesialisasi: Sistem Pendukung Keputusan (SPK), Sistem Pakar, Sistem Informasi & Database',
    badges: [{ text: 'Custom 🛠️', type: 'new' }],
    icon: '💼',
  },
];