import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HoloCard } from './HoloCard';
import { VuMeter } from '../../atoms/VuMeter';
import { HoloDial } from '../../atoms/HoloDial';

const meta: Meta<typeof HoloCard> = {
  title: 'Molecules/HoloCard',
  component: HoloCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof HoloCard>;

export const QuantumDriveCaseStudy: Story = {
  args: {
    title: '02 QUANTUM DRIVE',
    tag: 'INTERACTION',
    code: 'STELLAR-02',
    glowTone: 'cyan',
    children: (
      <div className="space-y-3 font-mono text-xs text-slate-300">
        <p>Futuristic EV brand experience platform with telemetry integration.</p>
        <VuMeter label="Tensor Core Sync" value={84} segments={20} />
      </div>
    ),
    footer: (
      <span className="text-[10px] text-cyan-400 font-mono font-bold tracking-wider">
        VIEW CASE STUDY ➔
      </span>
    )
  }
};

export const HardwareTelemetryCard: Story = {
  args: {
    title: 'NVIDIA RTX 5080 // BLACKWELL',
    tag: '16GB GDDR7',
    code: 'HW-NV-5080',
    glowTone: 'purple',
    children: (
      <div className="flex items-center justify-around py-2">
        <HoloDial label="CLOCK" value={2750} min={1000} max={3200} unit="MHz" tone="purple" size="sm" />
        <HoloDial label="VRAM" value={82} min={0} max={100} unit="%" tone="cyan" size="sm" />
      </div>
    )
  }
};
