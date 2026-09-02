# 📜 Changelog // @aetheria/ui

Todos los cambios notables en este proyecto serán documentados en este archivo.
El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y sigue [Semantic Versioning](https://semver.org/lang/es/).

---

## [1.0.0] - 2026-09-02

### ✨ Características Iniciales (Initial Release)
* **Tokens de Diseño:**
  * Paleta Obsidian Void (`cyberblack`, `cyberdark`, `cybercard`, `cyberborder`).
  * Paleta Soft Pearl (`pearlbg`, `pearlcard`).
  * Tokens Elementales Alquímicos (`lumigold`, `fireorb`, `waterorb`, `earthorb`, `plasmaorb`).
  * Preset de Tailwind CSS oficial exportado en `@aetheria/ui/preset`.
* **Átomos:**
  * `AetheriaSeal`: Emblema oficial en alta resolución con efectos de giro y resplandor.
  * `ElementalSeal`: Sellos interactivos para los 5 elementos (Lumi, Plasm, Hydro, Ignis, Geo).
  * `ArcaneTooltip`: Tooltips holográficos flotantes.
  * `Button`, `Card`, `Badge`, `Input`, `Select`, `Toggle`, `ProgressBar`, `CodeBlock`, `Icon`.
* **Moléculas:**
  * `ArcaneModal`, `ArcaneTabs`, `ArcaneStatCard`, `ArcaneSearchInput`, `ArcaneStepper`.
  * `AudioControl`, `GpuMetricTile`, `ModelTagGroup`, `ServiceStatusPill`.
* **Organismos:**
  * `TitaniaReactor`: Motor de fusión central con simulación de partículas Canvas 60 FPS y conductos Bézier SVG exactos.
  * `GpuTelemetryMatrix`: Matriz de telemetría gráfica en tiempo real con monitoreo VRAM/temperatura.
  * `ServiceCard`: Tarjetas de microservicios con controles de arranque/parada y estado de salud.
  * `LiveTerminal`: Consola en vivo para streaming de logs WebSocket.
  * `ArcaneServerPortalCard`: Tarjeta de túneles y proxy inverso.
  * `ArcaneRecipeReader`: Lector de recetas y flujos alquímicos.
* **Hooks & Audio:**
  * `useAetheriaAudio`: Motor Web Audio API puramente sintético (cero dependencias de archivos mp3/wav).
* **Storybook & Tooling:**
  * Configuración completa de Storybook 8 con catálogo interactivo de historias.
  * Pipeline de compilación `tsup` con generación dual ESM/CJS y tipados TypeScript `.d.ts`.
  * Workflow de CI/CD para GitHub Actions.
