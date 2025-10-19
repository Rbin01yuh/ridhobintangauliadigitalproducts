'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored === 'dark' || (!stored && prefersDark);
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="group relative w-14 h-14 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex items-center justify-center w-full h-full">
        {isDark ? (
          <Moon className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
        ) : (
          <Sun className="w-5 h-5 text-amber-500 group-hover:rotate-90 transition-transform duration-300" />
        )}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
      </div>
    </button>
  );
}
