'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, FileText } from 'lucide-react';
import { Badge } from './ui/badge';
import { generateSystemMessage, generateWhatsAppLink } from '../utils/whatsapp';
import { System } from '../data/systems';

interface SystemCardProps {
  system: System;
  whatsappNumber: string;
  index: number;
}

export function SystemCard({ system, whatsappNumber, index }: SystemCardProps) {
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
  };

  const handleRequestDemo = () => {
    const message = generateSystemMessage(system.title, system.description);
    const link = generateWhatsAppLink(whatsappNumber, message);
    window.open(link, '_blank');
  };

  const handleViewProposal = () => {
    if (system.proposalUrl) {
      window.open(system.proposalUrl, '_blank');
    }
  };

  // Inline gradient override for robust color application
  const gradientStyle = system.gradientColors
    ? { backgroundImage: `linear-gradient(to bottom right, ${system.gradientColors[0]}, ${system.gradientColors[1]})` }
    : undefined;

  const gradientStyleBtn = system.gradientColors
    ? { backgroundImage: `linear-gradient(to right, ${system.gradientColors[0]}, ${system.gradientColors[1]})` }
    : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="group relative transition-all duration-300 ease-out"
    >
      <div className="relative overflow-hidden rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-slate-200/50 dark:border-white/10 shadow-xl hover:shadow-2xl">
        {/* Gradient header */}
        <div className={`relative h-32 bg-gradient-to-br ${system.gradient} p-6 overflow-hidden`} style={gradientStyle}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse-slow" />
          </div>

          <div className="relative flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {system.icon}
              </div>
              <div>
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-xl mb-2">
                  {system.category}
                </Badge>
              </div>
            </div>
            <Sparkles className="w-6 h-6 text-white/80 group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl text-slate-900 dark:text-white">
            {system.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300">
            {system.description}
          </p>

          {/* Features list */}
          <div className="space-y-2">
            {system.features.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 + idx * 0.1 }}
                className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            <button
              onClick={handleRequestDemo}
              className={`py-3 px-4 rounded-xl bg-gradient-to-r ${system.gradient} hover:shadow-xl text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
              style={gradientStyleBtn}
            >
              <span>Request Demo</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>

            {system.proposalUrl ? (
              <button
                onClick={handleViewProposal}
                aria-label="Lihat Proposal Google Drive"
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/proposal active:scale-[0.98]"
              >
                <span>Lihat Proposal</span>
                <FileText className="w-4 h-4 transition-transform group-hover/proposal:translate-x-1 group-active/proposal:translate-x-2" />
              </button>
            ) : (
              <div className="py-3 px-4 rounded-xl bg-white/50 border border-transparent" />
            )}
          </div>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-br ${system.gradient} opacity-10 blur-2xl`} style={gradientStyle} />
        </div>
      </div>
    </motion.div>
  );
}
