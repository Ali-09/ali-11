import React from 'react';
import { motion } from 'framer-motion';
import { Icon, IconName } from '../../atoms/Icon';

export interface PipelineNode {
  id: string;
  name: string;
  role: string;
  icon: IconName;
  tone: 'purple' | 'cyan' | 'gold' | 'emerald';
  status: 'active' | 'idle';
}

export interface NodePipelineProps {
  title?: string;
  nodes?: PipelineNode[];
  className?: string;
}

const DEFAULT_NODES: PipelineNode[] = [
  { id: 'ingest', name: 'Data Ingestion', role: 'Vector DB Sync', icon: 'Database', tone: 'cyan', status: 'active' },
  { id: 'router', name: 'AI Router', role: 'DeepSeek-R1 Logic', icon: 'Brain', tone: 'purple', status: 'active' },
  { id: 'worker', name: 'Worker Pool', role: 'Qwen 2.5 Tenors', icon: 'Cpu', tone: 'gold', status: 'active' },
  { id: 'action', name: 'Execution Stream', role: 'Reverse Proxy :80', icon: 'Send', tone: 'emerald', status: 'active' }
];

export const NodePipeline: React.FC<NodePipelineProps> = ({
  title = 'AI AUTOMATION & WORKFLOW PIPELINE',
  nodes = DEFAULT_NODES,
  className = ''
}) => {
  return (
    <div className={`p-4 sm:p-6 rounded-3xl bg-[#070c1a]/85 dark:bg-[#060a18]/90 border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-xl shadow-2xl font-mono select-none ${className}`}>
      <div className="flex flex-wrap items-center justify-between pb-3 mb-4 sm:mb-5 border-b border-white/10 gap-2">
        <span className="text-xs font-black font-heading tracking-wider bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent truncate">
          {title}
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-500/40 shrink-0">
          PIPELINE ACTIVE ({nodes.length} NODES)
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 relative">
        {nodes.map((n) => (
          <motion.div
            key={n.id}
            whileHover={{ scale: 1.015, y: -2, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
            className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-[#0b1126]/80 border border-slate-200/60 dark:border-white/[0.07] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200 shadow-lg min-w-0"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shrink-0">
                <Icon name={n.icon} size={18} glow={n.tone} />
              </div>
              <div className="min-w-0 flex-1">
                <h5 className="font-bold text-white text-xs tracking-wide truncate">{n.name}</h5>
                <p className="text-[10px] text-slate-400 mt-0.5 truncate">{n.role}</p>
              </div>
              <span className={`w-2 h-2 rounded-full shrink-0 ${n.status === 'active' ? 'bg-emerald-400' : 'bg-slate-600'}`} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
