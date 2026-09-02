import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ServiceCard } from './ServiceCard';

const meta: Meta<typeof ServiceCard> = {
  title: '3. Organisms/ServiceCard',
  component: ServiceCard,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const RunningService: Story = {
  args: {
    service: {
      id: 'ollama',
      name: 'Ollama Tensor Engine',
      category: 'llm',
      status: 'running',
      port: 11434,
      models: ['llama3:8b', 'mistral:7b'],
      executable_path: 'C:\\AI_Models\\ollama.exe',
      auto_start: true
    } as any,
    onStart: (id) => console.log('Start', id),
    onStop: (id) => console.log('Stop', id),
    onRestart: (id) => console.log('Restart', id),
    onEdit: (id) => console.log('Edit', id)
  }
};
