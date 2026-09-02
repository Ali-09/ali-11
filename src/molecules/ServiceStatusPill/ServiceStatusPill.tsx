import React from 'react';
import { Badge } from '../../atoms/Badge';

export interface ServiceStatusPillProps {
  status: 'running' | 'stopped' | 'starting';
}

export const ServiceStatusPill: React.FC<ServiceStatusPillProps> = ({ status }) => {
  if (status === 'running') {
    return (
      <Badge tone="emerald" dot pulse>
        RUNNING
      </Badge>
    );
  }
  if (status === 'starting') {
    return (
      <Badge tone="amber" dot pulse>
        STARTING
      </Badge>
    );
  }
  return (
    <Badge tone="rose" dot>
      STOPPED
    </Badge>
  );
};
