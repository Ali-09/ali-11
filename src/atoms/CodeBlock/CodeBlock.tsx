import React, { useState } from 'react';
import { Icon } from '../Icon';

export interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  copyable?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  title,
  copyable = true,
  className = ''
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs overflow-hidden shadow-lg ${className}`}>
      {(title || copyable || language) && (
        <div className="flex items-center justify-between px-3.5 py-2 bg-slate-950/80 border-b border-slate-800 text-[11px] text-slate-400">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            {title && <span className="font-bold text-slate-300 ml-1 truncate">{title}</span>}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {language && <span className="uppercase text-[10px] text-slate-500">{language}</span>}
            {copyable && (
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
                title="Copiar código"
              >
                <Icon name={copied ? 'Check' : 'Copy'} size={12} />
                <span>{copied ? '¡Copiado!' : 'Copiar'}</span>
              </button>
            )}
          </div>
        </div>
      )}
      <div className="p-3.5 text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed">
        <code>{code}</code>
      </div>
    </div>
  );
};
