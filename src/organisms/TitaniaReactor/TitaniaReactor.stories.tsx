import type { Meta, StoryObj } from '@storybook/react';
import { TitaniaReactor } from './TitaniaReactor';

const meta: Meta<typeof TitaniaReactor> = {
  title: '3. Organisms/TitaniaReactor',
  component: TitaniaReactor,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TitaniaReactor>;

export const Default: Story = {
  args: {
    title: 'TITANIA Q-DRIVE',
    subtitle: 'GRADIENT FUSION CHAMBER // MULTI-PROPULSION AI RESONANCE CORE',
    gamingReady: true,
    services: [
      {
        id: 'ollama',
        name: 'DeepSeek-R1 (14B)',
        category: 'llm',
        description: 'Motor de Inferencia de Código y Razonamiento',
        port: 11434,
        status: 'running',
        models: ['deepseek-r1:14b']
      },
      {
        id: 'open-webui',
        name: 'Qwen 2.5 Coder',
        category: 'agent',
        description: 'Orquestador de Agentes Autónomos',
        port: 8080,
        status: 'running',
        models: ['qwen2.5-coder:14b']
      },
      {
        id: 'imagecore',
        name: 'ImageCore Studio',
        category: 'image',
        description: 'Generación y Edición de Imágenes Flux.1',
        port: 8000,
        status: 'stopped'
      }
    ]
  }
};

export const MultiServices5Outputs: Story = {
  args: {
    title: 'TITANIA Q-DRIVE // 5 SERVICIOS DINÁMICOS',
    subtitle: 'ORQUESTACIÓN LAN Y AGENTES EN PARALELO',
    gamingReady: false,
    services: [
      { id: 'ollama', name: 'DeepSeek-R1 (14B)', category: 'llm', port: 11434, status: 'running' },
      { id: 'qwen', name: 'Qwen 2.5 Coder', category: 'agent', port: 8080, status: 'running' },
      { id: 'imagecore', name: 'ImageCore AI', category: 'image', port: 8000, status: 'stopped' },
      { id: 'telegram', name: 'Telegram Agent', category: 'bot', port: 5050, status: 'running' },
      { id: 'whisper', name: 'Whisper Audio', category: 'agent', port: 9000, status: 'stopped' }
    ]
  }
};
