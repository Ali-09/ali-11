import React from 'react';
import { Card } from '../../atoms/Card';
import { Badge } from '../../atoms/Badge';

export const LiveTerminal: React.FC = () => {
  return (
    <Card hoverEffect={false} className="flex flex-col justify-between p-4 sm:p-5">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-cyberborder">
        <div className="flex items-center gap-2">
          <span className="text-purple-500 font-mono text-sm">▶_</span>
          <h3 className="text-sm font-bold text-slate-800 dark:text-white font-mono">SYSTEM HEALTH & LOGS</h3>
        </div>
        <Badge tone="purple">STREAMING</Badge>
      </div>

      <div className="space-y-2 my-3 text-xs font-mono">
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-cyberdark border border-slate-200 dark:border-cyberborder/60">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-2"><span>✔</span> Reverse Proxy (Port 80)</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">ONLINE</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-cyberdark border border-slate-200 dark:border-cyberborder/60">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-2"><span>✔</span> mDNS Host (ali.local)</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">ACTIVE</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-cyberdark border border-slate-200 dark:border-cyberborder/60">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-2"><span>✔</span> RTX 5080 Driver</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">CUDA 13.3</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-cyberdark border border-slate-200 dark:border-cyberborder/60">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-2"><span>✔</span> Gaming VRAM Policy</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">AUTO 5M</span>
        </div>
      </div>

      <div className="bg-slate-900 text-slate-300 p-3 rounded-xl border border-slate-700 dark:border-cyberborder font-mono text-[11px] h-[120px] overflow-y-auto space-y-1.5">
        <div><span className="text-purple-400">[AETHERIA]</span> Atomic Magitech Engine Online</div>
        <div><span className="text-amber-400">[TITANIA]</span> 5 Elemental Conduits Synchronized</div>
        <div><span className="text-cyan-400">[PROXY]</span> Reverse Proxy Port 80 Active</div>
        <div><span className="text-emerald-400">[OLLAMA]</span> DeepSeek-R1 & Qwen Standby</div>
      </div>
    </Card>
  );
};
