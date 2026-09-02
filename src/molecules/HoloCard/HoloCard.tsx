import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export interface HoloCardProps {
  title?: string;
  tag?: string;
  code?: string;
  glowTone?: 'purple' | 'cyan' | 'gold' | 'rose' | 'emerald';
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const HoloCard: React.FC<HoloCardProps> = ({
  title,
  tag,
  code = 'SYS-MOD-01',
  glowTone = 'cyan',
  children,
  footer,
  className = ''
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const toneColors = {
    purple: 'rgba(168, 85, 247, 0.25)',
    cyan: 'rgba(6, 182, 212, 0.25)',
    gold: 'rgba(251, 191, 36, 0.25)',
    rose: 'rgba(244, 63, 94, 0.25)',
    emerald: 'rgba(16, 185, 129, 0.25)'
  }[glowTone];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos((prev) => ({ ...prev, active: false }))}
      whileHover={{ y: -3 }}
      className={`relative rounded-3xl bg-[#060b1e]/85 dark:bg-[#050918]/90 border border-purple-500/25 dark:border-cyan-500/20 backdrop-blur-2xl p-5 shadow-2xl overflow-hidden group transition-all duration-300 ${className}`}
    >
      {/* Spotlight Radial Follower */}
      {mousePos.active && (
        <div
          className="absolute pointer-events-none rounded-full blur-2xl transition-opacity duration-200"
          style={{
            left: mousePos.x - 100,
            top: mousePos.y - 100,
            width: 200,
            height: 200,
            background: `radial-gradient(circle, ${toneColors} 0%, transparent 70%)`
          }}
        />
      )}

      {/* HUD Corner Reticles */}
      <div className="absolute top-2.5 left-2.5 font-mono text-[9px] text-cyan-400/40 select-none">┌ [{code}]</div>
      <div className="absolute top-2.5 right-2.5 font-mono text-[9px] text-cyan-400/40 select-none">[REV-A] ┐</div>
      <div className="absolute bottom-2.5 left-2.5 font-mono text-[9px] text-cyan-400/40 select-none">└</div>
      <div className="absolute bottom-2.5 right-2.5 font-mono text-[9px] text-cyan-400/40 select-none">┘</div>

      {/* Header */}
      {(title || tag) && (
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 relative z-10">
          {title && (
            <h3 className="font-heading font-black text-sm text-white tracking-wide bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text">
              {title}
            </h3>
          )}
          {tag && (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 uppercase">
              {tag}
            </span>
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Footer */}
      {footer && (
        <div className="mt-4 pt-3 border-t border-white/10 relative z-10 flex items-center justify-between">
          {footer}
        </div>
      )}
    </motion.div>
  );
};
