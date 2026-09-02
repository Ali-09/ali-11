import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: '1. Atoms/Select',
  component: Select,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Categoría Arcana',
    options: [
      { value: 'web', label: 'Portal Web / Frontend' },
      { value: 'bot', label: 'Bot / Automatización' },
      { value: 'agent', label: 'Agente Autónomo' },
      { value: 'llm', label: 'Motor de Tensores LLM' },
      { value: 'hub', label: 'Hub Central' }
    ],
    hint: 'Determina los sigilos y reglas de orquestación'
  }
};
