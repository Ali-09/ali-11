import React from 'react';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';

export interface AudioControlProps {
  muted: boolean;
  onToggle: () => void;
}

export const AudioControl: React.FC<AudioControlProps> = ({ muted, onToggle }) => {
  return (
    <Button
      variant="icon"
      onClick={onToggle}
      title={muted ? 'Activar Sonidos Alquímicos' : 'Silenciar Sonidos'}
    >
      <Icon name={muted ? 'VolumeX' : 'Volume2'} size={16} glow={muted ? 'none' : 'purple'} />
    </Button>
  );
};
