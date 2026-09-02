import type { Meta, StoryObj } from '@storybook/react';
import { NodePipeline } from './NodePipeline';

const meta: Meta<typeof NodePipeline> = {
  title: 'Organisms/NodePipeline',
  component: NodePipeline,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof NodePipeline>;

export const Default: Story = {};
