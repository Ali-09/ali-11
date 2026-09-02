import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';

export interface ArcaneTooltipProps {
  /** Término o concepto tecno-mágico (opcional) */
  term?: string;
  /** Equivalente técnico estándar / terrenal */
  techTerm?: string;
  /** Explicación concisa y amigable */
  explanation: string;
  /** Posición preferida de la burbuja */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Tamaño del glifo de ayuda (por defecto: 13px) */
  size?: number;
  /** Si se provee, envuelve al elemento hijo en lugar de mostrar solo el glifo ? */
  children?: React.ReactNode;
  /** Clase CSS adicional */
  className?: string;
}

export const ArcaneTooltip: React.FC<ArcaneTooltipProps> = ({
  term,
  techTerm,
  explanation,
  position = 'top',
  size = 13,
  children,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  // Cerrar al hacer clic fuera en dispositivos táctiles
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsVisible(false);
      }
    };
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  }[position];

  return (
    <span
      ref={containerRef}
      className={`relative inline-flex items-center align-middle ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children ? (
        <span className="cursor-help inline-flex items-center gap-1">
          {children}
          <span
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(!isVisible);
            }}
            className="w-3.5 h-3.5 rounded-full inline-flex items-center justify-center text-[9px] font-mono font-bold bg-purple-500/10 hover:bg-purple-500/20 dark:bg-purple-400/20 dark:hover:bg-purple-400/30 text-purple-600 dark:text-purple-300 border border-purple-500/30 transition-all hover:scale-110 shrink-0"
            title="Explicación del Códice"
          >
            ?
          </span>
        </span>
      ) : (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(!isVisible);
          }}
          className="w-3.5 h-3.5 rounded-full inline-flex items-center justify-center text-[9px] font-mono font-bold bg-slate-200/70 hover:bg-purple-500/20 dark:bg-purple-950/60 dark:hover:bg-purple-800/60 text-slate-600 dark:text-purple-300 border border-slate-300 dark:border-purple-500/40 transition-all hover:scale-110 shrink-0 cursor-help"
          aria-label="Ayuda del Códice"
        >
          ?
        </button>
      )}

      {/* Tooltip Glassmorphic Popover */}
      {isVisible && (
        <span
          className={`absolute ${positionClasses} z-50 w-64 p-2.5 rounded-xl bg-white/95 dark:bg-[#0c1222]/95 backdrop-blur-md border border-purple-500/30 dark:border-purple-500/40 shadow-xl shadow-purple-950/20 text-left pointer-events-none transition-opacity duration-150 text-[11px] leading-relaxed font-sans`}
        >
          {term && (
            <span className="block font-bold text-purple-700 dark:text-purple-300 font-mono text-[11px] mb-0.5">
              ✧ {term}
            </span>
          )}
          {techTerm && (
            <span className="inline-block px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono text-[10px] font-semibold mb-1 border border-indigo-200 dark:border-indigo-800/60">
              Tech: {techTerm}
            </span>
          )}
          <span className="block text-slate-600 dark:text-slate-300 font-normal">
            {explanation}
          </span>
        </span>
      )}
    </span>
  );
};
