'use client';

import { motion } from 'motion/react';
import { MessageCircle, Globe, Github, Linkedin } from 'lucide-react';
import { generateContactMessage, generateWhatsAppLink } from '../utils/whatsapp';

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

interface SocialLinksProps {
  whatsapp: string;
  portfolio: string;
  github: string;
  linkedin: string;
}

export function SocialLinks({ whatsapp, portfolio, github, linkedin }: SocialLinksProps) {
  const links: SocialLink[] = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      href: generateWhatsAppLink(whatsapp, generateContactMessage()),
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'Portfolio',
      href: portfolio,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: github,
      color: 'from-slate-700 to-slate-500',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: linkedin,
      color: 'from-blue-600 to-blue-500',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
      {links.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="group relative"
        >
          <div className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            {/* Icon */}
            <div className="relative flex flex-col items-center gap-2">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {link.icon}
              </div>
              
              {/* Label */}
              <span className="text-sm text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                {link.label}
              </span>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
