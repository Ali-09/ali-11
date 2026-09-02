import React from 'react';

export interface StepItem {
  number: number;
  title: string;
  subtitle?: string;
}

export interface ArcaneStepperProps {
  steps: StepItem[];
  currentStep: number;
  onStepClick?: (stepNumber: number) => void;
  className?: string;
}

export const ArcaneStepper: React.FC<ArcaneStepperProps> = ({
  steps,
  currentStep,
  onStepClick,
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-cyberborder font-mono text-xs ${className}`}>
      {steps.map((s) => {
        const isCurrent = currentStep === s.number;
        const isCompleted = currentStep > s.number;
        return (
          <button
            key={s.number}
            type="button"
            onClick={() => onStepClick?.(s.number)}
            disabled={!onStepClick}
            className={`flex items-center gap-2 font-bold transition-colors select-none text-left ${
              isCurrent
                ? 'text-purple-600 dark:text-purple-400'
                : isCompleted
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] shrink-0 border ${
                isCurrent
                  ? 'bg-purple-600 text-white border-purple-400 shadow-sm shadow-purple-600/30'
                  : isCompleted
                  ? 'bg-emerald-500/20 text-emerald-500 border-emerald-400'
                  : 'bg-slate-200 dark:bg-cyberdark text-slate-500 border-slate-300 dark:border-cyberborder'
              }`}
            >
              {isCompleted ? '✓' : s.number}
            </span>
            <div className="min-w-0">
              <span className="block truncate">{s.title}</span>
              {s.subtitle && <span className="text-[10px] text-slate-400 font-normal block truncate">{s.subtitle}</span>}
            </div>
          </button>
        );
      })}
    </div>
  );
};
