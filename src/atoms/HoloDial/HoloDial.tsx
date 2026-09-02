import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAetheriaAudio } from '../../hooks/useAetheriaAudio';

export interface HoloDialProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  unit?: string;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'purple' | 'cyan' | 'amber' | 'emerald' | 'rose';
  onChange?: (val: number) => void;
  className?: string;
}

export const HoloDial: React.FC<HoloDialProps> = ({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  label = 'VALUE',
  unit = '',
  size = 'md',
  tone = 'purple',
  onChange,
  className = ''
}) => {
  const [internalVal, setInternalVal] = useState(value);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startVal = useRef(value);
  const { playCue } = useAetheriaAudio();

  useEffect(() => {
    setInternalVal(value);
  }, [value]);

  const toneStyles = {
    purple: {
      stroke: '#a855f7',
      glow: 'drop-shadow(0 0 10px rgba(168,85,247,0.7))',
      text: 'text-purple-400',
      ring: 'from-purple-600/30 to-indigo-900/40',
      border: 'border-purple-500/40'
    },
    cyan: {
      stroke: '#06b6d4',
      glow: 'drop-shadow(0 0 10px rgba(6,182,212,0.7))',
      text: 'text-cyan-400',
      ring: 'from-cyan-600/30 to-blue-900/40',
      border: 'border-cyan-500/40'
    },
    amber: {
      stroke: '#fbbf24',
      glow: 'drop-shadow(0 0 10px rgba(251,191,36,0.7))',
      text: 'text-amber-400',
      ring: 'from-amber-600/30 to-yellow-900/40',
      border: 'border-amber-500/40'
    },
    emerald: {
      stroke: '#10b981',
      glow: 'drop-shadow(0 0 10px rgba(16,185,129,0.7))',
      text: 'text-emerald-400',
      ring: 'from-emerald-600/30 to-teal-900/40',
      border: 'border-emerald-500/40'
    },
    rose: {
      stroke: '#f43f5e',
      glow: 'drop-shadow(0 0 10px rgba(244,63,94,0.7))',
      text: 'text-rose-400',
      ring: 'from-rose-600/30 to-pink-900/40',
      border: 'border-rose-500/40'
    }
  }[tone];

  const sizeDims = {
    sm: { w: 90, h: 90, radius: 36, strokeWidth: 3.5, fontVal: 'text-sm', fontLbl: 'text-[9px]' },
    md: { w: 130, h: 130, radius: 52, strokeWidth: 4.5, fontVal: 'text-xl', fontLbl: 'text-[10px]' },
    lg: { w: 170, h: 170, radius: 68, strokeWidth: 6, fontVal: 'text-2xl', fontLbl: 'text-xs' }
  }[size];

  const pct = Math.max(0, Math.min(1, (internalVal - min) / (max - min)));
  const angle = pct * 270 - 135; // -135deg to +135deg
  const circumference = 2 * Math.PI * sizeDims.radius;
  const strokeDashoffset = circumference - (pct * 0.75) * circumference;

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startY.current = e.clientY;
    startVal.current = internalVal;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const deltaY = startY.current - e.clientY;
    const range = max - min;
    const stepDelta = Math.round((deltaY / 150) * range / step) * step;
    let nextVal = Math.max(min, Math.min(max, startVal.current + stepDelta));
    if (nextVal !== internalVal) {
      setInternalVal(nextVal);
      onChange?.(nextVal);
      if (Math.random() > 0.6) playCue('click');
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const dir = e.deltaY < 0 ? 1 : -1;
    let nextVal = Math.max(min, Math.min(max, internalVal + dir * step));
    if (nextVal !== internalVal) {
      setInternalVal(nextVal);
      onChange?.(nextVal);
      playCue('click');
    }
  };

  // Generate tick marks
  const tickCount = 28;
  const ticks = Array.from({ length: tickCount }).map((_, i) => {
    const tickAngle = (i / (tickCount - 1)) * 270 - 135;
    const isLit = (i / (tickCount - 1)) <= pct;
    return { angle: tickAngle, isLit };
  });

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
      className={`relative inline-flex flex-col items-center select-none cursor-ns-resize group ${className}`}
      title="Arrastra verticalmente o usa la rueda del ratón para ajustar"
    >
      <div
        className="relative flex items-center justify-center rounded-full bg-gradient-to-b from-[#0a122c] to-[#040711] border shadow-2xl p-2"
        style={{ width: sizeDims.w, height: sizeDims.h, borderColor: 'rgba(255,255,255,0.08)' }}
      >
        {/* Glow backlight */}
        <div
          className="absolute inset-2 rounded-full opacity-40 blur-md pointer-events-none transition-all duration-300 group-hover:opacity-75"
          style={{ background: `radial-gradient(circle, ${toneStyles.stroke} 0%, transparent 70%)` }}
        />

        {/* Outer Tick Marks */}
        <div className="absolute inset-0 pointer-events-none">
          {ticks.map((t, idx) => (
            <div
              key={idx}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center"
              style={{
                transform: `rotate(${t.angle}deg) translateY(-${sizeDims.w / 2 - 6}px)`
              }}
            >
              <div
                className={`w-[1.5px] h-[4px] rounded-full transition-colors duration-200 ${
                  t.isLit ? toneStyles.text : 'bg-slate-700/50'
                }`}
                style={{
                  backgroundColor: t.isLit ? toneStyles.stroke : undefined,
                  boxShadow: t.isLit ? `0 0 6px ${toneStyles.stroke}` : undefined
                }}
              />
            </div>
          ))}
        </div>

        {/* SVG Arc Progress Ring */}
        <svg
          width={sizeDims.w}
          height={sizeDims.h}
          className="absolute inset-0 pointer-events-none -rotate-[225deg]"
        >
          <circle
            cx={sizeDims.w / 2}
            cy={sizeDims.h / 2}
            r={sizeDims.radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={sizeDims.strokeWidth}
            strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
          />
          <circle
            cx={sizeDims.w / 2}
            cy={sizeDims.h / 2}
            r={sizeDims.radius}
            fill="none"
            stroke={toneStyles.stroke}
            strokeWidth={sizeDims.strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ filter: toneStyles.glow }}
          />
        </svg>

        {/* Inner Knob Cylinder */}
        <div
          className="relative z-10 w-3/4 h-3/4 rounded-full bg-gradient-to-br from-[#121c3d] via-[#080e22] to-[#040711] border border-white/10 flex flex-col items-center justify-center shadow-inner"
        >
          <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">
            {label}
          </span>
          <span className={`font-mono font-black ${sizeDims.fontVal} ${toneStyles.text} tracking-tight`}>
            {internalVal}{unit && <span className="text-[10px] text-slate-400 ml-0.5">{unit}</span>}
          </span>
        </div>
      </div>
    </div>
  );
};
