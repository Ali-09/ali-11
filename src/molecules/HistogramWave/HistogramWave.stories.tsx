import type { Meta, StoryObj } from '@storybook/react';
import { HistogramWave } from './HistogramWave';

const meta: Meta<typeof HistogramWave> = {
  title: 'Molecules/HistogramWave',
  component: HistogramWave,
  parameters: { layout: 'centered' },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof HistogramWave>;

export const DefaultRgbHistogram: Story = {
  args: {
    label: 'RGB SPECTRAL EXPOSURE',
    height: 100
  }
};
