import React from 'react';
import { Card } from '../../atoms/Card';
import { Icon } from '../../atoms/Icon';
import { Badge, BadgeTone } from '../../atoms/Badge';

export interface ArcaneStatCardProps {
  title: string;
  value: string | number;
  unit?: string;
  iconName?: any;
  tone?: 'purple' | 'gold' | 'emerald' | 'rose' | 'cyan';
  badge?: string;
  subtext?: string;
  trend?: { value: string; positive: boolean };
  onClick?: () => void;
  className?: string;
}

export const ArcaneStatCard: React.FC<ArcaneStatCardProps> = ({
  title,
  value,
  unit,
  iconName = 'Activity',
  tone = 'purple',
  badge,
  subtext,
  trend,
  onClick,
  className = ''
}) => {
  const badgeTone: BadgeTone = tone === 'gold' ? 'amber' : (tone as BadgeTone);

  return (
    <Card
      glowAura={tone as any}
      onClick={onClick}
      className={`p-4 flex flex-col justify-between font-mono space-y-2 select-none ${className}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-cyberdark border border-slate-200 dark:border-cyberborder flex items-center justify-center shrink-0">
            <Icon name={iconName} size={15} glow={tone as any} />
          </div>
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider truncate">
            {title}
          </span>
        </div>
        {badge && <Badge tone={badgeTone}>{badge}</Badge>}
      </div>

      <div className="flex items-baseline gap-1.5 flex-wrap">
        <span className="text-2xl font-black text-slate-900 dark:text-white font-heading tracking-tight">
          {value}
        </span>
        {unit && <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{unit}</span>}
      </div>

      {(subtext || trend) && (
        <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-100 dark:border-cyberborder/60">
          {subtext && <span className="text-slate-500 dark:text-slate-400 truncate">{subtext}</span>}
          {trend && (
            <span className={`font-bold flex items-center gap-0.5 shrink-0 ${
              trend.positive ? 'text-emerald-500' : 'text-rose-500'
            }`}>
              {trend.positive ? '▲' : '▼'} {trend.value}
            </span>
          )}
        </div>
      )}
    </Card>
  );
};
