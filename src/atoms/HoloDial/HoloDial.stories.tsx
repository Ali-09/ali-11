import type { Meta, StoryObj } from '@storybook/react';
import { HoloDial } from './HoloDial';

const meta: Meta<typeof HoloDial> = {
  title: 'Atoms/HoloDial',
  component: HoloDial,
  parameters: { layout: 'centered' },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof HoloDial>;

export const IsoCameraDial: Story = {
  args: {
    label: 'ISO',
    value: 6400,
    min: 100,
    max: 12800,
    step: 100,
    tone: 'purple',
    size: 'lg'
  }
};

export const FrequencyGpuDial: Story = {
  args: {
    label: 'CLOCK',
    unit: 'MHz',
    value: 2650,
    min: 500,
    max: 3200,
    step: 25,
    tone: 'cyan',
    size: 'md'
  }
};

export const ThermalLimitDial: Story = {
  args: {
    label: 'TARGET',
    unit: '°C',
    value: 75,
    min: 40,
    max: 95,
    step: 1,
    tone: 'rose',
    size: 'sm'
  }
};
