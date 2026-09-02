import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { AETHERIA_EMBLEM_IMAGE } from '../../assets/aetheriaAsset';

export type SealSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface AetheriaSealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  size?: SealSize;
  glow?: boolean;
  spinning?: boolean;
  className?: string;
  onClick?: () => void;
}

export const AetheriaSeal: React.FC<AetheriaSealProps> = ({
  size = 'md',
  glow = true,
  spinning = false,
  className = '',
  onClick,
  ...props
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
    '2xl': 'w-40 h-40'
  }[size];

  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: 2 }}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center shrink-0 select-none cursor-pointer ${sizeClasses} ${className}`}
      {...props}
    >
      {/* Radiant Cosmic Backlight */}
      {glow && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/40 via-indigo-500/30 to-amber-400/40 blur-lg animate-pulse pointer-events-none" />
      )}

      {/* Orbiting Ring (optional) */}
      {spinning && (
        <div className="absolute inset-0 rounded-full border border-dashed border-purple-400/40 animate-[spin_20s_linear_infinite] pointer-events-none" />
      )}

      {/* High Definition Vector/Raster Emblem */}
      <img
        src={AETHERIA_EMBLEM_IMAGE}
        alt="Aetheria Seal"
        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
      />
    </motion.div>
  );
};
