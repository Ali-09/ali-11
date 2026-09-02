import React from 'react';
import { motion } from 'framer-motion';

export interface ToggleProps {
  label?: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  tone?: 'purple' | 'gold' | 'emerald' | 'rose' | 'cyan';
  disabled?: boolean;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  label,
  description,
  checked,
  onChange,
  tone = 'purple',
  disabled = false,
  className = ''
}) => {
  const activeBg = {
    purple: 'bg-purple-600 shadow-purple-600/30',
    gold: 'bg-amber-500 shadow-amber-500/30',
    emerald: 'bg-emerald-500 shadow-emerald-500/30',
    rose: 'bg-rose-600 shadow-rose-600/30',
    cyan: 'bg-cyan-500 shadow-cyan-500/30'
  }[tone];

  return (
    <div
      onClick={() => !disabled && onChange(!checked)}
      className={`flex items-center justify-between gap-3 cursor-pointer select-none font-mono text-xs ${
        disabled ? 'opacity-50 pointer-events-none' : ''
      } ${className}`}
    >
      {(label || description) && (
        <div className="min-w-0 flex-1">
          {label && <span className="font-bold text-slate-800 dark:text-slate-200 block truncate">{label}</span>}
          {description && <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">{description}</span>}
        </div>
      )}
      <div
        className={`w-11 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out shrink-0 border ${
          checked
            ? `${activeBg} border-transparent shadow-md`
            : 'bg-slate-200 dark:bg-cyberdark border-slate-300 dark:border-cyberborder'
        }`}
      >
        <motion.div
          animate={{ x: checked ? 20 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="w-4 h-4 rounded-full bg-white shadow-sm"
        />
      </div>
    </div>
  );
};
