# 🤖 AGENTS.md // Technical Guide for AI Coding Agents & LLMs

> **Purpose:** This document provides full contextual understanding, architectural rules, code conventions, and extension workflows for any LLM (DeepSeek-R1, Qwen 2.5 Coder, Claude 3.7, GPT-4o, Gemini 2.5, Antigravity) developing or extending **`@aetheria/ui` (AETHERIA Magitech Design System)**.

---

## ⚡ 1. Primary Directives for AI Agents

1. **Adhere to the Magitech Alchemical Paradigm:**
   * Dark backgrounds must use `#040711` with obsidian/void gradients.
   * Elemental accents must use official tokens (`lumigold`, `plasmaorb`, `waterorb`, `fireorb`, `earthorb`).
   * Never introduce generic corporate flat UI, solid bright white cards, or unstyled default HTML elements.
2. **Follow the Zero-External-Asset Policy:**
   * Never hardcode external URLs for images or audio files (`http://...`).
   * For icons, use `lucide-react`. For sounds, use `useAetheriaAudio()`. For logos, use base64 assets in `src/assets/`.
3. **Spec-Driven Component Construction:**
   * Every component must have a clean TypeScript interface, Storybook story, and export in `src/index.ts`.

---

## 🏗️ 2. Anatomy of a Component

When generating a new component `<ComponentName>`, agents MUST place it in:
`src/<atoms|molecules|organisms>/<ComponentName>/`

```
src/atoms/ArcaneKnob/
├── ArcaneKnob.tsx          # Main component implementation
├── ArcaneKnob.stories.tsx  # Storybook 8 interactive stories
└── index.ts                # Re-export entry point
```

### Component Implementation Template (`ArcaneKnob.tsx`)

```tsx
import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useAetheriaAudio } from '../../hooks/useAetheriaAudio';

export interface ArcaneKnobProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  min?: number;
  max?: number;
  variant?: 'lumi' | 'plasm' | 'hydro' | 'ignis' | 'geo';
  onValueChange?: (val: number) => void;
  className?: string;
}

export const ArcaneKnob: React.FC<ArcaneKnobProps> = ({
  value,
  min = 0,
  max = 100,
  variant = 'lumi',
  onValueChange,
  className,
  ...props
}) => {
  const { playCue } = useAetheriaAudio();

  const variantGlow = {
    lumi: 'text-lumigold border-amber-500/40 shadow-[0_0_15px_rgba(251,191,36,0.3)]',
    plasm: 'text-plasmaorb border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]',
    hydro: 'text-waterorb border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]',
    ignis: 'text-fireorb border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.3)]',
    geo: 'text-earthorb border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
  }[variant];

  return (
    <div
      className={twMerge(
        'relative rounded-full bg-cybercard/80 backdrop-blur-md border p-4 transition-all duration-300',
        variantGlow,
        className
      )}
      onClick={() => playCue('click')}
      {...props}
    >
      {/* Component Content */}
      <span className="font-mono text-sm font-bold">{value}%</span>
    </div>
  );
};
```

### Component Story Template (`ArcaneKnob.stories.tsx`)

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ArcaneKnob } from './ArcaneKnob';

const meta: Meta<typeof ArcaneKnob> = {
  title: 'Atoms/ArcaneKnob',
  component: ArcaneKnob,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['lumi', 'plasm', 'hydro', 'ignis', 'geo'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArcaneKnob>;

export const Default: Story = {
  args: {
    value: 75,
    variant: 'lumi',
  },
};

export const PlasmaVariant: Story = {
  args: {
    value: 92,
    variant: 'plasm',
  },
};
```

---

## 🛠️ 3. Verification & Build Commands

Before concluding any code generation task, AI agents MUST execute:

```bash
# 1. Typecheck TypeScript
npm run typecheck

# 2. Build Library Bundle
npm run build

# 3. Test Storybook Build
npm run build-storybook
```

---

## 🚫 4. Strict Anti-Patterns

* ❌ **Do NOT import from `../../apps/dashboard` or backend:** `@aetheria/ui` is an independent package and must never depend on consumer applications.
* ❌ **Do NOT use inline hardcoded CSS colors (`style={{ color: '#fff' }}`):** Use Tailwind token classes (`text-lumigold`, `bg-cybercard`, etc.).
* ❌ **Do NOT skip the Storybook story:** Every component MUST have a corresponding `.stories.tsx`.
* ❌ **Do NOT forget to export in `src/index.ts`:** New components must be exported in `packages/ui/src/index.ts`.
