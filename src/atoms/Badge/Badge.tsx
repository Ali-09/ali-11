import React from 'react';

export type BadgeTone = 'emerald' | 'purple' | 'amber' | 'rose' | 'cyan' | 'slate';

export interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  dot?: boolean;
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  tone = 'purple',
  dot = false,
  pulse = false
}) => {
  const toneClasses = {
    emerald: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800',
    purple: 'bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-800',
    amber: 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-800',
    rose: 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-400 border-rose-300 dark:border-rose-800',
    cyan: 'bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-800',
    slate: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'
  }[tone];

  const dotColors = {
    emerald: 'bg-emerald-500',
    purple: 'bg-purple-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500',
    cyan: 'bg-cyan-500',
    slate: 'bg-slate-400'
  }[tone];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${toneClasses}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors} ${pulse ? 'animate-ping' : ''}`} />}
      {children}
    </span>
  );
};
