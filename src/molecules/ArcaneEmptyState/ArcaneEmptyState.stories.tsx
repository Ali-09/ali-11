import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArcaneEmptyState } from './ArcaneEmptyState';
import { Icon } from '../../atoms/Icon';

const meta: Meta<typeof ArcaneEmptyState> = {
  title: '2. Molecules/ArcaneEmptyState',
  component: ArcaneEmptyState,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArcaneEmptyState>;

export const Default: Story = {
  args: {
    iconName: 'Radio',
    title: 'No se detectaron portales activos',
    description: 'Verifica que tus servidores web o APIs estén corriendo o realiza un escaneo forzado.',
    action: {
      label: 'ESCANEAR SISTEMA',
      onClick: () => alert('Escaneando...'),
      icon: <Icon name="RefreshCw" size={13} />
    }
  }
};
