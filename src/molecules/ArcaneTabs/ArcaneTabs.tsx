import React from 'react';
import { Icon } from '../../atoms/Icon';
import { Badge } from '../../atoms/Badge';
import { ArcaneTooltip } from '../../atoms/ArcaneTooltip';

export interface TabItem {
  id: string;
  label: string;
  shortLabel?: string;
  iconName?: any;
  badge?: string;
  badgeTone?: 'purple' | 'amber' | 'emerald' | 'cyan' | 'rose';
  dot?: boolean;
  tooltip?: {
    term?: string;
    techTerm?: string;
    explanation: string;
  };
}

export interface ArcaneTabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  tone?: 'purple' | 'gold' | 'emerald' | 'rose' | 'cyan';
  className?: string;
}

export const ArcaneTabs: React.FC<ArcaneTabsProps> = ({
  tabs,
  activeTab,
  onChange,
  tone = 'purple',
  className = ''
}) => {
  const activeBg = {
    purple: 'bg-purple-600 text-white shadow-md shadow-purple-600/30',
    gold: 'bg-amber-600 text-white shadow-md shadow-amber-600/30',
    emerald: 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30',
    rose: 'bg-rose-600 text-white shadow-md shadow-rose-600/30',
    cyan: 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
  }[tone];

  return (
    <div
      className={`flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-cyberdark border border-slate-200 dark:border-cyberborder font-mono text-xs overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-full ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-bold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap transition-all duration-200 select-none text-[11px] sm:text-xs shrink-0 ${
              isActive
                ? activeBg
                : 'text-slate-600 dark:text-slate-400 hover:text-purple-500 dark:hover:text-purple-300'
            }`}
          >
            {tab.iconName && <Icon name={tab.iconName} size={13} className="shrink-0" />}
            <span>
              {tab.shortLabel ? (
                <>
                  <span className="inline sm:hidden">{tab.shortLabel}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </>
              ) : (
                tab.label
              )}
            </span>
            {tab.dot && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />}
            {tab.badge && (
              <Badge tone={tab.badgeTone || 'purple'}>
                {tab.badge}
              </Badge>
            )}
            {tab.tooltip && (
              <ArcaneTooltip
                term={tab.tooltip.term}
                techTerm={tab.tooltip.techTerm}
                explanation={tab.tooltip.explanation}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
