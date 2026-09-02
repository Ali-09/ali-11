import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedToggle } from './SegmentedToggle';

const meta: Meta<typeof SegmentedToggle> = {
  title: 'Atoms/SegmentedToggle',
  component: SegmentedToggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SegmentedToggle>;

export const FormatSwitch: Story = {
  render: () => {
    const [val, setVal] = useState('raw');
    return (
      <SegmentedToggle
        value={val}
        onChange={setVal}
        tone="purple"
        options={[
          { id: 'raw', label: 'RAW (14-BIT)' },
          { id: 'jpeg', label: 'JPEG (FINE)' },
          { id: 'heif', label: 'HEIF HDR' }
        ]}
      />
    );
  }
};

export const ModeSwitchGold: Story = {
  render: () => {
    const [val, setVal] = useState('ai');
    return (
      <SegmentedToggle
        value={val}
        onChange={setVal}
        tone="gold"
        options={[
          { id: 'manual', label: 'MANUAL' },
          { id: 'ai', label: 'AI REASONING', badge: 'ACTIVE' },
          { id: 'turbo', label: 'CUDA TURBO' }
        ]}
      />
    );
  }
};
