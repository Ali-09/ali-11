# 📝 MEMO.md // Architectural Memory & Decision Records (ADRs)

> **Historical Context, Architectural Decisions, and Vision Roadmap for `@aetheria/ui`.**

---

## 🏛️ 1. Architectural Decision Records (ADRs)

### 📌 ADR-001: Standalone Repository & Package Isolation
* **Status:** Accepted (v1.0.0)
* **Context:** `@aetheria/ui` was originally an internal workspace within the Grimorium orchestrator monorepo.
* **Decision:** Extract `@aetheria/ui` as an autonomous Git repository (`Ali-09/aetheria`) and package with a dedicated `tsup` compilation pipeline and Tailwind preset.
* **Consequences:** Eliminates monorepo coupling, enables versioned releases (SemVer), allows independent Storybook deployments, and permits reusability across web apps, docs, and browser extensions.

### 📌 ADR-002: Zero-External-Asset Policy
* **Status:** Accepted (v1.0.0)
* **Context:** Local-first, air-gapped, and Docker environments often fail when components depend on remote CDNs for logos, font files, or sound assets.
* **Decision:** Encode all essential raster images (emblems, grimoires) as base64 data URIs in TypeScript (`src/assets/`), use vector SVGs for icons (`lucide-react`), and generate audio dynamically via Web Audio API.
* **Consequences:** 100% offline portability and zero network latency for assets.

### 📌 ADR-003: Pure Synthetic Web Audio Architecture
* **Status:** Accepted (v1.0.0)
* **Context:** Traditional UI sound design requires downloading multiple `.mp3` or `.wav` audio files.
* **Decision:** Build `useAetheriaAudio` using pure `AudioContext` mathematical oscillator waveforms (sine, sawtooth, triangle) with exponential gain envelope decay.
* **Consequences:** Instantaneous tactile sound with 0 bytes of audio payload.

### 📌 ADR-004: Tailwind Preset Distribution (`@aetheria/ui/preset`)
* **Status:** Accepted (v1.0.0)
* **Context:** Consumer apps need to inherit the custom elemental colors (`lumigold`, `plasmaorb`, etc.) and font definitions without manually copying Tailwind config files.
* **Decision:** Export a dedicated `src/preset.ts` bundled into `dist/preset.mjs` and `dist/preset.js`.
* **Consequences:** Consumers simply add `presets: [aetheriaPreset]` to their `tailwind.config.js`.

---

## 🗺️ 2. Vision & Roadmap

* **v1.1.0 (Interactive Controls):**
  * `ArcaneSlider` & `QuantumKnob` for fine-grained hardware power tuning.
  * `ArcaneSparkline` micro-charts for real-time memory history.
* **v1.2.0 (Theme Expansion):**
  * `Cyber-Emerald` and `Solar-Crimson` high-contrast HUD themes.
* **v2.0.0 (Web Components & Multi-Framework Support):**
  * Lit / Web Component wrapper for vanilla JS and Vue integration.
