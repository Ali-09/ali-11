import React from 'react';

export interface HistogramWaveProps {
  label?: string;
  channels?: Array<{ name: string; color: string; data: number[] }>;
  height?: number;
  className?: string;
}

const DEFAULT_CHANNELS = [
  { name: 'Red / Thermal', color: '#f43f5e', data: [5, 12, 25, 45, 78, 65, 32, 18, 42, 68, 92, 54, 30, 10] },
  { name: 'Green / Tensor', color: '#10b981', data: [15, 30, 48, 70, 85, 92, 75, 55, 60, 45, 30, 20, 15, 8] },
  { name: 'Blue / Memory', color: '#06b6d4', data: [10, 20, 35, 60, 80, 72, 88, 95, 80, 62, 40, 25, 12, 5] }
];

export const HistogramWave: React.FC<HistogramWaveProps> = ({
  label = 'QUANTUM FREQUENCY HISTOGRAM',
  channels = DEFAULT_CHANNELS,
  height = 90,
  className = ''
}) => {
  const pointsToPath = (data: number[], w: number, h: number) => {
    const stepX = w / (data.length - 1);
    const pts = data.map((d, i) => ({ x: i * stepX, y: h - (d / 100) * (h - 8) }));
    if (pts.length < 2) return '';
    let path = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const mx = (pts[i].x + pts[i + 1].x) / 2;
      const my = (pts[i].y + pts[i + 1].y) / 2;
      path += ` Q ${pts[i].x} ${pts[i].y} ${mx} ${my}`;
    }
    path += ` T ${pts[pts.length - 1].x} ${pts[pts.length - 1].y}`;
    return path;
  };

  const width = 320;

  return (
    <div className={`p-3.5 rounded-2xl bg-slate-50 dark:bg-[#060a18]/90 border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-xl font-mono select-none ${className}`}>
      <div className="flex flex-wrap items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] gap-2">
        <span className="font-bold text-slate-300 uppercase tracking-wider truncate">{label}</span>
        <div className="flex items-center gap-2 shrink-0">
          {channels.map((c) => (
            <span key={c.name} className="flex items-center gap-1 text-[9px]" style={{ color: c.color }}>
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: c.color }} />
              {c.name.split('/')[0]}
            </span>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden" style={{ height }}>
        <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="w-full h-full">
          <defs>
            {channels.map((c, idx) => (
              <linearGradient key={`grad-${idx}`} id={`histo-grad-${idx}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={c.color} stopOpacity="0.35" />
                <stop offset="100%" stopColor={c.color} stopOpacity="0.0" />
              </linearGradient>
            ))}
          </defs>

          {/* Grid lines */}
          <line x1="0" y1={height / 2} x2={width} y2={height / 2} stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
          <line x1="0" y1={height - 1} x2={width} y2={height - 1} stroke="rgba(255,255,255,0.15)" />

          {/* Channels */}
          {channels.map((c, idx) => {
            const linePath = pointsToPath(c.data, width, height);
            const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;
            return (
              <g key={`chan-${idx}`}>
                <path d={areaPath} fill={`url(#histo-grad-${idx})`} />
                <path d={linePath} fill="none" stroke={c.color} strokeWidth="1.8" />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
