import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: '1. Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: ['Sparkles', 'Cpu', 'Flame', 'Droplets', 'Mountain', 'Zap', 'Gamepad2', 'Play', 'Square', 'RefreshCw', 'Shield', 'Radio', 'Volume2', 'VolumeX', 'Sun', 'Moon', 'Settings']
    },
    glow: {
      control: 'select',
      options: ['none', 'gold', 'rose', 'blue', 'emerald', 'purple', 'cyan']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const GlowingQuantumAtom: Story = {
  args: {
    name: 'Sparkles',
    size: 32,
    glow: 'purple'
  }
};

export const GamingGamepad: Story = {
  args: {
    name: 'Gamepad2',
    size: 28,
    glow: 'rose'
  }
};

export const ElementalIgnis: Story = {
  args: {
    name: 'Flame',
    size: 28,
    glow: 'rose'
  }
};
