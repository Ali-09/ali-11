import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Icon } from '../Icon';

const meta: Meta<typeof Input> = {
  title: '1. Atoms/Input',
  component: Input,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Nombre del Portal',
    placeholder: 'ej: Nexus Web 3000',
    hint: 'Nombre descriptivo visible en el panel'
  }
};

export const WithIcon: Story = {
  args: {
    label: 'Canal de Conexión (Puerto)',
    placeholder: '8080',
    icon: <Icon name="Radio" size={14} glow="purple" />,
    glowAura: 'purple'
  }
};

export const WithError: Story = {
  args: {
    label: 'Ruta del Ejecutable',
    defaultValue: 'C:\\archivo_inexistente.exe',
    error: 'No se encontró el ejecutable en el sistema'
  }
};
