import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArcaneTooltip } from './ArcaneTooltip';

const meta: Meta<typeof ArcaneTooltip> = {
  title: '1. Atoms/ArcaneTooltip',
  component: ArcaneTooltip,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArcaneTooltip>;

export const Default: Story = {
  args: {
    term: 'Sigilos de Invocación',
    techTerm: 'Argumentos CLI / Flags',
    explanation: 'Parámetros que se envían al proceso al momento del arranque (ej: run dev, --port 8080).'
  }
};

export const WrappingElement: Story = {
  render: () => (
    <div className="p-8">
      <ArcaneTooltip
        term="Portal de Aether"
        techTerm="Puerto de Red TCP"
        explanation="Canal numérico donde escucha el servidor web (ej: 3000, 8080)."
      >
        <span className="font-mono text-purple-400 font-bold">PORT 8080</span>
      </ArcaneTooltip>
    </div>
  )
};
