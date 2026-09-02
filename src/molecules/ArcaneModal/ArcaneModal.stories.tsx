import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArcaneModal } from './ArcaneModal';
import { Button } from '../../atoms/Button';

const meta: Meta<typeof ArcaneModal> = {
  title: '2. Molecules/ArcaneModal',
  component: ArcaneModal,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArcaneModal>;

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-8">
        <Button variant="primary" onClick={() => setOpen(true)}>
          ABRIR MODAL ARCANO
        </Button>
        <ArcaneModal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="CONJURAR NUEVO SERVIDOR"
          subtitle="Define los parámetros de ejecución y puertos del portal"
          iconName="Sparkles"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button variant="emerald-start" onClick={() => setOpen(false)}>
                Guardar y Conectar
              </Button>
            </>
          }
        >
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs">
            Contenido del modal configurable para cualquier tipo de formulario o visualización.
          </div>
        </ArcaneModal>
      </div>
    );
  }
};
