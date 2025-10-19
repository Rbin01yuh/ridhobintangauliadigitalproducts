import { ColorwaveBackground } from './components/ColorwaveBackground';
import { Header } from './components/Header';
import { SocialLinks } from './components/SocialLinks';
import { ProductCard } from './components/ProductCard';
import { SystemCard } from './components/SystemCard';
import { Footer } from './components/Footer';
import { products } from './data/products';
import { systems } from './data/systems';

export default function App() {
  const profile = {
    name: 'Ridho Bintang Aulia',
    jobTitle: 'Product Engineer | Fullstack Developer | Marketing & Sales',
    whatsapp: '6281536164746',
    portfolio: 'https://ridhobintangauliaportfolio.netlify.app/',
    github: 'https://github.com/Rbin01yuh',
    linkedin: 'https://www.linkedin.com/in/ridhobintangaulia/',
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Animated background */}
      <ColorwaveBackground />

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 py-12 sm:py-16 max-w-6xl">
        <div className="space-y-12 sm:space-y-16">
          {/* Header Section */}
          <Header name={profile.name} jobTitle={profile.jobTitle} />

          {/* Social Links */}
          <SocialLinks
            whatsapp={profile.whatsapp}
            portfolio={profile.portfolio}
            github={profile.github}
            linkedin={profile.linkedin}
          />

          {/* Digital Products Section */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl text-slate-900 dark:text-white inline-flex items-center gap-2">
                <span className="text-3xl">🛍️</span>
                Produk Digital
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Premium digital products untuk kebutuhan bisnis Anda
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  whatsappNumber={profile.whatsapp}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Custom Systems Section */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl text-slate-900 dark:text-white inline-flex items-center gap-2">
                <span className="text-3xl">⚙️</span>
                Sistem Custom
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Solusi sistem informasi untuk mengoptimalkan bisnis Anda
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {systems.map((system, index) => (
                <SystemCard
                  key={system.id}
                  system={system}
                  whatsappNumber={profile.whatsapp}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}