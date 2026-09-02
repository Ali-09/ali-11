import type { Meta, StoryObj } from '@storybook/react';
import { ElementalSeal } from './ElementalSeal';

const meta: Meta<typeof ElementalSeal> = {
  title: '1. Atoms/ElementalSeal',
  component: ElementalSeal,
  argTypes: {
    affinity: {
      control: 'select',
      options: ['lumi', 'ignis', 'hydro', 'geo', 'plasma']
    }
  }
};

export default meta;
type Story = StoryObj<typeof ElementalSeal>;

export const LumiSun: Story = {
  args: {
    affinity: 'lumi',
    sublabel: 'Master GPU'
  }
};

export const PlasmaArcane: Story = {
  args: {
    affinity: 'plasma',
    sublabel: 'DeepSeek-R1'
  }
};
