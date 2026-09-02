import React from 'react';
import { Card } from '../../atoms/Card';

export interface GpuMetricTileProps {
  title: string;
  icon: React.ReactNode;
  mainValue: React.ReactNode;
  subValue?: React.ReactNode;
  progressBar?: { percent: number; color?: string };
}

export const GpuMetricTile: React.FC<GpuMetricTileProps> = ({
  title,
  icon,
  mainValue,
  subValue,
  progressBar
}) => {
  return (
    <Card hoverEffect className="flex flex-col justify-between p-3.5 sm:p-4 font-mono min-w-0 overflow-hidden">
      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1 gap-1">
        <span className="truncate tracking-wider">{title}</span>
        <span className="shrink-0 opacity-85">{icon}</span>
      </div>
      <div className="my-0.5 min-w-0">
        {mainValue}
      </div>
      {progressBar && (
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-1.5 shrink-0">
          <div
            className="bg-gradient-to-r from-purple-500 via-indigo-400 to-amber-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.min(100, Math.max(5, progressBar.percent))}%` }}
          />
        </div>
      )}
      {subValue && <div className="text-[10px] text-slate-400 mt-1 truncate block">{subValue}</div>}
    </Card>
  );
};
