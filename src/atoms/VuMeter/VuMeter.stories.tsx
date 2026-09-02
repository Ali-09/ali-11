import type { Meta, StoryObj } from '@storybook/react';
import { VuMeter } from './VuMeter';

const meta: Meta<typeof VuMeter> = {
  title: 'Atoms/VuMeter',
  component: VuMeter,
  parameters: { layout: 'centered' },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof VuMeter>;

export const SingleChannelGpuLoad: Story = {
  args: {
    label: 'GPU Core Load',
    value: 78,
    segments: 28,
    channels: 'single'
  }
};

export const StereoAudioMaster: Story = {
  args: {
    label: 'Stereo Stream Meter',
    value: 86,
    rightValue: 74,
    segments: 30,
    channels: 'stereo'
  }
};
