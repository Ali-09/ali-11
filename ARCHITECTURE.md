# 🏛️ ARCHITECTURE.md // @aetheria/ui Architecture Specification

> **Technical Architecture, Atomic Hierarchy, and Bundle Distribution Engine for `@aetheria/ui`.**

---

## 🏗️ 1. High-Level Architecture Overview

`@aetheria/ui` is architected as an **Autonomous, Zero-External-Asset, Pure React & Tailwind Component Library**.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                   @aetheria/ui                                         │
│                                                                                        │
│  [PRESETS & TOKENS]             [ATOMIC COMPONENTS]             [SYNTHETIC ENGINES]    │
│  - Tailwind Preset              - Atoms (Button, Badge, Icon)   - useAetheriaAudio     │
│  - Alchemical Color Tokens      - Molecules (Modal, StatCard)   - 60 FPS Canvas Vortex │
│  - Typography & Blurs           - Organisms (TitaniaReactor)    - SVG Bézier Router    │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              TSUP BUNDLER COMPILATION PIPELINE                         │
│                                                                                        │
│  dist/index.mjs (ESM Bundle)       │  dist/preset.mjs (Tailwind Preset ESM)            │
│  dist/index.js (CJS Bundle)        │  dist/preset.js (Tailwind Preset CJS)             │
│  dist/index.d.ts (TypeScript DTS)  │  dist/preset.d.ts (Preset TypeScript DTS)         │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │
                      ┌─────────────────────┴─────────────────────┐
                      ▼                                           ▼
          [CONSUMER APPLICATIONS]                     [STORYBOOK 8 INTERACTIVE]
          - Grimorium Dashboard                       - Local Playground (Port 6006)
          - Web Portals & Extensions                  - Static Deployment (Chromatic/Pages)
```

---

## 🔬 2. Atomic Design Hierarchy

`@aetheria/ui` strictly segregates UI complexity into 4 clear layers:

### 1. Atoms (`src/atoms/`)
* **Definition:** Pure, indivisible UI building blocks with no internal business logic.
* **Examples:** `AetheriaSeal`, `ElementalSeal`, `Button`, `Badge`, `Card`, `Input`, `Select`, `Toggle`, `ProgressBar`, `CodeBlock`, `Icon`, `ArcaneTooltip`.
* **Rules:** Must accept standard HTML/SVG attributes, `className`, and adhere to token variants.

### 2. Molecules (`src/molecules/`)
* **Definition:** Compositions of 2 or more atoms acting as a functional micro-unit.
* **Examples:** `ArcaneModal`, `ArcaneTabs`, `ArcaneStatCard`, `ArcaneSearchInput`, `ArcaneStepper`, `AudioControl`, `GpuMetricTile`, `ServiceStatusPill`, `ModelTagGroup`.
* **Rules:** Manage their own local UI state (e.g., open/close modal, active tab, hover states).

### 3. Organisms (`src/organisms/`)
* **Definition:** Complex, domain-specific visual engines combining atoms, molecules, canvas simulations, and SVG math.
* **Examples:** `TitaniaReactor`, `GpuTelemetryMatrix`, `ServiceCard`, `LiveTerminal`, `ArcaneServerPortalCard`, `ArcaneRecipeReader`.
* **Rules:** Must be decoupled from network APIs. Telemetry and state are passed via props or callbacks.

### 4. Hooks & Sound Engine (`src/hooks/`)
* **Definition:** Pure React hooks providing behavioral and sensorial capabilities.
* **Examples:** `useAetheriaAudio` (Web Audio API synthetic oscillator manager).

---

## 💎 3. The Zero-External-Asset Policy

To ensure 100% portability in offline, local-first, air-gapped, or Dockerized environments:
* **No external `.png`, `.jpg`, `.mp3`, `.wav` files** are fetched over HTTP.
* **Brand Assets:** Encoded as base64 data URIs directly inside TypeScript (`src/assets/aetheriaAsset.ts`, `src/assets/grimoireAsset.ts`).
* **Icons:** Rendered via vector SVG paths (`lucide-react`).
* **Acoustics:** Generated mathematically in real time via `AudioContext` oscillators.

---

## ⚡ 4. Web Audio Oscillator Architecture

```
[AudioContext] ───► [OscillatorNode (Freq)] ───► [GainNode (Envelope)] ───► [Destination (Speakers)]
```

* **Oscillator Pooling:** Audio nodes are instantiated and garbage-collected per cue trigger to prevent memory leaks in long-running dashboard sessions.
* **Gain Envelope:** All cues use exponential ramp-down curves (`exponentialRampToValueAtTime`) to prevent audible clipping or pops.

---

## 📦 5. Bundle & Tree-Shaking Architecture

* **Bundler:** `tsup` powered by `esbuild`.
* **Package Entry Points (`exports` map):**
  * `.` -> `dist/index.mjs` (ESM) / `dist/index.js` (CJS) / `dist/index.d.ts` (Types).
  * `./preset` -> `dist/preset.mjs` (ESM) / `dist/preset.js` (CJS) / `dist/preset.d.ts` (Types).
* **Tree-Shaking:** Components are compiled with `"sideEffects": false` so consumer bundlers (Vite, Next.js, Webpack) only bundle the components actually imported.
