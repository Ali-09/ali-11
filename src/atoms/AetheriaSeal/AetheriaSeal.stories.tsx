import type { Meta, StoryObj } from '@storybook/react';
import { AetheriaSeal } from './AetheriaSeal';

const meta: Meta<typeof AetheriaSeal> = {
  title: 'Atoms/AetheriaSeal',
  component: AetheriaSeal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof AetheriaSeal>;

export const Default: Story = {
  args: {
    size: 'lg',
    glow: true,
    spinning: false
  }
};

export const LargeWithSpinningOrbit: Story = {
  args: {
    size: '2xl',
    glow: true,
    spinning: true
  }
};

export const SmallBadge: Story = {
  args: {
    size: 'sm',
    glow: true
  }
};
