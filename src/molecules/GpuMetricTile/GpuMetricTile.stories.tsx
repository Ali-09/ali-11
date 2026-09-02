import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GpuMetricTile } from './GpuMetricTile';
import { Icon } from '../../atoms/Icon';

const meta: Meta<typeof GpuMetricTile> = {
  title: '2. Molecules/GpuMetricTile',
  component: GpuMetricTile,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof GpuMetricTile>;

export const VramUsage: Story = {
  args: {
    icon: <Icon name="Cpu" size={16} glow="purple" />,
    title: 'VRAM UTILIZADA',
    mainValue: '6.4 / 16.0 GB',
    subValue: '40% Asignado a LLMs'
  }
};

export const PowerConsumption: Story = {
  args: {
    icon: <Icon name="Zap" size={16} glow="gold" />,
    title: 'POTENCIA ENERGÉTICA',
    mainValue: '115 W',
    subValue: 'TDP Máx: 160 W'
  }
};
