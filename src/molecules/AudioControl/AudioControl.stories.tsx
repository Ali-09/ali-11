import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AudioControl } from './AudioControl';

const meta: Meta<typeof AudioControl> = {
  title: '2. Molecules/AudioControl',
  component: AudioControl,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof AudioControl>;

export const Interactive: Story = {
  render: () => {
    const [muted, setMuted] = useState(false);
    return (
      <div className="p-8 flex items-center gap-4">
        <AudioControl muted={muted} onToggle={() => setMuted(!muted)} />
        <span className="font-mono text-xs">Audio {muted ? 'Silenciado' : 'Activo'}</span>
      </div>
    );
  }
};
