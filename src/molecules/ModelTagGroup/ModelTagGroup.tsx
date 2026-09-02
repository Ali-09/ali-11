import React from 'react';

export interface ModelTagGroupProps {
  models?: string[];
}

export const ModelTagGroup: React.FC<ModelTagGroupProps> = ({ models }) => {
  if (!models || models.length === 0) return null;

  return (
    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-cyberborder/60">
      <span className="text-[10px] text-slate-500 dark:text-slate-400 block mb-1.5 font-mono uppercase tracking-wider">
        Modelos SOTA Cargados:
      </span>
      <div className="flex flex-wrap gap-1.5 font-mono">
        {models.map((m) => (
          <span
            key={m}
            className="px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 text-[10px] font-semibold"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
};
