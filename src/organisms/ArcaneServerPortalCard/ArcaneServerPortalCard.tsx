import React from 'react';
import { Card } from '../../atoms/Card';
import { Badge } from '../../atoms/Badge';
import { Icon } from '../../atoms/Icon';

export interface ArcaneServerPortalCardProps {
  title: string;
  port: number;
  pid: number;
  processName: string;
  protocol?: string;
  urlLocal?: string;
  urlLan?: string;
  isManaged?: boolean;
  isWebDev?: boolean;
  isSystemInternal?: boolean;
  onOpen?: () => void;
  onAdopt?: () => void;
  onKill?: () => void;
  isAdopting?: boolean;
  isKilling?: boolean;
  className?: string;
}

export const ArcaneServerPortalCard: React.FC<ArcaneServerPortalCardProps> = ({
  title,
  port,
  pid,
  processName,
  protocol = 'TCP',
  urlLocal,
  urlLan,
  isManaged = false,
  isWebDev = true,
  isSystemInternal = false,
  onOpen,
  onAdopt,
  onKill,
  isAdopting = false,
  isKilling = false,
  className = ''
}) => {
  const localUrl = urlLocal || `http://localhost:${port}`;

  return (
    <Card
      glowAura={isManaged ? 'purple' : 'none'}
      className={`p-4 flex flex-col justify-between space-y-3 font-mono text-xs transition-all hover:scale-[1.01] ${className}`}
    >
      <div>
        {/* Header: Title & Badges */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-bold text-slate-900 dark:text-white truncate" title={title}>
                {title}
              </span>
              {isManaged && <Badge tone="emerald" dot>GRIMORIO</Badge>}
              {!isManaged && isWebDev && <Badge tone="purple">PORTAL WEB</Badge>}
              {isSystemInternal && <Badge tone="slate">SISTEMA</Badge>}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-2 flex-wrap">
              <span>PID: <b className="text-slate-700 dark:text-slate-200">{pid}</b></span>
              <span>•</span>
              <span>PROCESO: <b className="text-purple-600 dark:text-purple-300">{processName}</b></span>
            </p>
          </div>
          <span className="shrink-0 px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-cyberdark border border-slate-200 dark:border-cyberborder text-[10px] font-bold text-slate-600 dark:text-slate-400">
            {protocol}
          </span>
        </div>

        {/* Links Banner */}
        <div className="mt-3 p-2.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-cyberborder space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Icon name="Server" size={12} />
              <span>PORTAL:</span>
            </span>
            <a
              href={localUrl}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-purple-600 dark:text-purple-300 hover:text-purple-500 underline decoration-purple-500/40 flex items-center gap-1"
            >
              :{port}
              <Icon name="ExternalLink" size={11} />
            </a>
          </div>

          {urlLan && (
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Icon name="Globe" size={11} />
                <span>FLUJO LAN:</span>
              </span>
              <a
                href={urlLan}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-400 truncate max-w-[180px]"
              >
                {urlLan}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 border-t border-slate-200 dark:border-cyberborder flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <a
            href={localUrl}
            target="_blank"
            rel="noreferrer"
            onClick={onOpen}
            className="px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-bold flex items-center gap-1 text-[11px] whitespace-nowrap transition-colors"
          >
            <Icon name="Globe" size={12} />
            ABRIR
          </a>

          {!isManaged && onAdopt && (
            <button
              type="button"
              onClick={onAdopt}
              disabled={isAdopting}
              className="px-2.5 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/60 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-bold flex items-center gap-1 text-[11px] whitespace-nowrap transition-colors"
            >
              <Icon name="PlusCircle" size={12} />
              ADOPTAR
            </button>
          )}
        </div>

        {onKill && (
          <button
            type="button"
            onClick={onKill}
            disabled={isKilling}
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
            title="Disipar proceso (Finalizar PID en Windows)"
          >
            <Icon name="XCircle" size={15} />
          </button>
        )}
      </div>
    </Card>
  );
};
