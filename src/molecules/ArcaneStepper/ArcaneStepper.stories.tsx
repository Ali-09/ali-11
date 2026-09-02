import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArcaneStepper } from './ArcaneStepper';

const meta: Meta<typeof ArcaneStepper> = {
  title: '2. Molecules/ArcaneStepper',
  component: ArcaneStepper,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArcaneStepper>;

export const Interactive: Story = {
  render: () => {
    const [step, setStep] = useState(2);
    return (
      <div className="max-w-xl p-6 theme-card rounded-2xl border">
        <ArcaneStepper
          currentStep={step}
          onStepClick={setStep}
          steps={[
            { number: 1, title: '1. Esencia & Identidad', subtitle: 'ID y Puerto' },
            { number: 2, title: '2. Sigilos de Invocación', subtitle: 'Ejecutable y Flags' },
            { number: 3, title: '3. Parámetros del Alma', subtitle: 'Directorio y Auto-arranque' }
          ]}
        />
      </div>
    );
  }
};
