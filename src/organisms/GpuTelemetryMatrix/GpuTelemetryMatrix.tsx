import React from 'react';
import { GpuMetricTile } from '../../molecules/GpuMetricTile';
import { Icon } from '../../atoms/Icon';

export interface GpuData {
  available: boolean;
  name: string;
  memory_total_mb: number;
  memory_used_mb: number;
  memory_used_percent: number;
  temperature_c: number;
  power_draw_w: number;
  utilization_percent: number;
  gaming_ready: boolean;
}

export interface GpuTelemetryMatrixProps {
  gpu?: GpuData;
  activeCount?: number;
  totalCount?: number;
  lanHost?: string;
}

export const GpuTelemetryMatrix: React.FC<GpuTelemetryMatrixProps> = ({
  gpu = {
    available: true,
    name: 'NVIDIA GeForce RTX 5080',
    memory_total_mb: 16303,
    memory_used_mb: 2750,
    memory_used_percent: 17.0,
    temperature_c: 36,
    power_draw_w: 80.5,
    utilization_percent: 35,
    gaming_ready: true
  },
  activeCount = 0,
  totalCount = 3,
  lanHost = 'http://ali.local'
}) => {
  const vramGb = (gpu.memory_used_mb / 1024).toFixed(1);
  const totalGb = (gpu.memory_total_mb / 1024).toFixed(1);

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 font-mono">
      {/* 1. Hardware Engine */}
      <GpuMetricTile
        title="HARDWARE ENGINE"
        icon={<Icon name="Cpu" size={14} glow="purple" />}
        mainValue={<div className="text-xs sm:text-sm font-bold truncate text-slate-800 dark:text-purple-300 truncate">{gpu.name}</div>}
        subValue="16GB GDDR7 // Blackwell"
      />

      {/* 2. VRAM Usage */}
      <GpuMetricTile
        title="VRAM USAGE"
        icon={<Icon name="Activity" size={14} glow="gold" />}
        mainValue={
          <div className="flex items-baseline gap-1 truncate">
            <span className="text-lg font-extrabold text-slate-800 dark:text-white">{vramGb}</span>
            <span className="text-xs text-slate-400">/ {totalGb} GB</span>
          </div>
        }
        progressBar={{ percent: gpu.memory_used_percent }}
      />

      {/* 3. Thermal / Power */}
      <GpuMetricTile
        title="THERMAL / POWER"
        icon={<Icon name="Zap" size={14} glow="rose" />}
        mainValue={
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-lg font-extrabold text-rose-500">{Math.round(gpu.temperature_c)} °C</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{Math.round(gpu.power_draw_w)} W</span>
          </div>
        }
        subValue={`Load: ${Math.round(gpu.utilization_percent)}%`}
      />

      {/* 4. Active Engines */}
      <GpuMetricTile
        title="ACTIVE CORES"
        icon={<Icon name="Sparkles" size={14} glow="purple" />}
        mainValue={<div className="text-lg font-extrabold text-indigo-600 dark:text-indigo-300">{activeCount} / {totalCount}</div>}
        subValue={<span className="text-emerald-600 dark:text-emerald-400">● Supervision</span>}
      />

      {/* 5. Gaming Readiness */}
      <GpuMetricTile
        title="GAMING READY"
        icon={<Icon name="Shield" size={14} glow={gpu.gaming_ready ? 'emerald' : 'rose'} />}
        mainValue={
          <div className={`text-xs sm:text-xs sm:text-sm font-bold truncate truncate ${gpu.gaming_ready ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
            {gpu.gaming_ready ? '100% READY' : '⚡ AI IN VRAM'}
          </div>
        }
        subValue={gpu.gaming_ready ? 'VRAM unallocated' : 'Auto-unload 5m'}
      />

      {/* 6. LAN Reverse Proxy */}
      <GpuMetricTile
        title="LAN REVERSE PROXY"
        icon={<Icon name="Radio" size={14} glow="cyan" />}
        mainValue={<div className="text-xs font-bold text-slate-800 dark:text-cyan-300 truncate">{lanHost}</div>}
        subValue="Direct Port 80 Route"
      />
    </section>
  );
};
