import type { Meta, StoryObj } from '@storybook/react';
import { VoiceOrb } from './VoiceOrb';

const meta: Meta<typeof VoiceOrb> = {
  title: 'Molecules/VoiceOrb',
  component: VoiceOrb,
  parameters: { layout: 'centered' },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof VoiceOrb>;

export const ListeningActive: Story = {
  args: {
    state: 'listening',
    title: 'AETHERIA VOX // LISTENING',
    subtitle: 'Streaming Realtime STT / Whisper Engine',
    size: 'md'
  }
};

export const LargeVoiceHub: Story = {
  args: {
    state: 'speaking',
    title: 'SYNTHESIS CORE ACTIVE',
    subtitle: '120 Tokens/sec Neural Voice Generation',
    size: 'lg'
  }
};
