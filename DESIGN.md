# ⚜️ DESIGN.md // AETHERIA Magitech & Alchemical Design System Specification

> **AETHERIA** is a high-fidelity, enterprise-grade UI design system that synthesizes **Quantum Sci-Fi High Technology (HUD telemetry, vector conduits, energy matrices, holographic glassmorphism)** with **Alchemical & Arcane Mysticism (runic sigils, elemental orbs, obsidian crystal void, and harmonic acoustics)**.

---

## 🌌 1. Design Philosophy: The Quantum-Alchemical Union

Every component in `@aetheria/ui` adheres to the three foundational pillars of the **Magitech Paradigm**:

```
                              ┌───────────────────────────────────────────────┐
                              │           AETHERIA MAGITECH SYSTEM            │
                              └───────┬───────────────┬───────────────┬───────┘
                                      │               │               │
                     ┌────────────────┴──┐    ┌───────┴──────────┐   ┌┴─────────────────┐
                     │  HUD SCI-FI TECH  │    │  ARCANE RUNIC    │   │ ELEMENTAL ALCHEMY│
                     └───────────────────┘    └──────────────────┘   └──────────────────┘
                     • 1px gradient borders   • Concentric seals     • 5 Prime Energies
                     • Mathematical Béziers   • Mana particle vortex • VRAM transmutation
                     • Technical monospace    • Holographic tooltips • Thermal dissipation
                     • Real-time telemetry    • Synthetic Web Audio  • Chroma tensor flow
```

---

## 🎨 2. Design Tokens & Color Physics

### 🌑 Ambient Void Palettes (Backgrounds)
* **Obsidian Void (Default Dark):** `#040711` background with cosmic radial gradients (`#080e22` and `#0a122c`).
* **Soft Pearl (High-Contrast Light):** `#f8fafc` background with crisp obsidian borders and muted ambient glow.
* **Surface Elevations:**
  * `Surface 0 (Background)`: `#040711`
  * `Surface 1 (Panels / Matrix)`: `#080e22` with `backdrop-filter: blur(24px)`
  * `Surface 2 (Cards / Tiles)`: `rgba(16, 24, 47, 0.78)`
  * `Surface 3 (Overlays / Modals)`: `rgba(12, 18, 34, 0.94)`

### 🔮 The 5 Elemental Prime Seals

Each elemental token represents both an arcane mana source and a concrete hardware/AI subsystem:

| Elemental Seal | Token Name | Primary Hex | Accent Glow | Gradient Tail | Hardware & AI Subsystem |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Lumi (Solar Core)** | `lumigold` | `#fbbf24` | `rgba(251, 191, 36, 0.65)` | `from-amber-500/20 via-yellow-500/10 to-transparent` | Master GPU, CUDA & Tensor Cores |
| **Plasm (Arcane Mind)**| `plasmaorb` | `#a855f7` | `rgba(168, 85, 247, 0.65)` | `from-purple-500/20 via-indigo-500/10 to-transparent` | Deep Reasoning LLMs (DeepSeek-R1, Qwen) |
| **Hydro (Flow Vectors)**| `waterorb` | `#06b6d4` | `rgba(6, 182, 212, 0.65)` | `from-cyan-500/20 via-blue-500/10 to-transparent` | Vector Embeddings & RAG (Chroma/Qdrant) |
| **Ignis (Thermal Forge)**| `fireorb` | `#f43f5e` | `rgba(244, 63, 94, 0.65)` | `from-rose-500/20 via-red-500/10 to-transparent` | Image Diffusion & Flux Engines |
| **Geo (Aether Shield)**| `earthorb` | `#10b981` | `rgba(16, 185, 129, 0.65)` | `from-emerald-500/20 via-teal-500/10 to-transparent` | Sentinel Security, Memory Guards & Proxies |

---

## 📐 3. Mathematical Glassmorphism & Borders

To prevent generic flat UI, all cards and panels MUST follow strict optical rules:

1. **Glassmorphism Formula:**
   ```css
   .theme-card {
     background: rgba(16, 24, 47, 0.78);
     backdrop-filter: blur(24px);
     -webkit-backdrop-filter: blur(24px);
     border: 1px solid rgba(168, 85, 247, 0.22);
     box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.55), inset 0 1px 0 0 rgba(255, 255, 255, 0.08);
   }
   ```
2. **HUD Blueprint Brackets:**
   * Corners use decorative brackets: `┌ [SYS-TON-01]` and `[SEC-REV-A] ┐` in `text-[10px] font-mono text-slate-500`.
3. **SVG Conduit Bézier Geometry:**
   * Dynamic energy lines connecting nodes to central hubs use exact cubic Bézier curves:
   $$C(t) = (1-t)^3 P_0 + 3(t)(1-t)^2 P_1 + 3(t)^2(1-t) P_2 + t^3 P_3$$
   * Conduits emit animated dashes using `stroke-dasharray="6 6"` and `animation: dash 1.5s linear infinite`.

---

## 🔊 4. Synthetic Web Audio Acoustics (`useAetheriaAudio`)

The interface provides tactile auditory feedback without downloading audio files:
* **Click (`playCue('click')`):** 2200 Hz crisp high-frequency micro-pulse (15 ms).
* **Activate (`playCue('activate')`):** Dual harmonic chord ($A_4 = 440\text{ Hz} + C\#_5 = 554.37\text{ Hz}$).
* **Toggle (`playCue('toggle')`):** Linear frequency ramp ($300\text{ Hz} \rightarrow 600\text{ Hz}$).
* **Success (`playCue('success')`):** Triad chime ($C_5 \rightarrow E_5 \rightarrow G_5$).
* **Quantum Hum (`playCue('quantum_hum')`):** 110 Hz resonant sawtooth low-frequency wave with lowpass filtering.

---

## 🔤 5. Typography Hierarchy

* **Heading & Display:** `Plus Jakarta Sans`, weight 700/800, letter-spacing `0.05em`, uppercase accents.
* **Interface & Body:** `Inter`, `Plus Jakarta Sans`, weight 400/500/600, anti-aliased.
* **Telemetry & Code:** `JetBrains Mono`, `Fira Code`, weight 400/500, tabular numbers (`font-variant-numeric: tabular-nums`).

---

## ♿ 6. Accessibility & Motion Guidelines

1. **Contrast Ratio:** Text on obsidian surfaces must satisfy WCAG AA ($> 4.5:1$).
2. **Reduced Motion:** When `prefers-reduced-motion: reduce` is active:
   * Particle vortex on Canvas is throttled to static orbit rings.
   * Framer Motion transitions snap to opacity fades without continuous positional oscillation.
3. **Keyboard Focus:** Runic focus rings use `ring-2 ring-lumigold/60 ring-offset-2 ring-offset-cyberblack`.
