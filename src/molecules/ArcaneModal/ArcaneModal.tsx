import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../../atoms/Icon';
import { ArcaneTooltip } from '../../atoms/ArcaneTooltip';

export interface ArcaneModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  iconName?: any;
  iconTone?: 'purple' | 'gold' | 'emerald' | 'rose' | 'cyan';
  tooltip?: {
    term?: string;
    techTerm?: string;
    explanation: string;
  };
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const ArcaneModal: React.FC<ArcaneModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  iconName = 'Flame',
  iconTone = 'purple',
  tooltip,
  size = 'md',
  children,
  footer,
  className = ''
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }[size];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50 font-mono text-xs">
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 15 }}
          className={`theme-card rounded-3xl p-6 ${sizeClasses} w-full border border-purple-500/30 shadow-2xl space-y-5 max-h-[92vh] overflow-y-auto ${className}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-cyberborder">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
                <Icon name={iconName} size={20} glow={iconTone as any} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading truncate">
                    {title}
                  </h3>
                  {tooltip && (
                    <ArcaneTooltip
                      term={tooltip.term}
                      techTerm={tooltip.techTerm}
                      explanation={tooltip.explanation}
                    />
                  )}
                </div>
                {subtitle && <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{subtitle}</p>}
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-cyberdark text-base font-bold transition-colors shrink-0"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="space-y-4">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="pt-3 border-t border-slate-200 dark:border-cyberborder flex items-center justify-end gap-3">
              {footer}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
