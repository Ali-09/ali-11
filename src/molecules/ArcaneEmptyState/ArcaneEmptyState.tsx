import React from 'react';
import { Icon } from '../../atoms/Icon';
import { Button, ButtonVariant } from '../../atoms/Button';

export interface ArcaneEmptyStateProps {
  iconName?: any;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
    variant?: ButtonVariant;
  };
  className?: string;
}

export const ArcaneEmptyState: React.FC<ArcaneEmptyStateProps> = ({
  iconName = 'WifiOff',
  title,
  description,
  action,
  className = ''
}) => {
  return (
    <div className={`theme-card rounded-3xl p-10 text-center space-y-4 font-mono select-none border ${className}`}>
      <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/30">
        <Icon name={iconName} size={32} glow="purple" />
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-bold text-slate-800 dark:text-white font-heading">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && (
        <div className="pt-2">
          <Button
            variant={action.variant || 'primary'}
            icon={action.icon}
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
};
