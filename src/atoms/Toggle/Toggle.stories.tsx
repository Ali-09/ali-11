import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: '1. Atoms/Toggle',
  component: Toggle,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <div className="max-w-sm p-4 theme-card rounded-2xl border">
        <Toggle
          label="Auto-arranque en Windows"
          description="Inicia automáticamente el demonio al encender el SO"
          checked={checked}
          onChange={setChecked}
          tone="emerald"
        />
      </div>
    );
  }
};
