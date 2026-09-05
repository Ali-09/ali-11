import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../../atoms/Badge';
import { Icon, IconName } from '../../atoms/Icon';
import { useAetheriaAudio } from '../../hooks/useAetheriaAudio';
import { GRIMOIRE_OPEN_IMAGE } from '../../assets/grimoireAsset';

export interface DynamicServiceItem {
  id: string;
  name: string;
  category?: string;
  description?: string;
  port?: number;
  status: 'running' | 'stopped' | 'starting' | string;
  url_local?: string;
  url_lan?: string;
  models?: string[];
  specs?: Record<string, string>;
}

export interface ElementalInputModule {
  id: string;
  name: string;
  fullName: string;
  sub: string;
  icon: IconName;
  color: string;
  bgGradient: string;
  borderColor: string;
  strokeColor: string;
  num: string;
  specs: Record<string, string>;
}

export interface TitaniaReactorProps {
  title?: string;
  subtitle?: string;
  frequency?: string;
  gamingReady?: boolean;
  onCoreClick?: () => void;
  services?: Record<string, DynamicServiceItem> | DynamicServiceItem[];
  inputs?: ElementalInputModule[];
}

const DEFAULT_INPUTS: ElementalInputModule[] = [
  {
    id: 'geo',
    name: 'AEROCELL',
    fullName: 'AEROCELL / GEOCORE',
    sub: 'Cyclonic Air & Aegis Shield Sentinel',
    icon: 'Mountain',
    color: 'text-emerald-400',
    bgGradient: 'from-emerald-900/80 via-emerald-950 to-slate-950',
    borderColor: 'border-emerald-400/80 shadow-emerald-500/40',
    strokeColor: '#10b981',
    num: '01',
    specs: {
      'Propulsion Type': 'Cyclonic Air Pressure & Kinetic Aegis',
      'VRAM Protection': 'Auto-purge in 5m when idle',
      'Security Tier': 'Hardware Sentinel Ring 0',
      'Afinity': 'Geo / Earth Alchemy'
    }
  },
  {
    id: 'hydro',
    name: 'HYDROCORE',
    fullName: 'HYDROCORE (VECTOR RAG)',
    sub: 'Pressure-Gradient & Vector Memory Stream',
    icon: 'Droplets',
    color: 'text-cyan-400',
    bgGradient: 'from-cyan-900/80 via-blue-950 to-slate-950',
    borderColor: 'border-cyan-400/80 shadow-cyan-500/40',
    strokeColor: '#06b6d4',
    num: '02',
    specs: {
      'Propulsion Type': 'Hollow-Vent Pressure-Gradient Stream',
      'Memory Engine': 'ChromaDB / Qdrant Embeddings',
      'Bandwidth': '1.2 TB/s Memory Bus Sync',
      'Afinity': 'Hydro / Flow Memory'
    }
  },
  {
    id: 'plasma',
    name: 'PLASMCORE',
    fullName: 'PLASMCORE (DEEPSEEK)',
    sub: 'Ion Propulsion & DeepSeek-R1 Thought Core',
    icon: 'Sparkles',
    color: 'text-purple-400',
    bgGradient: 'from-purple-900/80 via-indigo-950 to-slate-950',
    borderColor: 'border-purple-400/80 shadow-purple-500/40',
    strokeColor: '#a855f7',
    num: '03',
    specs: {
      'Propulsion Type': 'High-Energy Ion Reasoning Beam',
      'Model Architecture': 'DeepSeek-R1 Distill (14B Tenors)',
      'Context Window': '32,768 Tokens FP16',
      'Afinity': 'Arcane Plasma / Quantum Logic'
    }
  },
  {
    id: 'ignis',
    name: 'THERMCORE',
    fullName: 'THERMCORE (FLUX.1)',
    sub: 'Thermal Diffusion Propulsion & Visual Matrix',
    icon: 'Flame',
    color: 'text-rose-400',
    bgGradient: 'from-rose-900/80 via-red-950 to-slate-950',
    borderColor: 'border-rose-400/80 shadow-rose-500/40',
    strokeColor: '#f43f5e',
    num: '04',
    specs: {
      'Propulsion Type': 'Thermal Matrix Latent Diffusion',
      'Generative Core': 'Flux.1 Schnell & SDXL Turbo',
      'Sampling Steps': '4 - 28 Euler Steps',
      'Afinity': 'Ignis / Thermal Creation'
    }
  },
  {
    id: 'lumi',
    name: 'LUMICORE',
    fullName: 'LUMICORE (RTX 5080)',
    sub: 'Photonic Thrust Drive & 16GB GDDR7 Hardware',
    icon: 'Sun',
    color: 'text-amber-400',
    bgGradient: 'from-amber-900/80 via-yellow-950 to-slate-950',
    borderColor: 'border-amber-400/80 shadow-amber-500/40',
    strokeColor: '#fbbf24',
    num: '05',
    specs: {
      'Hardware Silicon': 'NVIDIA GeForce RTX 5080 (Blackwell)',
      'CUDA Capability': 'CUDA 13.3 // 10,752 Cores',
      'VRAM Capacity': '16,303 MB GDDR7 @ 32 Gbps',
      'Afinity': 'Solar Lumi / Master Core'
    }
  }
];

const DEFAULT_FALLBACK_SERVICES: DynamicServiceItem[] = [
  {
    id: 'ollama',
    name: 'DeepSeek-R1 (14B)',
    category: 'llm',
    description: 'High-Reasoning Thought Vector & Code Inference',
    port: 11434,
    status: 'stopped',
    models: ['deepseek-r1:14b']
  },
  {
    id: 'open-webui',
    name: 'Qwen 2.5 Coder',
    category: 'agent',
    description: 'Autonomous Agent Hub & Code SOTA',
    port: 8080,
    status: 'stopped',
    models: ['qwen2.5-coder:14b']
  },
  {
    id: 'imagecore',
    name: 'ImageCore Studio',
    category: 'image',
    description: 'Flux.1 & SDXL Visual Diffusion Engine',
    port: 8000,
    status: 'stopped'
  }
];

export const TitaniaReactor: React.FC<TitaniaReactorProps> = ({
  title = 'TITANIA Q-DRIVE',
  subtitle = 'GRADIENT FUSION CHAMBER // MULTI-PROPULSION AI RESONANCE CORE',
  frequency = '13.3 GHz // CUDA SYNCHRONIZED',
  gamingReady = true,
  onCoreClick,
  services,
  inputs = DEFAULT_INPUTS
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const coreRef = useRef<HTMLDivElement | null>(null);
  const leftOrbsRef = useRef<Array<HTMLDivElement | null>>([]);
  const rightOrbsRef = useRef<Array<HTMLDivElement | null>>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [hoveredOrbId, setHoveredOrbId] = useState<string | null>(null);
  const [draggingOrbId, setDraggingOrbId] = useState<string | null>(null);
  const [dragKey, setDragKey] = useState<number>(0);
  const [inspectDetail, setInspectDetail] = useState<{
    id: string;
    name: string;
    category: string;
    description: string;
    technicalSpecs: Record<string, string>;
  } | null>(null);

  // Normalize dynamic services array from Record or Array
  const normalizedServices: DynamicServiceItem[] = React.useMemo(() => {
    if (!services) return DEFAULT_FALLBACK_SERVICES;
    if (Array.isArray(services)) {
      return services.length > 0 ? services : DEFAULT_FALLBACK_SERVICES;
    }
    const list = Object.values(services);
    return list.length > 0 ? list : DEFAULT_FALLBACK_SERVICES;
  }, [services]);

  const [conduitPaths, setConduitPaths] = useState<{
    left: Array<{ d: string; color: string; id: string; active: boolean }>;
    right: Array<{ d: string; color: string; id: string; active: boolean }>;
  }>({
    left: [],
    right: []
  });

  const { playCue } = useAetheriaAudio();

  // Helper para asignar iconos y colores mágicos a cualquier servicio dinámico
  const getServiceMeta = (srv: DynamicServiceItem, index: number) => {
    const cat = (srv.category || '').toLowerCase();
    let icon: IconName = 'Brain';
    let strokeColor = '#a855f7';
    let color = 'text-purple-400';
    let bgGradient = 'from-purple-900/80 via-indigo-950 to-slate-950';
    let borderColor = 'border-purple-400/80 shadow-purple-500/40';

    if (cat.includes('image') || cat.includes('diffusion') || srv.name.toLowerCase().includes('image')) {
      icon = 'Palette';
      strokeColor = '#f43f5e';
      color = 'text-rose-400';
      bgGradient = 'from-rose-900/80 via-red-950 to-slate-950';
      borderColor = 'border-rose-400/80 shadow-rose-500/40';
    } else if (cat.includes('agent') || cat.includes('hub') || cat.includes('web') || srv.name.toLowerCase().includes('qwen') || srv.name.toLowerCase().includes('code')) {
      icon = 'Code2';
      strokeColor = '#06b6d4';
      color = 'text-cyan-400';
      bgGradient = 'from-cyan-900/80 via-blue-950 to-slate-950';
      borderColor = 'border-cyan-400/80 shadow-cyan-500/40';
    } else if (cat.includes('bot') || cat.includes('telegram') || cat.includes('discord')) {
      icon = 'Bot';
      strokeColor = '#fbbf24';
      color = 'text-amber-400';
      bgGradient = 'from-amber-900/80 via-yellow-950 to-slate-950';
      borderColor = 'border-amber-400/80 shadow-amber-500/40';
    } else if (index % 3 === 1) {
      icon = 'Code2';
      strokeColor = '#06b6d4';
      color = 'text-cyan-400';
      bgGradient = 'from-cyan-900/80 via-blue-950 to-slate-950';
      borderColor = 'border-cyan-400/80 shadow-cyan-500/40';
    }

    return { icon, strokeColor, color, bgGradient, borderColor };
  };

  // Recálculo exacto de curvas Bézier en cualquier resolución o resize
  const updateSvgPaths = () => {
    if (!containerRef.current || !coreRef.current) return;
    const contRect = containerRef.current.getBoundingClientRect();
    const coreRect = coreRef.current.getBoundingClientRect();

    if (contRect.width < 900) {
      setConduitPaths({ left: [], right: [] });
      return;
    }

    const imgEl = coreRef.current.querySelector('img');
    const imgRect = imgEl ? imgEl.getBoundingClientRect() : coreRect;

    const coreCenterX = imgRect.left - contRect.left + imgRect.width / 2;
    const coreCenterY = imgRect.top - contRect.top + imgRect.height / 2 + 12; // Base de las páginas abiertas

    // Conexiones de Entrada (Izquierda) con soporte para arrastre libre 360°
    const leftPaths: Array<{ d: string; color: string; id: string; active: boolean }> = [];
    leftOrbsRef.current.forEach((orb, idx) => {
      if (!orb) return;
      const orbRect = orb.getBoundingClientRect();
      const orbCenterX = orbRect.left - contRect.left + orbRect.width / 2;
      const orbCenterY = orbRect.top - contRect.top + orbRect.height / 2;

      const isLeftOfCore = orbCenterX <= coreCenterX;
      const x1 = isLeftOfCore ? orbRect.right - contRect.left : orbRect.left - contRect.left;
      const y1 = orbCenterY;
      const x2 = isLeftOfCore ? coreCenterX - (imgRect.width * 0.38) : coreCenterX + (imgRect.width * 0.38);
      const y2 = coreCenterY;
      const cpX = (x1 + x2) / 2;

      const conduit = inputs[idx];
      leftPaths.push({
        d: `M ${x1} ${y1} C ${cpX} ${y1}, ${cpX} ${y2}, ${x2} ${y2}`,
        color: conduit?.strokeColor || '#a855f7',
        id: conduit?.id || `left-${idx}`,
        active: hoveredOrbId === conduit?.id || !gamingReady
      });
    });

    // Conexiones de Salida Dinámicas (Derecha - Servicios Draggable)
    const rightPaths: Array<{ d: string; color: string; id: string; active: boolean }> = [];
    rightOrbsRef.current.forEach((orb, idx) => {
      if (!orb) return;
      const orbRect = orb.getBoundingClientRect();
      const orbCenterX = orbRect.left - contRect.left + orbRect.width / 2;
      const orbCenterY = orbRect.top - contRect.top + orbRect.height / 2;

      const isRightOfCore = orbCenterX >= coreCenterX;
      const x1 = isRightOfCore ? coreCenterX + (imgRect.width * 0.38) : coreCenterX - (imgRect.width * 0.38);
      const y1 = coreCenterY;
      const x2 = isRightOfCore ? orbRect.left - contRect.left : orbRect.right - contRect.left;
      const y2 = orbCenterY;
      const cpX = (x1 + x2) / 2;

      const srv = normalizedServices[idx];
      const meta = getServiceMeta(srv, idx);
      const isRunning = srv?.status === 'running';

      rightPaths.push({
        d: `M ${x1} ${y1} C ${cpX} ${y1}, ${cpX} ${y2}, ${x2} ${y2}`,
        color: meta.strokeColor,
        id: srv?.id || `right-${idx}`,
        active: isRunning || hoveredOrbId === srv?.id
      });
    });

    setConduitPaths({ left: leftPaths, right: rightPaths });
  };

  useLayoutEffect(() => {
    updateSvgPaths();
    const handleResize = () => updateSvgPaths();
    window.addEventListener('resize', handleResize);

    const observer = new ResizeObserver(() => updateSvgPaths());
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [hoveredOrbId, normalizedServices, gamingReady, inputs]);

  // ANIMACIÓN MÁGICA: Vórtice Celestial de Partículas Alquímicas y Olas de Maná
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', onResize);

    // Motes mágicos celestiales (espuma de maná, chispas doradas, destellos púrpuras)
    interface MagicMote {
      angle: number;
      distance: number;
      speed: number;
      size: number;
      color: string;
      alpha: number;
      pulseRate: number;
      trail: Array<{ x: number; y: number }>;
    }

    const motes: MagicMote[] = [];
    const colors = [
      'rgba(251, 191, 36, ',  // Oro Lumi
      'rgba(168, 85, 247, ',  // Púrpura Arcano
      'rgba(6, 182, 212, ',   // Cian Cuántico
      'rgba(244, 63, 94, ',   // Fuego Igneo
      'rgba(16, 185, 129, '   // Esmeralda Geo
    ];

    for (let i = 0; i < 65; i++) {
      motes.push({
        angle: Math.random() * Math.PI * 2,
        distance: Math.random() * (width / 2.2) + 40,
        speed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 2.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
        pulseRate: Math.random() * 0.05 + 0.02,
        trail: []
      });
    }

    let animId: number;
    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 + 10;

      // 1. Resplandor pulsante del Vórtice Central
      const auraGradient = ctx.createRadialGradient(centerX, centerY, 20, centerX, centerY, 220);
      auraGradient.addColorStop(0, 'rgba(147, 51, 234, 0.15)');
      auraGradient.addColorStop(0.5, 'rgba(251, 191, 36, 0.06)');
      auraGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = auraGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Anillos Rúnicos Mágicos Flotantes
      ctx.save();
      ctx.translate(centerX, centerY);

      // Anillo rúnico exterior
      ctx.beginPath();
      ctx.arc(0, 0, 130 + Math.sin(time * 1.5) * 4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 12, 8, 12]);
      ctx.stroke();

      // Anillo rúnico medio en contrarotación
      ctx.beginPath();
      ctx.arc(0, 0, 95 + Math.cos(time * 2) * 3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.18)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([12, 8, 4, 8]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // 3. Órbitas de Motes Celestiales en Espiral hacia el Libro
      motes.forEach((m) => {
        m.angle += m.speed;
        // Leve gravedad hacia el centro
        m.distance -= 0.12;
        if (m.distance < 45) {
          m.distance = Math.random() * (width / 2.2) + 120;
          m.angle = Math.random() * Math.PI * 2;
        }

        const x = centerX + Math.cos(m.angle) * m.distance;
        const y = centerY + Math.sin(m.angle) * (m.distance * 0.55); // Perspectiva 3D elíptica

        // Dibujar mota de luz brillante
        const currentAlpha = m.alpha * (0.6 + Math.sin(time * 10 * m.pulseRate) * 0.4);
        ctx.beginPath();
        ctx.arc(x, y, m.size, 0, Math.PI * 2);
        ctx.fillStyle = `${m.color}${currentAlpha})`;
        ctx.shadowColor = `${m.color}1)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="theme-card rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden shadow-2xl">
      {/* HUD Blueprint Technical Brackets */}
      <div className="absolute top-3 left-3 text-purple-400/50 dark:text-cyan-400/40 font-mono text-[11px] select-none">┌ [SYS-TON-01]</div>
      <div className="absolute top-3 right-3 text-purple-400/50 dark:text-cyan-400/40 font-mono text-[11px] select-none">[SEC-REV-A] ┐</div>
      <div className="absolute bottom-3 left-3 text-purple-400/50 dark:text-cyan-400/40 font-mono text-[11px] select-none">└ [QUANTUM_GRID]</div>
      <div className="absolute bottom-3 right-3 text-purple-400/50 dark:text-cyan-400/40 font-mono text-[11px] select-none">[CHAMBER_SYNC] ┘</div>

      {/* 1. MASTER HEADER */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-slate-200 dark:border-purple-500/20 gap-4 min-w-0">
        <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 border border-purple-400/50 flex items-center justify-center text-white shadow-lg shadow-purple-600/30 shrink-0 mt-1 sm:mt-0">
            <Icon name="Atom" size={22} glow="purple" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-lg sm:text-xl font-black font-heading tracking-wider bg-gradient-to-r from-purple-600 via-indigo-500 to-amber-500 dark:from-purple-300 dark:via-cyan-200 dark:to-amber-300 bg-clip-text text-transparent truncate">
                {title}
              </h2>
              <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-cyan-300 border border-purple-300 dark:border-purple-800 tracking-widest uppercase shadow-sm shrink-0">
                ALCHEMICAL RESONANCE BLUEPRINT
              </span>
            </div>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 truncate">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 font-mono text-xs w-full lg:w-auto shrink-0 flex-wrap">
          <span className="text-[11px] text-slate-400 hidden xl:inline">
            ✦ Arrastra los orbes de servicios para reordenar libremente // Doble clic para telemetría
          </span>
          <button
            type="button"
            onClick={() => {
              playCue('click');
              setDragKey((k) => k + 1);
              setTimeout(() => updateSvgPaths(), 80);
            }}
            className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-purple-950/60 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800 text-[10px] font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            title="Restablecer orbes a sus posiciones gravitacionales originales"
          >
            <Icon name="RefreshCw" size={11} />
            <span>REORGANIZAR</span>
          </button>
          <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-[#070c18] border border-slate-200 dark:border-purple-500/30 flex items-center gap-2 shadow-inner shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs">FREQUENCY:</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs">{frequency}</span>
          </div>
        </div>
      </div>

      {/* 2. GRAND RESONANCE ARENA */}
      <div
        ref={containerRef}
        className="relative w-full max-w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[550px] bg-gradient-to-b from-slate-200/30 via-slate-200/10 to-transparent dark:from-[#050914] dark:via-[#080e22] dark:to-[#040711] rounded-3xl my-6 overflow-hidden border border-slate-200 dark:border-purple-500/25 flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8 select-none shadow-2xl"
      >
        {/* Canvas Mágico de Partículas Celestiales */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

        {/* SVG Circuits & Traveling Lasers */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden lg:block">
          <defs>
            <filter id="arcane-laser-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Conduits de Entrada */}
          {conduitPaths.left.map((p, idx) => (
            <g key={`left-group-${idx}`}>
              <path
                id={`left-path-${idx}`}
                d={p.d}
                fill="none"
                stroke={p.color}
                strokeWidth={p.active ? 3.5 : 2}
                strokeDasharray="6,6"
                className={`transition-all duration-300 ${p.active ? 'opacity-100' : 'opacity-65'}`}
                filter={p.active ? 'url(#arcane-laser-glow)' : undefined}
              />
              <circle r={p.active ? 5 : 3.5} fill={p.color} filter="url(#arcane-laser-glow)">
                <animateMotion
                  dur={p.active ? '1.3s' : '2.6s'}
                  repeatCount="indefinite"
                  path={p.d}
                />
              </circle>
            </g>
          ))}

          {/* Conduits de Salida Dinámicos */}
          {conduitPaths.right.map((p, idx) => (
            <g key={`right-group-${idx}`}>
              <path
                id={`right-path-${idx}`}
                d={p.d}
                fill="none"
                stroke={p.color}
                strokeWidth={p.active ? 3.5 : 2}
                strokeDasharray="6,6"
                className={`transition-all duration-300 ${p.active ? 'opacity-100' : 'opacity-65'}`}
                filter={p.active ? 'url(#arcane-laser-glow)' : undefined}
              />
              <circle r={p.active ? 5 : 3.5} fill={p.color} filter="url(#arcane-laser-glow)">
                <animateMotion
                  dur={p.active ? '1.1s' : '2.4s'}
                  repeatCount="indefinite"
                  path={p.d}
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* COLUMNA IZQUIERDA: 5 SELLOS ELEMENTALES CIRCULARES CON ALINEACIÓN VERTICAL PERFECTA */}
        <div className="flex flex-col items-center lg:items-start justify-center z-20 font-mono h-full py-2">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-cyan-500 font-black text-xs">[INPUTS]</span>
            <span className="text-[11px] font-bold text-slate-500 dark:text-cyan-300/80 uppercase tracking-widest">
              5 ELEMENTAL SEALS
            </span>
          </div>

          <div className="flex flex-row lg:flex-col items-center justify-center gap-3 sm:gap-3.5 flex-wrap">
            {inputs.map((c, idx) => {
              const isHovered = hoveredOrbId === c.id;
              return (
                <div key={c.id} className="relative flex items-center group">
                  {/* Orbe Circular */}
                  <motion.div
                    ref={(el) => (leftOrbsRef.current[idx] = el)}
                    whileHover={{ scale: 1.2, rotate: 6 }}
                    whileTap={{ scale: 0.92 }}
                    onHoverStart={() => {
                      playCue('click');
                      setHoveredOrbId(c.id);
                    }}
                    onHoverEnd={() => setHoveredOrbId(null)}
                    onDoubleClick={() => {
                      playCue('activate');
                      setInspectDetail({
                        id: c.id,
                        name: c.fullName,
                        category: 'Elemental Seal Input Module',
                        description: c.sub,
                        technicalSpecs: c.specs
                      });
                    }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 bg-gradient-to-br ${c.bgGradient} ${c.borderColor} flex items-center justify-center cursor-pointer shadow-xl relative transition-all duration-300 ${
                      isHovered ? 'ring-4 ring-purple-500/60 shadow-2xl' : ''
                    }`}
                  >
                    <div className="absolute inset-1 rounded-full border border-dashed border-white/20 animate-[spin_15s_linear_infinite]" />
                    <Icon name={c.icon} size={20} glow={c.id === 'lumi' ? 'gold' : c.id === 'plasma' ? 'purple' : c.id === 'ignis' ? 'rose' : c.id === 'geo' ? 'emerald' : 'cyan'} />
                    <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded-full text-[8px] font-mono font-black bg-black/80 text-white border border-current/40">
                      {c.num}
                    </span>
                  </motion.div>

                  {/* Tooltip Holográfico en Hover */}
                  <AnimatePresence>
                    {isHovered && !draggingOrbId && (
                      <motion.div
                        initial={{ opacity: 0, x: -10, scale: 0.9 }}
                        animate={{ opacity: 1, x: 12, scale: 1 }}
                        exit={{ opacity: 0, x: -10, scale: 0.9 }}
                        className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 z-40 whitespace-nowrap bg-slate-900/95 dark:bg-[#070c1c]/95 border border-purple-400/50 px-3.5 py-2 rounded-2xl shadow-2xl backdrop-blur-xl pointer-events-none"
                      >
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-black font-heading ${c.color}`}>{c.fullName}</span>
                          <span className="text-[9px] font-mono text-slate-400">[{c.num}]</span>
                        </div>
                        <p className="text-[10px] text-slate-300 font-mono mt-0.5">{c.sub}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUMNA CENTRAL: GRIMORIO ABIERTO CENTRADO Y AUTORRESPONSIVO */}
        <div ref={coreRef} className="relative z-20 flex flex-col items-center my-6 lg:my-0">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* Anillos de Contención */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_32s_linear_infinite]" />
            <div className="absolute inset-6 rounded-full border-2 border-purple-500/40 animate-[spin_22s_linear_infinite_reverse]" />
            <div className="absolute inset-12 rounded-full border border-lumigold/60 animate-[spin_14s_linear_infinite]" />

            {/* Aura Radial */}
            <div className="absolute inset-14 rounded-full bg-gradient-to-tr from-purple-600/35 via-indigo-500/25 to-amber-500/35 blur-2xl animate-pulse" />

            {/* Ilustración del Grimorio Abierto con Asset Seguro */}
            <motion.div
              whileHover={{ scale: 1.1, y: -6 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => {
                playCue('quantum_hum');
                onCoreClick?.();
              }}
              onDoubleClick={() => {
                playCue('activate');
                setInspectDetail({
                  id: 'core',
                  name: 'GRIMORIUM QUANTUM RESONANCE CORE',
                  category: 'Master Fusion Reactor',
                  description: 'Centro de fusión cuántico de tensores acelerado por NVIDIA RTX 5080 Blackwell.',
                  technicalSpecs: {
                    'Hardware Core': 'NVIDIA GeForce RTX 5080 (16GB GDDR7)',
                    'CUDA Platform': 'CUDA 13.3 // Tensor Cores 5th Gen',
                    'Bandwidth': '1.2 TB/s GDDR7 Memory Bus',
                    'State': gamingReady ? 'Gaming Ready (100% VRAM Libre)' : 'Active Inference Load'
                  }
                });
              }}
              className="relative z-30 cursor-pointer flex flex-col items-center group px-2"
              title="Clic para Modo Gaming. Doble clic para inspeccionar el núcleo."
            >
              <img
                src={GRIMOIRE_OPEN_IMAGE}
                alt="Grimorium Open Core"
                className="w-44 sm:w-52 lg:w-60 h-auto object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.65)] group-hover:drop-shadow-[0_0_45px_rgba(251,191,36,0.85)] transition-all duration-300 pointer-events-auto"
              />
            </motion.div>
          </div>

          <div className="text-center mt-2 font-mono">
            <h3 className="text-sm sm:text-base font-black font-heading tracking-widest text-slate-900 dark:text-white bg-gradient-to-r from-purple-400 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
              GRIMORIUM QUANTUM RESONANCE CORE
            </h3>
            <span className="text-[11px] font-bold text-slate-500 dark:text-cyan-400 tracking-wider block mt-0.5">
              NVIDIA RTX 5080 // 16GB GDDR7 // CUDA 13.3
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2.5 max-w-md font-mono text-[9px]">
            <span className="px-2.5 py-0.5 rounded-full bg-slate-200/70 dark:bg-[#070d1e] border border-slate-300 dark:border-purple-500/30 text-slate-600 dark:text-slate-300 font-semibold shadow-sm">
              [1] RESONATOR CROWN
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-200/70 dark:bg-[#070d1e] border border-slate-300 dark:border-purple-500/30 text-slate-600 dark:text-slate-300 font-semibold shadow-sm">
              [2] FLUX SPIRAL
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-200/70 dark:bg-[#070d1e] border border-slate-300 dark:border-purple-500/30 text-slate-600 dark:text-slate-300 font-semibold shadow-sm">
              [3] VENT CORE
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-200/70 dark:bg-[#070d1e] border border-slate-300 dark:border-purple-500/30 text-slate-600 dark:text-slate-300 font-semibold shadow-sm">
              [4] FUSION CHAMBER
            </span>
          </div>
        </div>

        {/* COLUMNA DERECHA: NODOS ORBES 100% DINÁMICOS CON ALINEACIÓN VERTICAL EQUILIBRADA */}
        <div className="flex flex-col items-center lg:items-end justify-center z-20 font-mono h-full py-2">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-purple-500 font-black text-xs">[OUTPUTS]</span>
            <span className="text-[11px] font-bold text-slate-500 dark:text-purple-300/80 uppercase tracking-widest">
              DIRECTED THRUST ({normalizedServices.length})
            </span>
          </div>

          <div className="flex flex-row lg:flex-col items-center justify-center gap-4 sm:gap-5 flex-wrap">
            {normalizedServices.map((srv, idx) => {
              const meta = getServiceMeta(srv, idx);
              const isHovered = hoveredOrbId === srv.id;
              const isRunning = srv.status === 'running';

              return (
                <div key={srv.id} className="relative flex items-center group">
                  {/* Tooltip Holográfico en Hover */}
                  <AnimatePresence>
                    {isHovered && !draggingOrbId && (
                      <motion.div
                        initial={{ opacity: 0, x: 10, scale: 0.9 }}
                        animate={{ opacity: 1, x: -12, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.9 }}
                        className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 z-40 whitespace-nowrap bg-slate-900/95 dark:bg-[#070c1c]/95 border border-cyan-400/50 px-3.5 py-2 rounded-2xl shadow-2xl backdrop-blur-xl pointer-events-none text-right"
                      >
                        <div className="flex items-center justify-end gap-2">
                          <span className={`text-xs font-black font-heading ${meta.color}`}>{srv.name}</span>
                          <span className={`text-[9px] font-mono font-bold ${isRunning ? 'text-emerald-400' : 'text-slate-400'}`}>
                            {isRunning ? '● ONLINE' : '○ STANDBY'}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-300 font-mono mt-0.5">
                          {srv.port ? `PUERTO :${srv.port}` : 'PROCESO'} {srv.models?.length ? `// ${srv.models.join(', ')}` : ''}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Orbe Circular Dinámico (Draggable / Movible) */}
                  <motion.div
                    key={`right-orb-${srv.id}-${dragKey}`}
                    ref={(el) => (rightOrbsRef.current[idx] = el)}
                    drag
                    dragConstraints={containerRef}
                    dragElastic={0.15}
                    whileHover={{ scale: 1.18 }}
                    whileDrag={{ scale: 1.28, zIndex: 60 }}
                    whileTap={{ scale: 0.92 }}
                    onDragStart={() => {
                      setDraggingOrbId(srv.id);
                      playCue('quantum_hum');
                    }}
                    onDrag={() => updateSvgPaths()}
                    onDragEnd={() => {
                      setDraggingOrbId(null);
                      updateSvgPaths();
                    }}
                    onHoverStart={() => {
                      if (!draggingOrbId) {
                        playCue('click');
                        setHoveredOrbId(srv.id);
                      }
                    }}
                    onHoverEnd={() => setHoveredOrbId(null)}
                    onDoubleClick={() => {
                      playCue('activate');
                      setInspectDetail({
                        id: srv.id,
                        name: srv.name,
                        category: 'Directed Quantum Output Service',
                        description: srv.description || `Servicio orquestado en puerto :${srv.port}`,
                        technicalSpecs: {
                          'Estado': srv.status.toUpperCase(),
                          'Puerto': srv.port ? `:${srv.port}` : 'Interno',
                          'Modelos SOTA': srv.models?.join(', ') || 'N/A',
                          'Reverse Proxy': srv.url_lan || 'http://ali.local'
                        }
                      });
                    }}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 bg-gradient-to-br ${meta.bgGradient} ${meta.borderColor} flex items-center justify-center cursor-grab active:cursor-grabbing shadow-xl relative select-none transition-shadow duration-300 ${
                      isRunning ? 'ring-4 ring-emerald-500/50 shadow-emerald-500/30' : isHovered ? 'ring-4 ring-cyan-500/60 shadow-2xl' : ''
                    }`}
                    title="✦ Arrastra para mover el portal libremente por el reactor // Doble clic para inspeccionar"
                  >
                    <div className="absolute inset-1 rounded-full border border-dashed border-white/20 animate-[spin_18s_linear_infinite_reverse]" />
                    <Icon name={meta.icon} size={22} glow={isRunning ? 'emerald' : 'purple'} />
                    {isRunning && (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black animate-ping" />
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. ALCHEMICAL ENERGY EQUATION BAR */}
      <div className="py-3 px-5 rounded-2xl bg-gradient-to-r from-slate-200/50 via-slate-200/30 to-slate-200/50 dark:from-[#080e22] dark:via-[#0c1432] dark:to-[#080e22] border border-slate-200 dark:border-purple-500/30 flex flex-wrap items-center justify-center gap-2 text-xs font-mono mb-6 shadow-md">
        <span className="text-emerald-500 font-bold">AEROCELL</span>
        <span className="text-slate-400">+</span>
        <span className="text-cyan-400 font-bold">HYDROCORE</span>
        <span className="text-purple-400 font-bold">PLASMCORE</span>
        <span className="text-rose-400 font-bold">THERMCORE</span>
        <span className="text-amber-400 font-bold">LUMICORE</span>
        <span className="text-cyan-400 font-bold mx-2">──────▶</span>
        <span className="px-3 py-1 rounded-full bg-purple-600/30 text-purple-300 font-bold border border-purple-400/50 shadow-sm">
          RESONANCE CHAMBER (FUSION)
        </span>
        <span className="text-cyan-400 font-bold mx-2">──────▶</span>
        <span className="px-3 py-1 rounded-full bg-amber-600/30 text-amber-300 font-bold border border-amber-400/50 shadow-sm">
          DIRECTED QUANTUM THRUST (:80)
        </span>
      </div>

      {/* 4. MODAL DE INSPECCIÓN EN DOBLE CLIC */}
      <AnimatePresence>
        {inspectDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50"
            onClick={() => setInspectDetail(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="theme-card rounded-3xl p-6 max-w-lg w-full border border-purple-400/60 shadow-2xl space-y-4 font-mono text-xs"
            >
              <div className="flex items-start justify-between pb-3 border-b border-slate-200 dark:border-purple-500/30">
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">
                    [{inspectDetail.category.toUpperCase()}]
                  </span>
                  <h3 className="text-lg font-black font-heading text-slate-900 dark:text-white mt-0.5">
                    {inspectDetail.name}
                  </h3>
                </div>
                <button
                  onClick={() => setInspectDetail(null)}
                  className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-purple-950/60 border border-slate-300 dark:border-purple-500/40 flex items-center justify-center text-slate-500 hover:text-white transition font-bold"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {inspectDetail.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Telemetría & Especificaciones de Conexión:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.entries(inspectDetail.technicalSpecs).map(([key, val]) => (
                    <div
                      key={key}
                      className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-[#070c1a] border border-slate-200 dark:border-purple-500/30"
                    >
                      <span className="text-[10px] text-slate-400 block">{key}:</span>
                      <span className="text-xs font-bold text-slate-800 dark:text-cyan-300 block truncate mt-0.5">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-purple-500/30 flex justify-end">
                <button
                  onClick={() => setInspectDetail(null)}
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition shadow-lg shadow-purple-600/30"
                >
                  Cerrar Inspección
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
