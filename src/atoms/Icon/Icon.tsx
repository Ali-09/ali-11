import React from 'react';
import * as LucideIcons from 'lucide-react';

export type IconName = keyof typeof LucideIcons;
export type IconGlow = 'none' | 'gold' | 'rose' | 'blue' | 'emerald' | 'purple' | 'cyan';

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  glow?: IconGlow;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 18,
  className = '',
  glow = 'none',
  color
}) => {
  const Component = (LucideIcons[name] || LucideIcons.Sparkles) as React.ComponentType<{
    size?: number;
    className?: string;
    color?: string;
  }>;

  const glowStyles = {
    none: '',
    gold: 'drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] text-amber-500',
    rose: 'drop-shadow-[0_0_8px_rgba(244,63,94,0.6)] text-rose-500',
    blue: 'drop-shadow-[0_0_8px_rgba(2,132,199,0.6)] text-blue-500',
    emerald: 'drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] text-emerald-500',
    purple: 'drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] text-purple-500',
    cyan: 'drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] text-cyan-400'
  }[glow];

  return (
    <span className={`inline-flex items-center justify-center shrink-0 ${glowStyles} ${className}`}>
      <Component size={size} color={color} />
    </span>
  );
};
