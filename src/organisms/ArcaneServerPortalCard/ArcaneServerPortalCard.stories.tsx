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

export const ManagedServer: Story = {
  args: {
    title: 'Ollama Tensor Engine',
    port: 11434,
    pid: 14220,
    processName: 'ollama.exe',
    urlLocal: 'http://localhost:11434',
    urlLan: 'http://192.168.3.2:11434',
    isManaged: true
  }
};
