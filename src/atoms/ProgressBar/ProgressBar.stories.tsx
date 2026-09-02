import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: '1. Atoms/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    label: 'Carga de Memoria VRAM',
    sublabel: 'RTX 4060 Ti',
    value: 78,
    max: 100,
    tone: 'purple'
  }
};
