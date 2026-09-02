import React from 'react';

export interface VuMeterProps {
  value?: number; // 0 to 100
  segments?: number;
  label?: string;
  channels?: 'single' | 'stereo';
  rightValue?: number; // 0 to 100 for stereo R channel
  showPercentage?: boolean;
  className?: string;
}

export const VuMeter: React.FC<VuMeterProps> = ({
  value = 65,
  segments = 24,
  label,
  channels = 'single',
  rightValue = 58,
  showPercentage = true,
  className = ''
}) => {
  const renderBar = (val: number, chLabel?: string) => {
    const activeCount = Math.round((Math.max(0, Math.min(100, val)) / 100) * segments);

    return (
      <div className="flex items-center gap-2">
        {chLabel && (
          <span className="font-mono text-[9px] font-bold text-slate-400 w-3">{chLabel}</span>
        )}
        <div className="flex items-center gap-[2.5px] p-1.5 rounded-xl bg-[#040816] border border-white/10 shadow-inner flex-1">
          {Array.from({ length: segments }).map((_, idx) => {
            const isLit = idx < activeCount;
            const pct = idx / segments;

            // Gradient: Green (0-60%) -> Yellow/Amber (60-80%) -> Crimson Red (80-100%)
            let litBg = 'bg-emerald-400 shadow-[0_0_6px_#10b981]';
            if (pct >= 0.8) {
              litBg = 'bg-rose-500 shadow-[0_0_8px_#f43f5e]';
            } else if (pct >= 0.6) {
              litBg = 'bg-amber-400 shadow-[0_0_6px_#fbbf24]';
            }

            return (
              <div
                key={idx}
                className={`h-4 w-1.5 rounded-[1.5px] transition-all duration-150 ${
                  isLit ? litBg : 'bg-slate-800/40'
                }`}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col gap-1.5 font-mono select-none ${className}`}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          {label && <span className="font-bold tracking-wider uppercase text-cyan-400">{label}</span>}
          {showPercentage && <span className="font-black text-slate-200">{Math.round(value)}%</span>}
        </div>
      )}

      {channels === 'single' ? (
        renderBar(value)
      ) : (
        <div className="space-y-1">
          {renderBar(value, 'L')}
          {renderBar(rightValue, 'R')}
        </div>
      )}
    </div>
  );
};
