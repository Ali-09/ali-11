import React from 'react';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
  glowAura?: 'none' | 'purple' | 'gold' | 'emerald' | 'rose';
}

export const Select: React.FC<SelectProps> = ({
  label,
  hint,
  error,
  options,
  glowAura = 'none',
  className = '',
  id,
  ...props
}) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const glowClasses = {
    none: 'focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30',
    purple: 'border-purple-500/40 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30',
    gold: 'border-amber-500/40 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30',
    emerald: 'border-emerald-500/40 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30',
    rose: 'border-rose-500/40 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/30'
  }[glowAura];

  return (
    <div className="space-y-1 font-mono text-xs w-full">
      {label && (
        <label htmlFor={selectId} className="block text-slate-700 dark:text-slate-300 font-medium select-none">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`w-full bg-slate-50 dark:bg-cyberdark border border-slate-300 dark:border-cyberborder rounded-xl p-2.5 text-slate-900 dark:text-white text-xs font-mono transition-all duration-200 focus:outline-none cursor-pointer ${glowClasses} ${
          error ? 'border-rose-500' : ''
        } ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-[11px] text-rose-500 font-medium block">{error}</span>}
      {hint && !error && <span className="text-[10px] text-slate-400 block">{hint}</span>}
    </div>
  );
};
