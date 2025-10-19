'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { ShoppingCart, Zap } from 'lucide-react';
import { Badge } from './ui/badge';
import { generateProductMessage, generateWhatsAppLink } from '../utils/whatsapp';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  whatsappNumber: string;
  index: number;
}

export function ProductCard({ product, whatsappNumber, index }: ProductCardProps) {
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

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'verified':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20';
      case 'bestseller':
        return 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20';
      case 'promo':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20';
      case 'new':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20';
      default:
        return '';
    }
  };

  const handlePurchase = () => {
    const message = generateProductMessage(product.title, product.price, product.description);
    const link = generateWhatsAppLink(whatsappNumber, message);
    window.open(link, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="group relative transition-all duration-300 ease-out"
    >
      <div className="relative overflow-hidden rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-slate-200/50 dark:border-white/10 shadow-xl hover:shadow-2xl p-6 space-y-4">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Sparkle effect */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
        </div>

        {/* Content */}
        <div className="relative space-y-4">
          {/* Icon and Badges */}
          <div className="flex items-start justify-between">
            <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
              {product.icon}
            </div>
            <div className="flex flex-wrap gap-2 justify-end">
              {product.badges.map((badge) => (
                <Badge
                  key={badge.text}
                  variant="outline"
                  className={`text-xs px-2 py-1 ${getBadgeVariant(badge.type)} backdrop-blur-xl animate-pulse-slow`}
                >
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
            {product.description}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl text-slate-900 dark:text-white">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-500 dark:text-slate-400 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>

          {/* CTA Button */}
          <button
            onClick={handlePurchase}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span>Beli Sekarang</span>
          </button>
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}
