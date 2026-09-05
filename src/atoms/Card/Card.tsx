import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowAura?: 'none' | 'purple' | 'gold' | 'emerald' | 'rose';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glowAura = 'none',
  onClick
}) => {
  const glowClasses = {
    none: '',
    purple: 'hover:border-purple-400/30 hover:shadow-[0_10px_30px_-5px_rgba(168,85,247,0.15)]',
    gold: 'hover:border-amber-400/30 hover:shadow-[0_10px_30px_-5px_rgba(245,158,11,0.15)]',
    emerald: 'hover:border-emerald-400/30 hover:shadow-[0_10px_30px_-5px_rgba(16,185,129,0.15)]',
    rose: 'hover:border-rose-400/30 hover:shadow-[0_10px_30px_-5px_rgba(244,63,94,0.15)]'
  }[glowAura];

  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -2,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
            }
          : undefined
      }
      onClick={onClick}
      className={`theme-card rounded-2xl p-5 border border-slate-200/80 dark:border-white/[0.08] transition-all duration-300 ${glowClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};
