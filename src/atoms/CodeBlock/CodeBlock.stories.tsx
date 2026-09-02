import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from './CodeBlock';

const meta: Meta<typeof CodeBlock> = {
  title: '1. Atoms/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const Default: Story = {
  args: {
    title: 'Comando de Invocación FastAPI',
    language: 'bash',
    code: 'python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload'
  }
};
