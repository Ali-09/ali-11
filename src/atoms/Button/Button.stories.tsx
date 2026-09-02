import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: '1. Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'alchemy-gold', 'alchemy-fire', 'gaming-pulse', 'emerald-start', 'rose-stop', 'ghost', 'icon']
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const GamingPulse: Story = {
  args: {
    variant: 'gaming-pulse',
    children: 'MODO GAMING (LIBERAR VRAM)',
    icon: '🎮'
  }
};

export const EmeraldStart: Story = {
  args: {
    variant: 'emerald-start',
    children: 'INICIAR SERVICIO',
    icon: '▶'
  }
};

export const RoseStop: Story = {
  args: {
    variant: 'rose-stop',
    children: 'DETENER',
    icon: '⏹'
  }
};

export const AlchemyGold: Story = {
  args: {
    variant: 'alchemy-gold',
    children: 'RESONANCIA QUANTUM',
    icon: '⚛'
  }
};
