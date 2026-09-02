import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArcaneStatCard } from './ArcaneStatCard';

const meta: Meta<typeof ArcaneStatCard> = {
  title: '2. Molecules/ArcaneStatCard',
  component: ArcaneStatCard,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArcaneStatCard>;

export const Default: Story = {
  args: {
    title: 'Portales Activos',
    value: 12,
    unit: 'SERVIDORES',
    iconName: 'Radio',
    tone: 'purple',
    badge: 'ONLINE',
    subtext: '5 orquestados, 7 externos'
  }
};
