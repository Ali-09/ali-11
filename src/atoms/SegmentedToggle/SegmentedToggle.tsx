import React from 'react';
import { motion } from 'framer-motion';
import { useAetheriaAudio } from '../../hooks/useAetheriaAudio';

export interface SegmentedOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
}

export interface SegmentedToggleProps {
  options: SegmentedOption[];
  value: string;
  onChange: (id: string) => void;
  tone?: 'purple' | 'cyan' | 'gold' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SegmentedToggle: React.FC<SegmentedToggleProps> = ({
  options,
  value,
  onChange,
  tone = 'purple',
  size = 'md',
  className = ''
}) => {
  const { playCue } = useAetheriaAudio();

  const toneActiveStyles = {
    purple: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border-purple-400/50',
    cyan: 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] border-cyan-400/50',
    gold: 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-black shadow-[0_0_15px_rgba(251,191,36,0.5)] border-amber-300/60',
    emerald: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] border-emerald-400/50'
  }[tone];

  const sizeClasses = {
    sm: 'p-1 text-xs gap-1',
    md: 'p-1.5 text-xs gap-1.5',
    lg: 'p-2 text-sm gap-2'
  }[size];

  return (
    <div
      className={`inline-flex items-center rounded-2xl bg-[#060b1e]/90 border border-white/10 p-1 shadow-inner backdrop-blur-xl font-mono ${sizeClasses} ${className}`}
    >
      {options.map((opt) => {
        const isSelected = opt.id === value;
        return (
          <button
            key={opt.id}
            onClick={() => {
              if (!isSelected) {
                playCue('click');
                onChange(opt.id);
              }
            }}
            className={`relative px-3.5 py-1.5 rounded-xl font-bold transition-all duration-200 flex items-center gap-2 select-none ${
              isSelected ? 'text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isSelected && (
              <motion.div
                layoutId="segmented-active-pill"
                className={`absolute inset-0 rounded-xl border ${toneActiveStyles}`}
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {opt.icon}
              {opt.label}
              {opt.badge && (
                <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-black/40 border border-white/20 text-white">
                  {opt.badge}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};
