import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: '1. Atoms/Badge',
  component: Badge
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const MasterCore: Story = {
  args: {
    children: 'MASTER CORE',
    tone: 'purple'
  }
};
