import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArcaneRecipeReader } from './ArcaneRecipeReader';

const meta: Meta<typeof ArcaneRecipeReader> = {
  title: '3. Organisms/ArcaneRecipeReader',
  component: ArcaneRecipeReader,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArcaneRecipeReader>;

export const ViteRecipe: Story = {
  args: {
    title: 'Portal Vite + React / Vue',
    port: 5173,
    tone: 'purple',
    alchemicalName: 'Transmutación de Éter Rápido (Vite)',
    techTerm: 'Servidor Dev con Hot Module Replacement (HMR)',
    description: 'Servidor de desarrollo ultrarrápido para interfaces modernas basadas en React o Vue.',
    prerequisites: ['Node.js v18+', 'Ejecutar npm install previo al arranque'],
    launchCommand: 'npm run dev',
    parameters: [
      { label: 'Ejecutable sugerido', value: 'npm.cmd' },
      { label: 'Puerto sugerido', value: '5173' },
      { label: 'Argumentos CLI', value: 'run dev' }
    ],
    tips: 'Configura --host para permitir que otros dispositivos en tu red LAN accedan al portal web mediante ali.local.',
    onAction: () => alert('Conjurando en la forja...')
  }
};
