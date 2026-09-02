import React from 'react';
import { motion } from 'framer-motion';
import { AetheriaTokens } from '../../tokens/colors';
import { Icon, IconName } from '../Icon';

export type SealAffinity = 'lumi' | 'ignis' | 'hydro' | 'geo' | 'plasma';

export interface ElementalSealProps {
  affinity: SealAffinity;
  label?: string;
  sublabel?: string;
  size?: 'sm' | 'md' | 'lg';
  pulsing?: boolean;
  onClick?: () => void;
}

const SEAL_ICONS: Record<SealAffinity, IconName> = {
  lumi: 'Sun',
  ignis: 'Flame',
  hydro: 'Droplets',
  geo: 'Mountain',
  plasma: 'Sparkles'
};

export const ElementalSeal: React.FC<ElementalSealProps> = ({
  affinity,
  label,
  sublabel,
  size = 'md',
  pulsing = false,
  onClick
}) => {
  const token = AetheriaTokens.elements[affinity];

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3.5 py-1.5 text-sm'
  }[size];

  const iconSizes = { sm: 12, md: 14, lg: 16 }[size];

  const colorStyles = {
    lumi: 'text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-500/40 shadow-amber-500/15',
    ignis: 'text-rose-600 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-500/40 shadow-rose-500/15',
    hydro: 'text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border-blue-300 dark:border-blue-500/40 shadow-blue-500/15',
    geo: 'text-emerald-600 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-500/40 shadow-emerald-500/15',
    plasma: 'text-purple-600 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 border-purple-300 dark:border-purple-500/40 shadow-purple-500/15'
  }[affinity];

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-lg border font-mono font-medium shadow-sm transition-all cursor-pointer ${colorStyles} ${sizeClasses}`}
    >
      <Icon name={SEAL_ICONS[affinity]} size={iconSizes} glow={affinity === 'lumi' ? 'gold' : affinity === 'plasma' ? 'purple' : affinity === 'ignis' ? 'rose' : affinity === 'geo' ? 'emerald' : 'blue'} className={pulsing ? 'animate-pulse' : ''} />
      <b>{label || token.name}:</b>
      {sublabel && <span className="opacity-90">{sublabel}</span>}
    </motion.div>
  );
};
