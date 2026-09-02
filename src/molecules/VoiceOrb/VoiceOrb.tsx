import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../../atoms/Icon';
import { useAetheriaAudio } from '../../hooks/useAetheriaAudio';

export interface VoiceOrbProps {
  state?: 'idle' | 'listening' | 'speaking' | 'processing';
  title?: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
  onToggle?: () => void;
  className?: string;
}

export const VoiceOrb: React.FC<VoiceOrbProps> = ({
  state = 'listening',
  title = 'AI RESONANCE ASSISTANT',
  subtitle = 'Tap to speak // Streaming WebSocket audio',
  size = 'md',
  onToggle,
  className = ''
}) => {
  const { playCue } = useAetheriaAudio();
  const [waveBars, setWaveBars] = useState<number[]>(Array(16).fill(20));

  useEffect(() => {
    if (state === 'idle') return;
    const interval = setInterval(() => {
      setWaveBars(Array.from({ length: 16 }, () => Math.floor(Math.random() * 85 + 15)));
    }, 90);
    return () => clearInterval(interval);
  }, [state]);

  const sizeDims = {
    sm: { orb: 'w-24 h-24', icon: 24, font: 'text-xs' },
    md: { orb: 'w-36 h-36', icon: 36, font: 'text-sm' },
    lg: { orb: 'w-48 h-48', icon: 48, font: 'text-base' }
  }[size];

  return (
    <div className={`flex flex-col items-center justify-center font-mono select-none ${className}`}>
      {/* Container with interactive click */}
      <div className="relative flex items-center justify-center p-4">
        {/* Animated Waveform Bars (Left & Right) */}
        <div className="absolute inset-y-0 left-0 flex items-center gap-[3px] pointer-events-none opacity-80">
          {waveBars.slice(0, 8).map((h, i) => (
            <div
              key={`left-bar-${i}`}
              className="w-[3px] rounded-full bg-gradient-to-t from-purple-500 to-cyan-400 transition-all duration-100 shadow-[0_0_6px_#38bdf8]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center gap-[3px] pointer-events-none opacity-80">
          {waveBars.slice(8, 16).map((h, i) => (
            <div
              key={`right-bar-${i}`}
              className="w-[3px] rounded-full bg-gradient-to-t from-cyan-400 to-purple-500 transition-all duration-100 shadow-[0_0_6px_#a855f7]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        {/* Central Luminous Concentric Orb */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => {
            playCue('activate');
            onToggle?.();
          }}
          className={`relative ${sizeDims.orb} rounded-full cursor-pointer flex items-center justify-center z-10`}
        >
          {/* Outer Breathing Rings */}
          <div className="absolute -inset-4 rounded-full border-2 border-cyan-400/40 animate-ping opacity-30" />
          <div className="absolute -inset-2 rounded-full border border-purple-500/50 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/60 via-indigo-500/50 to-cyan-400/60 blur-xl animate-pulse" />

          {/* Inner Glass Sphere */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#121c3d] via-[#090f26] to-[#040711] border-2 border-cyan-400/70 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.6)]">
            <Icon
              name={state === 'listening' ? 'Mic' : state === 'speaking' ? 'Volume2' : 'Sparkles'}
              size={sizeDims.icon}
              glow="cyan"
            />
          </div>
        </motion.div>
      </div>

      {/* Label and Status */}
      <div className="text-center mt-3">
        <h4 className="font-heading font-black text-white text-sm tracking-wider uppercase bg-gradient-to-r from-cyan-300 via-purple-300 to-amber-300 bg-clip-text text-transparent">
          {title}
        </h4>
        <p className="text-slate-400 text-xs mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
};
