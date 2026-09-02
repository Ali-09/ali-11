import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
  glowAura?: 'none' | 'purple' | 'gold' | 'emerald' | 'rose';
}

export const Input: React.FC<InputProps> = ({
  label,
  hint,
  error,
  icon,
  rightElement,
  glowAura = 'none',
  className = '',
  id,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const glowClasses = {
    none: 'focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30',
    purple: 'border-purple-500/40 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30',
    gold: 'border-amber-500/40 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30',
    emerald: 'border-emerald-500/40 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30',
    rose: 'border-rose-500/40 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/30'
  }[glowAura];

  const errorClass = error ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/30' : '';

  return (
    <div className="space-y-1 font-mono text-xs w-full">
      {label && (
        <label htmlFor={inputId} className="block text-slate-700 dark:text-slate-300 font-medium select-none">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-3 text-slate-400 pointer-events-none flex items-center shrink-0">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          className={`w-full bg-slate-50 dark:bg-cyberdark border border-slate-300 dark:border-cyberborder rounded-xl text-slate-900 dark:text-white placeholder-slate-400 text-xs font-mono transition-all duration-200 focus:outline-none ${
            icon ? 'pl-9' : 'pl-3'
          } ${rightElement ? 'pr-9' : 'pr-3'} py-2.5 ${glowClasses} ${errorClass} ${className}`}
          {...props}
        />
        {rightElement && (
          <span className="absolute right-3 flex items-center shrink-0">
            {rightElement}
          </span>
        )}
      </div>
      {error && <span className="text-[11px] text-rose-500 font-medium block">{error}</span>}
      {hint && !error && <span className="text-[10px] text-slate-400 block">{hint}</span>}
    </div>
  );
};
