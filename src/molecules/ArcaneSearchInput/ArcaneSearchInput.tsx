import React from 'react';
import { Icon } from '../../atoms/Icon';

export interface ArcaneSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  shortcutHint?: string;
  onClear?: () => void;
  className?: string;
}

export const ArcaneSearchInput: React.FC<ArcaneSearchInputProps> = ({
  value,
  onChange,
  placeholder = 'Buscar o filtrar componentes...',
  shortcutHint,
  onClear,
  className = ''
}) => {
  return (
    <div className={`relative w-full font-mono text-xs ${className}`}>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none flex items-center shrink-0">
        <Icon name="Search" size={14} />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-slate-50 dark:bg-cyberdark border border-slate-300 dark:border-cyberborder rounded-xl pl-9 pr-12 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all duration-200"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 shrink-0">
        {value ? (
          <button
            type="button"
            onClick={() => {
              onChange('');
              onClear?.();
            }}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-white font-bold text-xs"
            title="Limpiar búsqueda"
          >
            ✕
          </button>
        ) : shortcutHint ? (
          <span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] text-slate-500 font-bold border border-slate-300 dark:border-slate-700">
            {shortcutHint}
          </span>
        ) : null}
      </div>
    </div>
  );
};
