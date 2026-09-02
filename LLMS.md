# 🧠 LLMS.md // Fast LLM Context & Component Registry

> **Machine-Readable Quick Index for Large Language Models (LLMs).**

```yaml
package: "@aetheria/ui"
version: "1.0.0"
repository: "https://github.com/Ali-09/aetheria"
framework: "React 18 / TypeScript 5.7 / Tailwind CSS 3.4 / Storybook 8"
architecture: "Atomic Design System (Atoms, Molecules, Organisms, Hooks, Tokens)"
style_paradigm: "Magitech & Alchemical Sci-Fi (Obsidian Void, Runic Glass, Elemental Seals)"
```

---

## 🎨 Token Cheatsheet

```typescript
// Backgrounds:
cyberblack: '#060913' // Base canvas void
cyberdark:  '#0c1222' // Surface elevation 1
cybercard:  '#10182f' // Glass card background
cyberborder:'#1e2c4f' // Standard subtle border

// Elemental Cores:
lumigold:   '#fbbf24' // Lumi (Solar Core / GPU Master)
plasmaorb:  '#a855f7' // Plasm (Arcane Mind / DeepSeek-R1)
waterorb:   '#0284c7' // Hydro (Vector Memory / RAG)
fireorb:    '#f43f5e' // Ignis (Thermal Forge / Flux)
earthorb:   '#10b981' // Geo (Aether Shield / Sentinel)

// Fonts:
font-heading: 'Plus Jakarta Sans', sans-serif
font-sans:    'Inter', 'Plus Jakarta Sans', sans-serif
font-mono:    'JetBrains Mono', monospace
```

---

## 📚 Component Registry

```typescript
// Atoms
import {
  AetheriaSeal,      // Props: size ('xs'|'sm'|'md'|'lg'|'xl'|'2xl'), glow, spinning
  ElementalSeal,     // Props: element ('geo'|'hydro'|'plasm'|'ignis'|'lumi'), active, spinning
  ArcaneTooltip,     // Props: content, position ('top'|'bottom'|'left'|'right'), glow
  Button,            // Props: variant ('primary'|'secondary'|'gold'|'danger'|'ghost'), size
  Badge,             // Props: variant ('lumi'|'plasm'|'hydro'|'ignis'|'geo'|'obsidian'), dot
  Card,              // Props: variant ('glass'|'void'|'elevated'), glow
  Input,             // Props: glow, icon, error, helperText
  Select,            // Props: options, value, onChange
  Toggle,            // Props: checked, onChange, variant
  ProgressBar,       // Props: progress (0-100), variant, segmented
  CodeBlock,         // Props: code, language, showCopy
  Icon               // Props: name (LucideIcon), size, glow
} from '@aetheria/ui';

// Molecules
import {
  ArcaneModal,        // Props: isOpen, onClose, title, size
  ArcaneTabs,         // Props: tabs, activeTab, onChange, variant
  ArcaneStatCard,     // Props: title, value, unit, icon, trend, variant
  ArcaneSearchInput,  // Props: placeholder, hotkey, onSearch
  ArcaneStepper,      // Props: steps, currentStep, onStepClick
  AudioControl,       // Props: muted, onToggleMute, size
  GpuMetricTile,      // Props: label, value, max, unit, alertThreshold
  ServiceStatusPill   // Props: status ('running'|'stopped'|'starting'|'error'), name
} from '@aetheria/ui';

// Organisms
import {
  TitaniaReactor,           // Props: services, inputs, gamingReady, onCoreClick
  GpuTelemetryMatrix,       // Props: gpuName, temperature, vramUsedMb, vramTotalMb, utilizationPercent
  ServiceCard,              // Props: service, onStart, onStop, onRestart, onEdit
  LiveTerminal,             // Props: logs, isConnected, onClear, onCommand
  ArcaneServerPortalCard,   // Props: title, port, pid, processName, urlLocal, urlLan
  ArcaneRecipeReader        // Props: title, port, alchemicalName, techTerm, description, launchCommand
} from '@aetheria/ui';

// Hooks
import {
  useAetheriaAudio   // Returns: { playCue, muted, toggleMute }
} from '@aetheria/ui';
```
