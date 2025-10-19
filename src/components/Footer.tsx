'use client';

import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="relative mt-20 pb-8"
    >
      <div className="relative mx-auto max-w-2xl">
        {/* Decorative line */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

        {/* Content */}
        <div className="text-center space-y-4">
          {/* Sparkles decoration */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
            <Sparkles className="w-3 h-3 text-blue-500 animate-pulse animation-delay-150" />
            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse animation-delay-300" />
          </div>

          {/* Main text */}
          <p className="text-slate-600 dark:text-slate-300 flex items-center justify-center gap-2 flex-wrap">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>by</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ridho Bintang Aulia
            </span>
          </p>

          {/* Copyright */}
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} All rights reserved
          </p>

          {/* Tech stack badge */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="px-3 py-1 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300">
              Next.js 14
            </div>
            <div className="px-3 py-1 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300">
              Tailwind CSS
            </div>
            <div className="px-3 py-1 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300">
              Motion
            </div>
          </div>
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm" />
      </div>
    </motion.footer>
  );
}
