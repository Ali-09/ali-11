# 🔮 @aetheria/ui // Aetheria Magitech Design System

> **Enterprise-grade, local-first Alchemical & Magitech Atomic Design System for React 18, TypeScript, and Tailwind CSS.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![Storybook](https://img.shields.io/badge/Storybook-8.4-ff4785.svg)](https://storybook.js.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Overview

**`@aetheria/ui`** is the official UI and component library powering **GRIMORIUM** and the **AETHERIA Magitech Ecosystem**. It provides a complete atomic design system combining arcane sci-fi aesthetics (cyber-obsidian dark void, soft pearl light, runic conduits, glassmorphism) with high-performance real-time telemetry organisms, synthetic Web Audio sound design, and 60 FPS HTML5 canvas simulations.

---

## 📦 Installation

```bash
# Using npm
npm install @aetheria/ui framer-motion lucide-react clsx tailwind-merge

# Using pnpm
pnpm add @aetheria/ui framer-motion lucide-react clsx tailwind-merge

# Using yarn
yarn add @aetheria/ui framer-motion lucide-react clsx tailwind-merge
```

### Peer Dependencies
- `react` >= 18.3.0
- `react-dom` >= 18.3.0
- `tailwindcss` >= 3.4.0

---

## 🎨 Tailwind CSS Configuration

In your project's `tailwind.config.js` or `tailwind.config.ts`, import the Aetheria Preset:

```javascript
import aetheriaPreset from '@aetheria/ui/preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [aetheriaPreset],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@aetheria/ui/dist/**/*.{js,mjs}'
  ],
  plugins: []
};
```

This automatically provides the design tokens:
- **Obsidian Theme:** `cyberblack` (`#060913`), `cyberdark` (`#0c1222`), `cybercard` (`#10182f`), `cyberborder` (`#1e2c4f`)
- **Pearl Light Theme:** `pearlbg` (`#e9eef5`), `pearlcard` (`rgba(248, 250, 252, 0.88)`)
- **Elemental Core Seals:** `lumigold` (`#fbbf24`), `fireorb` (`#f43f5e`), `waterorb` (`#0284c7`), `earthorb` (`#10b981`), `plasmaorb` (`#a855f7`)
- **Typography:** `Plus Jakarta Sans`, `Inter`, `JetBrains Mono`

---

## 🚀 Quick Start Example

```tsx
import React from 'react';
import {
  TitaniaReactor,
  GpuTelemetryMatrix,
  Button,
  Badge,
  AetheriaSeal,
  useAetheriaAudio
} from '@aetheria/ui';

export function CoreDashboard() {
  const { playCue } = useAetheriaAudio();

  return (
    <div className="min-h-screen bg-cyberblack text-slate-100 p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <AetheriaSeal size="md" glow spinning />
          <h1 className="text-2xl font-bold font-heading text-lumigold tracking-wider">
            AETHERIA MAGITECH
          </h1>
        </div>
        <Button
          variant="gold"
          onClick={() => playCue('activate')}
        >
          Initialize Vortex
        </Button>
      </header>

      {/* Main Reactor Simulation */}
      <div className="my-8">
        <TitaniaReactor
          gamingReady={false}
          onCoreClick={() => playCue('quantum_hum')}
        />
      </div>

      {/* GPU Matrix */}
      <GpuTelemetryMatrix
        gpuName="NVIDIA RTX 4090"
        temperature={54}
        vramUsedMb={8192}
        vramTotalMb={24576}
        utilizationPercent={42}
      />
    </div>
  );
}
```

---

## 🏛️ Atomic Component Directory

```
packages/ui/src
├── tokens/
│   ├── colors.ts                     # Elemental and void color constants
│   └── preset.ts                     # Tailwind CSS preset
├── hooks/
│   └── useAetheriaAudio.ts           # Zero-asset Web Audio API harmonic sound engine
├── atoms/
│   ├── AetheriaSeal/                 # High-resolution golden/obsidian brand seal
│   ├── ElementalSeal/                # Interactive Lumi, Plasm, Hydro, Ignis, Geo seals
│   ├── ArcaneTooltip/                # Holographic floating telemetry tooltip
│   ├── Button/                       # Neon glass & gold runic action buttons
│   ├── Card/                         # Glassmorphism backdrop-blur cards
│   ├── Badge/                        # Status and elemental pill tags
│   ├── CodeBlock/                    # Syntax highlighted terminal snippet block
│   ├── Input/                        # Runic borders & focus glow text fields
│   ├── Select/                       # Dropdown selector
│   ├── Toggle/                       # Sci-fi sliding switches
│   └── ProgressBar/                  # Segmented mana/quantum energy bars
├── molecules/
│   ├── ArcaneModal/                  # Blueprint border modals with escape handlers
│   ├── ArcaneTabs/                   # Elemental tab switchers with active glow indicators
│   ├── ArcaneStatCard/               # Metric card with micro sparklines
│   ├── ArcaneSearchInput/            # Search bar with hotkey shortcut triggers
│   ├── AudioControl/                 # Sound cue toggle with synthetic audio preview
│   ├── GpuMetricTile/                # GPU live gauge tile
│   └── ServiceStatusPill/            # Health check pill
└── organisms/
    ├── TitaniaReactor/               # 60 FPS HTML5 Canvas vortex with SVG Bézier conduits
    ├── GpuTelemetryMatrix/           # Dual GPU multi-metric telemetry HUD
    ├── ServiceCard/                  # Microservice container & health controller
    ├── LiveTerminal/                 # Real-time WebSocket terminal log stream
    ├── ArcaneServerPortalCard/       # Tunnel & reverse proxy gateway card
    └── ArcaneRecipeReader/           # Alchemical workflow recipe reader
```

---

## 🔊 Synthetic Web Audio Engine (`useAetheriaAudio`)

The library requires **no external `.mp3` or `.wav` files**. All sound effects are generated mathematically in real time using the browser's Web Audio API oscillators:

```tsx
const { playCue, muted, toggleMute } = useAetheriaAudio();

// Available Cues:
playCue('click');        // 2200 Hz crisp click
playCue('activate');     // Dual harmonic chord
playCue('toggle');       // Ascending / descending pitch tone
playCue('success');      // Major third chime
playCue('quantum_hum');  // 110 Hz resonant reactor pulse
```

---

## 🛠️ Development & Storybook

```bash
# Build the library bundle (CJS, ESM, and TypeScript .d.ts)
npm run build

# Run type check
npm run typecheck

# Start Storybook 8 preview server (port 6006)
npm run storybook

# Build static Storybook for deployment
npm run build-storybook
```

---

## 🏷️ Versioning & Release Management

`@aetheria/ui` follows [Semantic Versioning (SemVer 2.0)](https://semver.org/) and a standardized UI framework branching model.

* **Documentation:** Detailed guide in [`docs/VERSIONING.md`](./docs/VERSIONING.md).
* **Changelog:** Release history in [`CHANGELOG.md`](./CHANGELOG.md).

### Branching Model
* `main`: Stable production releases (corresponds to `vX.Y.Z` tags).
* `develop`: Active feature integration branch for next minor versions.
* `feat/*`, `fix/*`: Atomic component feature and bugfix branches.

### Target Versions in Projects
```bash
# Exact release version (Recommended)
npm install "github:Ali-09/aetheria#v1.0.0"

# Latest stable main branch
npm install "github:Ali-09/aetheria#main"

# In-development branch
npm install "github:Ali-09/aetheria#develop"
```

---

## 📄 License

MIT © [Aetheria & Grimorium](https://github.com/Ali-09/aetheria)
