import React from 'react';
import { motion } from 'framer-motion';

export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  sublabel?: string;
  showValueLabel?: boolean;
  tone?: 'purple' | 'gold' | 'emerald' | 'rose' | 'cyan';
  pulse?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  sublabel,
  showValueLabel = true,
  tone = 'purple',
  pulse = false,
  className = ''
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const gradientClasses = {
    purple: 'from-purple-600 to-indigo-500 shadow-purple-500/25',
    gold: 'from-amber-500 to-yellow-400 shadow-amber-500/25',
    emerald: 'from-emerald-600 to-teal-400 shadow-emerald-500/25',
    rose: 'from-rose-600 to-red-500 shadow-rose-500/25',
    cyan: 'from-cyan-500 to-blue-500 shadow-cyan-500/25'
  }[tone];

  return (
    <div className={`space-y-1.5 font-mono text-xs ${className}`}>
      {(label || showValueLabel) && (
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            {label && <span className="font-bold text-slate-800 dark:text-slate-200 truncate">{label}</span>}
            {sublabel && <span className="text-[10px] text-slate-400 truncate">({sublabel})</span>}
          </div>
          {showValueLabel && (
            <span className="font-bold text-slate-700 dark:text-slate-300 shrink-0">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-black/60 border border-slate-300/60 dark:border-cyberborder overflow-hidden p-0.5 relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${gradientClasses} shadow-sm ${
            pulse ? 'animate-pulse' : ''
          }`}
        />
      </div>
    </div>
  );
};
