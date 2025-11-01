import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function MusicPlayer() {
  const [theme, setTheme] = useState('0');

  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? '0' : '1');
    };

    // Initial check
    handleThemeChange();

    // Listen for changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="relative max-w-xl mx-auto z-10"
    >
      <div className="relative overflow-hidden rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 p-2 shadow-lg">
        <iframe
          title="Spotify Player"
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src={`https://open.spotify.com/embed/track/1qbFx2Oe35n8cIjsOpBq2l?utm_source=generator&theme=${theme}`}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>
  );
}