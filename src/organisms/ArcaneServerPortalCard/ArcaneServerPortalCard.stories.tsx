import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArcaneServerPortalCard } from './ArcaneServerPortalCard';

const meta: Meta<typeof ArcaneServerPortalCard> = {
  title: '3. Organisms/ArcaneServerPortalCard',
  component: ArcaneServerPortalCard,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArcaneServerPortalCard>;

export const ManagedRunning: Story = {
  args: {
    title: 'Portal Vite (Aether Hot-Reload)',
    port: 5173,
    pid: 14220,
    processName: 'node.exe',
    urlLocal: 'http://localhost:5173',
    urlLan: 'http://192.168.3.2:5173',
    isManaged: true,
    status: 'running',
    category: 'web',
    description: 'Servidor Vite Frontend corriendo activamente bajo la tutela del Nexo.'
  }
};

export const ManagedStopped: Story = {
  args: {
    title: 'FastAPI / ImageCore AI Engine',
    port: 8000,
    processName: 'python.exe',
    urlLocal: 'http://localhost:8000',
    urlLan: 'http://192.168.3.2:8000',
    isManaged: true,
    status: 'stopped',
    category: 'image',
    description: 'Motor de generación visual detenido. Listo para ser invocado.'
  }
};

export const ExternalWebDetected: Story = {
  args: {
    title: 'Portal Web Next.js (node.exe)',
    port: 3000,
    pid: 9284,
    processName: 'node.exe',
    urlLocal: 'http://localhost:3000',
    urlLan: 'http://192.168.3.2:3000',
    isManaged: false,
    isWebDev: true
  }
};
