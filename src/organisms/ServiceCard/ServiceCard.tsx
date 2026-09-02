import React from 'react';
import { Card } from '../../atoms/Card';
import { Button } from '../../atoms/Button';
import { Icon, IconName } from '../../atoms/Icon';
import { ServiceStatusPill } from '../../molecules/ServiceStatusPill';
import { ModelTagGroup } from '../../molecules/ModelTagGroup';

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  port: number;
  status: 'running' | 'stopped' | 'starting';
  url_local?: string;
  url_lan?: string;
  models?: string[];
}

export interface ServiceCardProps {
  service: ServiceItem;
  onStart?: (id: string) => void;
  onStop?: (id: string) => void;
  onRestart?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onStart,
  onStop,
  onRestart,
  onEdit
}) => {
  const isRunning = service.status === 'running';

  const iconName: IconName = {
    hub: 'Radio',
    image: 'Palette',
    bot: 'Bot',
    agent: 'Sparkles',
    llm: 'Brain'
  }[service.category] as IconName || 'Settings';

  return (
    <Card hoverEffect glowAura="purple" className="flex flex-col justify-between p-5 sm:p-6 min-w-0">
      <div>
        {/* Top Header Row with guaranteed spacing */}
        <div className="flex items-start justify-between gap-2.5 mb-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {/* Dedicated Icon box (shrink-0) */}
            <div
              className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm shrink-0 ${
                isRunning
                  ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-300 dark:border-purple-500/40'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-400 border border-slate-300 dark:border-slate-700'
              }`}
            >
              <Icon name={iconName} size={20} glow={isRunning ? 'purple' : 'none'} />
            </div>

            {/* Title & Port (min-w-0 prevents collision) */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white font-mono truncate">
                  {service.name}
                </h3>
                <button
                  onClick={() => onEdit?.(service.id)}
                  className="text-slate-400 hover:text-purple-500 transition cursor-pointer shrink-0"
                  title="Editar Parámetros"
                >
                  <Icon name="Settings" size={13} />
                </button>
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block truncate">
                {service.port > 0 ? `PUERTO :${service.port}` : 'PROCESO INTERNO'}
              </span>
            </div>
          </div>

          {/* Status Badge (shrink-0) */}
          <div className="shrink-0">
            <ServiceStatusPill status={service.status} />
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 my-2 leading-relaxed">
          {service.description}
        </p>
        <ModelTagGroup models={service.models} />
      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-cyberborder/70">
        {service.url_lan && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono mb-3 min-w-0">
            <span className="text-slate-500 dark:text-slate-400 text-[11px] shrink-0">Reverse Proxy:</span>
            <a
              href={service.url_lan}
              target="_blank"
              rel="noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 font-bold truncate text-[11px]"
            >
              <span className="truncate">{service.url_lan}</span>
              <Icon name="ExternalLink" size={11} className="shrink-0" />
            </a>
          </div>
        )}

        {isRunning ? (
          <div className="flex items-center gap-2 font-mono">
            <Button
              variant="rose-stop"
              icon={<Icon name="Square" size={13} />}
              onClick={() => onStop?.(service.id)}
              className="flex-1"
            >
              DETENER
            </Button>
            <Button
              variant="ghost"
              onClick={() => onRestart?.(service.id)}
              title="Reiniciar"
            >
              <Icon name="RefreshCw" size={14} />
            </Button>
            {service.url_local && (
              <a
                href={service.url_local}
                target="_blank"
                rel="noreferrer"
                className="flex-1"
              >
                <Button variant="primary" icon={<Icon name="ExternalLink" size={13} />} fullWidth>
                  ABRIR
                </Button>
              </a>
            )}
          </div>
        ) : (
          <Button
            variant="emerald-start"
            icon={<Icon name="Play" size={13} />}
            fullWidth
            onClick={() => onStart?.(service.id)}
          >
            INICIAR SERVICIO
          </Button>
        )}
      </div>
    </Card>
  );
};
