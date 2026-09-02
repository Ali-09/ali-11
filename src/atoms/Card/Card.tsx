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
    purple: 'hover:border-purple-500/60 hover:shadow-purple-500/20',
    gold: 'hover:border-amber-500/60 hover:shadow-amber-500/20',
    emerald: 'hover:border-emerald-500/60 hover:shadow-emerald-500/20',
    rose: 'hover:border-rose-500/60 hover:shadow-rose-500/20'
  }[glowAura];

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -3 } : undefined}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`theme-card rounded-2xl p-5 border transition-all duration-300 ${glowClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};
