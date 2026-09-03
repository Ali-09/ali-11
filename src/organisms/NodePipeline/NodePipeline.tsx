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
    <div className={`p-6 rounded-3xl bg-[#050918]/90 border border-purple-500/25 shadow-2xl font-mono select-none ${className}`}>
      <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
        <span className="text-xs font-black font-heading tracking-wider bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-500/40">
          PIPELINE ACTIVE (4 NODES)
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-3 relative">
        {nodes.map((n, idx) => (
          <React.Fragment key={n.id}>
            {/* Node Card */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex-1 w-full md:w-auto p-4 rounded-2xl bg-[#090f26] border border-white/10 hover:border-cyan-400/50 transition-all duration-200 shadow-lg relative group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon name={n.icon} size={20} glow={n.tone} />
                </div>
                <div>
                  <h5 className="font-bold text-white text-xs tracking-wide">{n.name}</h5>
                  <p className="text-[10px] text-slate-400 mt-0.5">{n.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Connecting Animated Arrow */}
            {idx < nodes.length - 1 && (
              <>
                <div className="hidden md:flex items-center text-cyan-400/80 font-black text-sm px-1 animate-pulse">
                  ──▶
                </div>
                <div className="flex md:hidden items-center justify-center text-cyan-400/80 font-black text-sm py-1 animate-pulse">
                  ▼
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
