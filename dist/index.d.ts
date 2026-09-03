import React from 'react';
import * as LucideIcons from 'lucide-react';
import { HTMLMotionProps } from 'framer-motion';

declare const AetheriaTokens: {
    readonly elements: {
        readonly lumi: {
            readonly name: "LUMICORE";
            readonly element: "Solar Light / Gold Alchemy";
            readonly primary: "#fbbf24";
            readonly bgLight: "#fffbeb";
            readonly bgDark: "rgba(251, 191, 36, 0.12)";
            readonly border: "rgba(251, 191, 36, 0.45)";
            readonly glow: "0 0 16px rgba(251, 191, 36, 0.35)";
        };
        readonly ignis: {
            readonly name: "THERMCORE";
            readonly element: "Fire / Thermal Diffusion";
            readonly primary: "#f43f5e";
            readonly bgLight: "#fff1f2";
            readonly bgDark: "rgba(244, 63, 94, 0.12)";
            readonly border: "rgba(244, 63, 94, 0.45)";
            readonly glow: "0 0 16px rgba(244, 63, 94, 0.35)";
        };
        readonly hydro: {
            readonly name: "HYDROCORE";
            readonly element: "Water / Vector Memory";
            readonly primary: "#0284c7";
            readonly bgLight: "#f0f9ff";
            readonly bgDark: "rgba(2, 132, 199, 0.12)";
            readonly border: "rgba(2, 132, 199, 0.45)";
            readonly glow: "0 0 16px rgba(2, 132, 199, 0.35)";
        };
        readonly geo: {
            readonly name: "GEOCORE";
            readonly element: "Earth / Aegis Sentinel";
            readonly primary: "#10b981";
            readonly bgLight: "#ecfdf5";
            readonly bgDark: "rgba(16, 185, 129, 0.12)";
            readonly border: "rgba(16, 185, 129, 0.45)";
            readonly glow: "0 0 16px rgba(16, 185, 129, 0.35)";
        };
        readonly plasma: {
            readonly name: "PLASMCORE";
            readonly element: "Aether / Arcane Reasoning";
            readonly primary: "#a855f7";
            readonly bgLight: "#faf5ff";
            readonly bgDark: "rgba(168, 85, 247, 0.15)";
            readonly border: "rgba(168, 85, 247, 0.45)";
            readonly glow: "0 0 18px rgba(168, 85, 247, 0.40)";
        };
    };
    readonly surfaces: {
        readonly pearlGlass: "rgba(255, 255, 255, 0.92)";
        readonly cyberObsidian: "rgba(16, 24, 47, 0.85)";
        readonly borderLight: "rgba(226, 232, 240, 0.9)";
        readonly borderDark: "rgba(30, 44, 79, 0.85)";
    };
};

type SoundCue = 'click' | 'quantum_hum' | 'pulse' | 'activate' | 'purge';
declare function useAetheriaAudio(): {
    muted: boolean;
    toggleMute: () => void;
    playCue: (cue?: SoundCue) => void;
};

type IconName = keyof typeof LucideIcons;
type IconGlow = 'none' | 'gold' | 'rose' | 'blue' | 'emerald' | 'purple' | 'cyan';
interface IconProps {
    name: IconName;
    size?: number;
    className?: string;
    glow?: IconGlow;
    color?: string;
}
declare const Icon: React.FC<IconProps>;

type ButtonVariant = 'primary' | 'alchemy-gold' | 'alchemy-fire' | 'gaming-pulse' | 'emerald-start' | 'rose-stop' | 'ghost' | 'icon';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    fullWidth?: boolean;
}
declare const Button: React.FC<ButtonProps>;

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    glowAura?: 'none' | 'purple' | 'gold' | 'emerald' | 'rose';
    onClick?: () => void;
}
declare const Card: React.FC<CardProps>;

type BadgeTone = 'emerald' | 'purple' | 'amber' | 'rose' | 'cyan' | 'slate';
interface BadgeProps {
    children: React.ReactNode;
    tone?: BadgeTone;
    dot?: boolean;
    pulse?: boolean;
}
declare const Badge: React.FC<BadgeProps>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    hint?: string;
    error?: string;
    icon?: React.ReactNode;
    rightElement?: React.ReactNode;
    glowAura?: 'none' | 'purple' | 'gold' | 'emerald' | 'rose';
}
declare const Input: React.FC<InputProps>;

interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    hint?: string;
    error?: string;
    options: SelectOption[];
    glowAura?: 'none' | 'purple' | 'gold' | 'emerald' | 'rose';
}
declare const Select: React.FC<SelectProps>;

interface ToggleProps {
    label?: string;
    description?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    tone?: 'purple' | 'gold' | 'emerald' | 'rose' | 'cyan';
    disabled?: boolean;
    className?: string;
}
declare const Toggle: React.FC<ToggleProps>;

interface ProgressBarProps {
    value: number;
    max?: number;
    label?: string;
    sublabel?: string;
    showValueLabel?: boolean;
    tone?: 'purple' | 'gold' | 'emerald' | 'rose' | 'cyan';
    pulse?: boolean;
    className?: string;
}
declare const ProgressBar: React.FC<ProgressBarProps>;

interface CodeBlockProps {
    code: string;
    language?: string;
    title?: string;
    copyable?: boolean;
    className?: string;
}
declare const CodeBlock: React.FC<CodeBlockProps>;

type SealAffinity = 'lumi' | 'ignis' | 'hydro' | 'geo' | 'plasma';
interface ElementalSealProps {
    affinity: SealAffinity;
    label?: string;
    sublabel?: string;
    size?: 'sm' | 'md' | 'lg';
    pulsing?: boolean;
    onClick?: () => void;
}
declare const ElementalSeal: React.FC<ElementalSealProps>;

interface ArcaneTooltipProps {
    /** Término o concepto tecno-mágico (opcional) */
    term?: string;
    /** Equivalente técnico estándar / terrenal */
    techTerm?: string;
    /** Explicación concisa y amigable */
    explanation: string;
    /** Posición preferida de la burbuja */
    position?: 'top' | 'bottom' | 'left' | 'right';
    /** Tamaño del glifo de ayuda (por defecto: 13px) */
    size?: number;
    /** Si se provee, envuelve al elemento hijo en lugar de mostrar solo el glifo ? */
    children?: React.ReactNode;
    /** Clase CSS adicional */
    className?: string;
}
declare const ArcaneTooltip: React.FC<ArcaneTooltipProps>;

interface GpuMetricTileProps {
    title: string;
    icon: React.ReactNode;
    mainValue: React.ReactNode;
    subValue?: React.ReactNode;
    progressBar?: {
        percent: number;
        color?: string;
    };
}
declare const GpuMetricTile: React.FC<GpuMetricTileProps>;

interface ServiceStatusPillProps {
    status: 'running' | 'stopped' | 'starting';
}
declare const ServiceStatusPill: React.FC<ServiceStatusPillProps>;

interface ModelTagGroupProps {
    models?: string[];
}
declare const ModelTagGroup: React.FC<ModelTagGroupProps>;

interface AudioControlProps {
    muted: boolean;
    onToggle: () => void;
}
declare const AudioControl: React.FC<AudioControlProps>;

interface ArcaneSearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    shortcutHint?: string;
    onClear?: () => void;
    className?: string;
}
declare const ArcaneSearchInput: React.FC<ArcaneSearchInputProps>;

interface ArcaneStatCardProps {
    title: string;
    value: string | number;
    unit?: string;
    iconName?: any;
    tone?: 'purple' | 'gold' | 'emerald' | 'rose' | 'cyan';
    badge?: string;
    subtext?: string;
    trend?: {
        value: string;
        positive: boolean;
    };
    onClick?: () => void;
    className?: string;
}
declare const ArcaneStatCard: React.FC<ArcaneStatCardProps>;

interface TabItem {
    id: string;
    label: string;
    iconName?: any;
    badge?: string;
    badgeTone?: 'purple' | 'amber' | 'emerald' | 'cyan' | 'rose';
    dot?: boolean;
    tooltip?: {
        term?: string;
        techTerm?: string;
        explanation: string;
    };
}
interface ArcaneTabsProps {
    tabs: TabItem[];
    activeTab: string;
    onChange: (id: string) => void;
    tone?: 'purple' | 'gold' | 'emerald' | 'rose' | 'cyan';
    className?: string;
}
declare const ArcaneTabs: React.FC<ArcaneTabsProps>;

interface StepItem {
    number: number;
    title: string;
    subtitle?: string;
}
interface ArcaneStepperProps {
    steps: StepItem[];
    currentStep: number;
    onStepClick?: (stepNumber: number) => void;
    className?: string;
}
declare const ArcaneStepper: React.FC<ArcaneStepperProps>;

interface ArcaneModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle?: string;
    iconName?: any;
    iconTone?: 'purple' | 'gold' | 'emerald' | 'rose' | 'cyan';
    tooltip?: {
        term?: string;
        techTerm?: string;
        explanation: string;
    };
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}
declare const ArcaneModal: React.FC<ArcaneModalProps>;

interface ArcaneEmptyStateProps {
    iconName?: any;
    title: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
        icon?: React.ReactNode;
        variant?: ButtonVariant;
    };
    className?: string;
}
declare const ArcaneEmptyState: React.FC<ArcaneEmptyStateProps>;

interface DynamicServiceItem {
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
interface ElementalInputModule {
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
interface TitaniaReactorProps {
    title?: string;
    subtitle?: string;
    frequency?: string;
    gamingReady?: boolean;
    onCoreClick?: () => void;
    services?: Record<string, DynamicServiceItem> | DynamicServiceItem[];
    inputs?: ElementalInputModule[];
}
declare const TitaniaReactor: React.FC<TitaniaReactorProps>;

interface GpuData {
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
interface GpuTelemetryMatrixProps {
    gpu?: GpuData;
    activeCount?: number;
    totalCount?: number;
    lanHost?: string;
}
declare const GpuTelemetryMatrix: React.FC<GpuTelemetryMatrixProps>;

interface ServiceItem {
    id: string;
    name: string;
    category: string;
    description: string;
    port: number;
    status: 'running' | 'stopped' | 'starting';
    url_local?: string;
    url_lan?: string;
    models?: string[];
}
interface ServiceCardProps {
    service: ServiceItem;
    onStart?: (id: string) => void;
    onStop?: (id: string) => void;
    onRestart?: (id: string) => void;
    onEdit?: (id: string) => void;
}
declare const ServiceCard: React.FC<ServiceCardProps>;

declare const LiveTerminal: React.FC;

interface ArcaneServerPortalCardProps {
    title: string;
    port: number;
    pid: number;
    processName: string;
    protocol?: string;
    urlLocal?: string;
    urlLan?: string;
    isManaged?: boolean;
    isWebDev?: boolean;
    isSystemInternal?: boolean;
    onOpen?: () => void;
    onAdopt?: () => void;
    onKill?: () => void;
    isAdopting?: boolean;
    isKilling?: boolean;
    className?: string;
}
declare const ArcaneServerPortalCard: React.FC<ArcaneServerPortalCardProps>;

interface ArcaneRecipeReaderProps {
    title: string;
    port?: number;
    tone?: 'purple' | 'cyan' | 'emerald' | 'amber' | 'rose';
    alchemicalName?: string;
    techTerm?: string;
    description: string;
    prerequisites?: string[];
    launchCommand: string;
    parameters?: {
        label: string;
        value: string;
    }[];
    tips?: string;
    actionLabel?: string;
    onAction?: () => void;
    className?: string;
}
declare const ArcaneRecipeReader: React.FC<ArcaneRecipeReaderProps>;

type SealSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
interface AetheriaSealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    size?: SealSize;
    glow?: boolean;
    spinning?: boolean;
    className?: string;
    onClick?: () => void;
}
declare const AetheriaSeal: React.FC<AetheriaSealProps>;

interface HoloDialProps {
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
declare const HoloDial: React.FC<HoloDialProps>;

interface VuMeterProps {
    value?: number;
    segments?: number;
    label?: string;
    channels?: 'single' | 'stereo';
    rightValue?: number;
    showPercentage?: boolean;
    className?: string;
}
declare const VuMeter: React.FC<VuMeterProps>;

interface SegmentedOption {
    id: string;
    label: string;
    icon?: React.ReactNode;
    badge?: string;
}
interface SegmentedToggleProps {
    options: SegmentedOption[];
    value: string;
    onChange: (id: string) => void;
    tone?: 'purple' | 'cyan' | 'gold' | 'emerald';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
declare const SegmentedToggle: React.FC<SegmentedToggleProps>;

interface VoiceOrbProps {
    state?: 'idle' | 'listening' | 'speaking' | 'processing';
    title?: string;
    subtitle?: string;
    size?: 'sm' | 'md' | 'lg';
    onToggle?: () => void;
    className?: string;
}
declare const VoiceOrb: React.FC<VoiceOrbProps>;

interface HoloCardProps {
    title?: string;
    tag?: string;
    code?: string;
    glowTone?: 'purple' | 'cyan' | 'gold' | 'rose' | 'emerald';
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}
declare const HoloCard: React.FC<HoloCardProps>;

interface HistogramWaveProps {
    label?: string;
    channels?: Array<{
        name: string;
        color: string;
        data: number[];
    }>;
    height?: number;
    className?: string;
}
declare const HistogramWave: React.FC<HistogramWaveProps>;

interface PipelineNode {
    id: string;
    name: string;
    role: string;
    icon: IconName;
    tone: 'purple' | 'cyan' | 'gold' | 'emerald';
    status: 'active' | 'idle';
}
interface NodePipelineProps {
    title?: string;
    nodes?: PipelineNode[];
    className?: string;
}
declare const NodePipeline: React.FC<NodePipelineProps>;

export { AetheriaSeal, type AetheriaSealProps, AetheriaTokens, ArcaneEmptyState, type ArcaneEmptyStateProps, ArcaneModal, type ArcaneModalProps, ArcaneRecipeReader, type ArcaneRecipeReaderProps, ArcaneSearchInput, type ArcaneSearchInputProps, ArcaneServerPortalCard, type ArcaneServerPortalCardProps, ArcaneStatCard, type ArcaneStatCardProps, ArcaneStepper, type ArcaneStepperProps, ArcaneTabs, type ArcaneTabsProps, ArcaneTooltip, type ArcaneTooltipProps, AudioControl, type AudioControlProps, Badge, type BadgeProps, type BadgeTone, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, type CardProps, CodeBlock, type CodeBlockProps, type DynamicServiceItem, type ElementalInputModule, ElementalSeal, type ElementalSealProps, type GpuData, GpuMetricTile, type GpuMetricTileProps, GpuTelemetryMatrix, type GpuTelemetryMatrixProps, HistogramWave, type HistogramWaveProps, HoloCard, type HoloCardProps, HoloDial, type HoloDialProps, Icon, type IconGlow, type IconName, type IconProps, Input, type InputProps, LiveTerminal, ModelTagGroup, type ModelTagGroupProps, NodePipeline, type NodePipelineProps, type PipelineNode, ProgressBar, type ProgressBarProps, type SealAffinity, type SealSize, type SegmentedOption, SegmentedToggle, type SegmentedToggleProps, Select, type SelectOption, type SelectProps, ServiceCard, type ServiceCardProps, type ServiceItem, ServiceStatusPill, type ServiceStatusPillProps, type SoundCue, type StepItem, type TabItem, TitaniaReactor, type TitaniaReactorProps, Toggle, type ToggleProps, VoiceOrb, type VoiceOrbProps, VuMeter, type VuMeterProps, useAetheriaAudio };
