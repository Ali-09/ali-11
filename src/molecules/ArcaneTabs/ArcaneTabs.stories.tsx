import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArcaneTabs } from './ArcaneTabs';

const meta: Meta<typeof ArcaneTabs> = {
  title: '2. Molecules/ArcaneTabs',
  component: ArcaneTabs,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArcaneTabs>;

export const NavigationTabs: Story = {
  render: () => {
    const [tab, setTab] = useState('grimorio');
    return (
      <div className="p-6">
        <ArcaneTabs
          activeTab={tab}
          onChange={setTab}
          tabs={[
            { id: 'grimorio', label: 'GRIMORIO DE MOTORES', iconName: 'Cpu', dot: true },
            { id: 'nexus', label: 'NEXO DE PORTALES', iconName: 'Radio', badge: '56' },
            { id: 'codex', label: 'CÓDICE', iconName: 'BookOpen' }
          ]}
        />
      </div>
    );
  }
};
