import React from 'react';
import { Card } from '../../atoms/Card';
import { Badge } from '../../atoms/Badge';
import { Icon } from '../../atoms/Icon';

export interface ArcaneServerPortalCardProps {
  title: string;
  port: number;
  pid?: number;
  processName?: string;
  protocol?: string;
  urlLocal?: string;
  urlLan?: string;
  isManaged?: boolean;
  isWebDev?: boolean;
  isSystemInternal?: boolean;
  status?: 'running' | 'stopped' | 'starting' | string;
  category?: string;
  description?: string;
  onOpen?: () => void;
  onAdopt?: () => void;
  onKill?: () => void;
  onStart?: () => void;
  onStop?: () => void;
  onRestart?: () => void;
  onEdit?: () => void;
  isAdopting?: boolean;
  isKilling?: boolean;
  isOperating?: boolean;
  lastError?: string;
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
  status,
  category,
  description,
  onOpen,
  onAdopt,
  onKill,
  onStart,
  onStop,
  onRestart,
  onEdit,
  isAdopting = false,
  isKilling = false,
  isOperating = false,
  lastError,
  className = ''
}) => {
  const localUrl = urlLocal || (port > 0 ? `http://localhost:${port}` : '#');
  const isRunning = status === 'running' || (isManaged && !!pid && pid > 0);
  const isStarting = status === 'starting';

  return (
    <Card
      glowAura={isManaged ? (isRunning ? 'emerald' : 'purple') : 'none'}
      className={`p-4 flex flex-col justify-between space-y-3 font-mono text-xs transition-all hover:scale-[1.01] ${className}`}
    >
      <div>
        {/* Header: Title, Category & Status Badges */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-bold text-slate-900 dark:text-white truncate" title={title}>
                {title}
              </span>
              {isManaged && (
                <>
                  {isRunning ? (
                    <Badge tone="emerald" dot pulse>
                      CORRIENDO EN EL NEXO
                    </Badge>
                  ) : isStarting ? (
                    <Badge tone="amber" dot pulse>
                      ARRANCANDO
                    </Badge>
                  ) : (
                    <Badge tone="rose" dot>
                      DETENIDO
                    </Badge>
                  )}
                </>
              )}
              {category && <Badge tone="cyan">{category.toUpperCase()}</Badge>}
              {!isManaged && isWebDev && <Badge tone="purple">RADAR SO</Badge>}
              {isSystemInternal && <Badge tone="slate">SISTEMA</Badge>}
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-2 flex-wrap">
              {pid !== undefined && pid > 0 && (
                <>
                  <span>PID: <b className="text-slate-700 dark:text-slate-200">{pid}</b></span>
                  <span>•</span>
                </>
              )}
              {processName && (
                <span>PROCESO: <b className="text-purple-600 dark:text-purple-300">{processName}</b></span>
              )}
            </p>

            {description && (
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">
                {description}
              </p>
            )}
          </div>

          <span className="shrink-0 px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-cyberdark border border-slate-200 dark:border-cyberborder text-[10px] font-bold text-slate-600 dark:text-slate-400">
            {protocol}
          </span>
        </div>

        {/* Links Banner */}
        {port > 0 && (
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
        )}
      </div>

        {/* Diagnostic Error Banner */}
        {lastError && !isRunning && (
          <div className="mt-2 p-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-[10px] space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <Icon name="AlertCircle" size={12} glow="rose" />
              <span>Falla en la Invocación / Comando:</span>
            </div>
            <pre className="font-mono text-[9px] whitespace-pre-wrap line-clamp-3 opacity-90 overflow-hidden">
              {lastError}
            </pre>
          </div>
        )}

      {/* Action Buttons */}
      <div className="pt-2 border-t border-slate-200 dark:border-cyberborder flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Abrir enlace en navegador */}
          {port > 0 && (
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
          )}

          {/* Acciones de ciclo de vida del Nexo (Managed) */}
          {isManaged && (
            <>
              {isRunning ? (
                <>
                  {onStop && (
                    <button
                      type="button"
                      onClick={onStop}
                      disabled={isOperating}
                      className="px-2.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/60 text-rose-600 dark:text-rose-300 border border-rose-200 dark:border-rose-800 font-bold flex items-center gap-1 text-[11px] whitespace-nowrap transition-colors"
                      title="Detener servidor en el Nexo"
                    >
                      <Icon name="Square" size={11} />
                      DETENER
                    </button>
                  )}
                  {onRestart && (
                    <button
                      type="button"
                      onClick={onRestart}
                      disabled={isOperating}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-cyberdark dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-cyberborder transition-colors"
                      title="Reiniciar servidor"
                    >
                      <Icon name="RefreshCw" size={12} />
                    </button>
                  )}
                </>
              ) : (
                <>
                  {onStart && (
                    <button
                      type="button"
                      onClick={onStart}
                      disabled={isOperating}
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold flex items-center gap-1 text-[11px] whitespace-nowrap transition-colors"
                      title="Iniciar servidor en el Nexo"
                    >
                      <Icon name="Play" size={12} />
                      INICIAR
                    </button>
                  )}
                </>
              )}

              {onEdit && (
                <button
                  type="button"
                  onClick={onEdit}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-cyberdark dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-cyberborder transition-colors"
                  title="Editar parámetros del servidor"
                >
                  <Icon name="Settings" size={12} />
                </button>
              )}
            </>
          )}

          {/* Acción para adoptar servidores externos al Nexo */}
          {!isManaged && onAdopt && (
            <button
              type="button"
              onClick={onAdopt}
              disabled={isAdopting}
              className="px-2.5 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/60 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-bold flex items-center gap-1 text-[11px] whitespace-nowrap transition-colors"
              title="Adoptar e integrar bajo el control del Nexo"
            >
              <Icon name="PlusCircle" size={12} />
              ADOPTAR
            </button>
          )}
        </div>

        {/* Botón para disipar procesos externos */}
        {!isManaged && onKill && (
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
