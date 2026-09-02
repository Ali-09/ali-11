import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export type ButtonVariant = 'primary' | 'alchemy-gold' | 'alchemy-fire' | 'gaming-pulse' | 'emerald-start' | 'rose-stop' | 'ghost' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-2.5 py-1.5 text-xs rounded-xl gap-1.5',
    md: 'px-3.5 py-2 text-xs rounded-xl gap-2 font-semibold',
    lg: 'px-5 py-2.5 text-sm rounded-2xl gap-2.5 font-bold'
  }[size];

  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/25 border border-purple-400/50',
    'alchemy-gold': 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black shadow-lg shadow-amber-500/30 border border-yellow-200',
    'alchemy-fire': 'bg-gradient-to-r from-rose-500 via-red-600 to-amber-600 hover:from-rose-400 hover:to-red-500 text-white shadow-lg shadow-rose-500/30 border border-rose-400/50',
    'gaming-pulse': 'bg-gradient-to-r from-amber-500 via-rose-600 to-purple-600 hover:from-amber-400 hover:to-rose-500 text-white font-black border border-rose-400/60 shadow-xl shadow-rose-600/30 animate-pulse',
    'emerald-start': 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold shadow-lg shadow-emerald-600/25 border border-emerald-400/50',
    'rose-stop': 'bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-600 dark:text-rose-300 border border-rose-300 dark:border-rose-500/50 font-semibold',
    ghost: 'bg-slate-100 dark:bg-[#0d152c] hover:bg-slate-200 dark:hover:bg-[#162244] text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-purple-500/30',
    icon: 'p-2.5 bg-slate-100 dark:bg-[#0d152c] border border-slate-300 dark:border-purple-500/30 text-slate-700 dark:text-slate-300 hover:text-purple-400 hover:border-purple-400 rounded-xl shrink-0'
  }[variant];

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center justify-center font-mono whitespace-nowrap select-none shrink-0 transition-all cursor-pointer ${fullWidth ? 'w-full' : ''} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0 flex items-center">{icon}</span>}
      {children && <span className="truncate">{children}</span>}
    </motion.button>
  );
};
