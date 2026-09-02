import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ServiceStatusPill } from './ServiceStatusPill';

const meta: Meta<typeof ServiceStatusPill> = {
  title: '2. Molecules/ServiceStatusPill',
  component: ServiceStatusPill,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ServiceStatusPill>;

export const Running: Story = {
  args: {
    status: 'running'
  }
};

export const Stopped: Story = {
  args: {
    status: 'stopped'
  }
};
