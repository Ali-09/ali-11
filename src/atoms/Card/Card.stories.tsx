import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: '1. Atoms/Card',
  component: Card
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <div className="text-slate-800 dark:text-white font-mono">Cristal Neomórfico Alquímico</div>,
    glowAura: 'purple'
  }
};
