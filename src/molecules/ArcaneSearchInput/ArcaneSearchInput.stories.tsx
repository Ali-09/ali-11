import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArcaneSearchInput } from './ArcaneSearchInput';

const meta: Meta<typeof ArcaneSearchInput> = {
  title: '2. Molecules/ArcaneSearchInput',
  component: ArcaneSearchInput,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArcaneSearchInput>;

export const Interactive: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    return (
      <div className="max-w-md p-4">
        <ArcaneSearchInput
          value={search}
          onChange={setSearch}
          placeholder="Filtrar por puerto, PID o proceso..."
          shortcutHint="/"
        />
      </div>
    );
  }
};
