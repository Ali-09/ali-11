import React from 'react';
import { Card } from '../../atoms/Card';
import { Badge } from '../../atoms/Badge';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { CodeBlock } from '../../atoms/CodeBlock';

export interface ArcaneRecipeReaderProps {
  title: string;
  port?: number;
  tone?: 'purple' | 'cyan' | 'emerald' | 'amber' | 'rose';
  alchemicalName?: string;
  techTerm?: string;
  description: string;
  prerequisites?: string[];
  launchCommand: string;
  parameters?: { label: string; value: string }[];
  tips?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const ArcaneRecipeReader: React.FC<ArcaneRecipeReaderProps> = ({
  title,
  port,
  tone = 'purple',
  alchemicalName,
  techTerm,
  description,
  prerequisites = [],
  launchCommand,
  parameters = [],
  tips,
  actionLabel = 'CONJURAR EN LA FORJA',
  onAction,
  className = ''
}) => {
  const cardGlow = tone === 'amber' ? 'gold' : tone === 'cyan' ? 'purple' : (tone as any);

  return (
    <Card glowAura={cardGlow} className={`p-6 space-y-5 font-mono text-xs ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-slate-200 dark:border-cyberborder">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
              {title}
            </h3>
            {port !== undefined && <Badge tone={tone}>PUERTO {port}</Badge>}
          </div>
          {alchemicalName && (
            <p className="text-xs text-purple-600 dark:text-purple-300 font-bold mt-0.5">
              ✧ {alchemicalName}
            </p>
          )}
          {techTerm && (
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Definición técnica: {techTerm}
            </p>
          )}
        </div>

        {onAction && (
          <Button variant="emerald-start" icon={<Icon name="Sparkles" size={13} />} onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>

      {/* Description */}
      <div className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
        {description}
      </div>

      {/* Prerequisites */}
      {prerequisites.length > 0 && (
        <div className="space-y-2">
          <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <Icon name="CheckCircle2" size={14} glow="emerald" />
            <span>Requisitos Previos de Alquimia:</span>
          </span>
          <ul className="space-y-1 pl-5 list-disc text-slate-600 dark:text-slate-400">
            {prerequisites.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Launch Command */}
      <div className="space-y-2">
        <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <Icon name="Terminal" size={14} glow="purple" />
          <span>Sigilo de Invocación (Comando CLI):</span>
        </span>
        <CodeBlock code={launchCommand} language="bash" />
      </div>

      {/* Parameters */}
      {parameters.length > 0 && (
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-cyberborder space-y-2">
          <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
            Parámetros para la Forja:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            {parameters.map((p, idx) => (
              <div key={idx}>
                <span className="text-slate-400">{p.label}:</span>{' '}
                <b className="text-purple-600 dark:text-purple-300">{p.value}</b>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tip */}
      {tips && (
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs flex items-start gap-2.5">
          <Icon name="Lightbulb" size={16} glow="gold" className="shrink-0 mt-0.5" />
          <div>
            <b className="block">Consejo del Maestro Alquimista:</b>
            <span className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 block">
              {tips}
            </span>
          </div>
        </div>
      )}
    </Card>
  );
};
