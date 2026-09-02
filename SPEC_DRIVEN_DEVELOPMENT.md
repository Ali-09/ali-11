# 📐 SPEC_DRIVEN_DEVELOPMENT.md // Spec-Driven Development (SDD) Workflow

> **The Definitive Engineering Lifecycle for Designing, Implementing, and Releasing UI Components in `@aetheria/ui`.**

---

## 🎯 1. What is Spec-Driven Development (SDD)?

**Spec-Driven Development (SDD)** is an engineering methodology where **no component code is written before its visual, functional, and interface contract is rigorously specified and verified in Storybook**.

```
┌─────────────────┐      ┌──────────────────┐      ┌──────────────────┐      ┌───────────────────┐
│ PHASE 1: SPEC   │ ───► │ PHASE 2: TYPES   │ ───► │ PHASE 3: STORY   │ ───► │ PHASE 4: CODE     │
│ Component Spec  │      │ Props Interface  │      │ Storybook Mock   │      │ React + Tailwind  │
└─────────────────┘      └──────────────────┘      └──────────────────┘      └───────────────────┘
                                                                                       │
                                                                                       ▼
┌─────────────────┐      ┌──────────────────┐      ┌──────────────────┐      ┌───────────────────┐
│ PHASE 7: RELEASE│ ◄─── │ PHASE 6: VERIFY  │ ◄─── │ PHASE 5: SOUND   │ ◄─── │ PHASE 5: TOKENS   │
│ SemVer Git Tag  │      │ Typecheck+Bundle │      │ useAetheriaAudio │      │ Alchemical Tokens │
└─────────────────┘      └──────────────────┘      └──────────────────┘      └───────────────────┘
```

---

## 🔁 2. The 7-Phase Component Lifecycle

### Phase 1: Component Specification (Visual & Functional Contract)
Before writing code, define the component's role and states:
* **Atomic Classification:** Is it an *Atom*, *Molecule*, or *Organism*?
* **Supported States:** `default`, `hover`, `active`, `disabled`, `loading`, `error`.
* **Variants:** Which elemental tokens apply (`lumi`, `plasm`, `hydro`, `ignis`, `geo`)?
* **Acoustic Cues:** Does user interaction trigger a sound cue (`click`, `activate`, `toggle`)?

---

### Phase 2: Interface & Type Contract
Define the exact TypeScript contract in the component's folder:

```typescript
export type ArcaneBadgeVariant = 'lumi' | 'plasm' | 'hydro' | 'ignis' | 'geo' | 'obsidian';
export type ArcaneBadgeSize = 'sm' | 'md' | 'lg';

export interface ArcaneBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: ArcaneBadgeVariant;
  size?: ArcaneBadgeSize;
  dot?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}
```

---

### Phase 3: Storybook Interactive Mock
Create the `.stories.tsx` file *before* implementing the full JSX logic. This allows designing all edge cases in isolation:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ArcaneBadge } from './ArcaneBadge';

const meta: Meta<typeof ArcaneBadge> = {
  title: 'Atoms/ArcaneBadge',
  component: ArcaneBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['lumi', 'plasm', 'hydro', 'ignis', 'geo', 'obsidian'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArcaneBadge>;

export const Default: Story = { args: { variant: 'lumi', children: 'SYS-ACTIVE' } };
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-3">
      <ArcaneBadge variant="lumi">LUMI</ArcaneBadge>
      <ArcaneBadge variant="plasm">PLASM</ArcaneBadge>
      <ArcaneBadge variant="hydro">HYDRO</ArcaneBadge>
      <ArcaneBadge variant="ignis">IGNIS</ArcaneBadge>
      <ArcaneBadge variant="geo">GEO</ArcaneBadge>
    </div>
  ),
};
```

---

### Phase 4: Atomic Implementation
Implement the component in `<ComponentName>.tsx` using Tailwind CSS, `clsx`, and `tailwind-merge`:

```tsx
import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const ArcaneBadge: React.FC<ArcaneBadgeProps> = ({
  variant = 'lumi',
  size = 'md',
  dot = false,
  glow = true,
  children,
  className,
  ...props
}) => {
  const variantStyles = {
    lumi: 'bg-amber-500/10 text-lumigold border-amber-500/40',
    plasm: 'bg-purple-500/10 text-plasmaorb border-purple-500/40',
    hydro: 'bg-cyan-500/10 text-waterorb border-cyan-500/40',
    ignis: 'bg-rose-500/10 text-fireorb border-rose-500/40',
    geo: 'bg-emerald-500/10 text-earthorb border-emerald-500/40',
    obsidian: 'bg-cyberdark text-slate-300 border-cyberborder'
  }[variant];

  return (
    <span
      className={twMerge(
        'inline-flex items-center gap-1.5 font-mono font-semibold uppercase tracking-wider rounded-full border px-2.5 py-0.5 text-xs',
        variantStyles,
        glow && 'shadow-[0_0_10px_rgba(251,191,36,0.15)]',
        className
      )}
      {...props}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />}
      {children}
    </span>
  );
};
```

---

### Phase 5: Export & Storybook Live Verification
1. Export in `packages/ui/src/index.ts`:
   ```typescript
   export * from './atoms/ArcaneBadge';
   ```
2. Verify in local Storybook:
   ```bash
   npm run storybook
   ```

---

### Phase 6: Automated Verification Pipeline
Run the verification suite:
```bash
# 1. Typecheck
npm run typecheck

# 2. Bundle compilation
npm run build

# 3. Storybook static build
npm run build-storybook
```

---

### Phase 7: Semantic Versioning & Release
Follow `docs/VERSIONING.md` to increment version and push tags:
```bash
npm run release:minor
git push origin main --follow-tags
```
