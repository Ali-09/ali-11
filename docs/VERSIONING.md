# 🏷️ Estrategia de Versionado y Ramas // @aetheria/ui

Este documento define el estándar de **Semantic Versioning (SemVer 2.0)**, la **Estrategia de Ramas (Branching Model)** y el **Flujo de Releases** para `@aetheria/ui`, siguiendo las mejores prácticas de los principales frameworks y librerías de componentes UI (como Radix UI, Tailwind CSS, Shadcn, Chakra UI y Ant Design).

---

## 🏛️ 1. Esquema Semántico (SemVer 2.0)

Las versiones de `@aetheria/ui` siguen la nomenclatura:

$$\text{MAJOR}.\text{MINOR}.\text{PATCH}\quad [-\text{PRERELEASE}]$$

Ejemplo: `1.0.0`, `1.1.0`, `1.1.1`, `2.0.0-canary.1`

```
  v 1 . 2 . 3 - beta.1
    │   │   │   └──── Identificador de Pre-release (canary, beta, rc)
    │   │   └──────── PATCH (Corrección de bugs, micro-estilos, rendimiento)
    │   └──────────── MINOR (Nuevos componentes, variantes, tokens no destructivos)
    └──────────────── MAJOR (Breaking changes, cambios en APIs o arquitectura)
```

### 🔴 MAJOR (`X.0.0`) — Cambios que Rompen Compatibilidad (Breaking Changes)
* Eliminación o renombrado de componentes (ej: `ArcaneModal` -> `PortalModal`).
* Modificación obligatoria de props existentes (ej: cambiar `onCoreClick?: () => void` a `onCoreClick: (e: CoreEvent) => void`).
* Cambios drásticos en la estructura de tokens de diseño o soporte de versiones mayores de React (ej: React 19).
* Cambios estructurales en el preset de Tailwind que alteren clases utilitarias existentes.

### 🟡 MINOR (`1.X.0`) — Nuevas Funcionalidades Retrocompatibles
* Adición de nuevos átomos, moléculas u organismos (ej: nuevo `ArcaneSparkline`, `QuantumSlider`).
* Nuevas variantes o props opcionales en componentes existentes (ej: añadir prop `glowIntensity` a `AetheriaSeal`).
* Nuevos tokens de color en el preset de Tailwind (`src/preset.ts`) sin alterar los existentes.
* Nuevos hooks o nuevos sintetizadores de audio en `useAetheriaAudio`.

### 🟢 PATCH (`1.0.X`) — Correcciones de Bugs y Mejoras Internas
* Corrección de glitches visuales, contrastes o cálculos de curvas SVG en `TitaniaReactor`.
* Optimización de rendimiento en Canvas o animaciones con Framer Motion.
* Correcciones de tipos TypeScript (`.d.ts`) sin cambiar la API pública.
* Actualizaciones de documentación y mejoras en Storybook.

---

## 🌿 2. Estrategia de Ramas (Branching Model)

```
[main] ─────────────────────● (v1.0.0) ───────────────● (v1.1.0) ───────── (Producción Estable)
                             ▲                         ▲
                             │ (Merge PR)              │ (Merge PR)
[develop] ───●───────────────┴────────●────────●───────┴─────────────────── (Desarrollo Activo)
             ▲                        ▲        ▲
             │                        │        │
[feat/slider]┘                        │        │
[feat/sparkline] ─────────────────────┘        │
[fix/reactor-bezier] ──────────────────────────┘
```

| Rama | Propósito | Reglas de Integración |
| :--- | :--- | :--- |
| **`main`** | **Producción Estable.** Código probado y listo para consumo. Cada commit en `main` debe corresponder a un tag `vX.Y.Z`. | Solo se integra vía Pull Request desde `develop` o ramas `hotfix/*`. Protegida contra push directo. |
| **`develop`** | **Integración Continua.** Contiene las últimas características aprobadas que formarán parte de la próxima versión MINOR. | Se alimenta de ramas `feat/*` y `fix/*`. |
| **`canary` / `next`** *(Opcional)* | **Versiones Experimentales.** Para probar componentes en fase alfa antes de entrar a `develop`. | Publica pre-releases automáticos `vX.Y.Z-canary.N`. |
| **`feat/<nombre>`** | **Nuevos Componentes / Tokens.** Ejemplo: `feat/arcane-slider`, `feat/geo-shield`. | Se crea desde `develop` y se mergea a `develop`. |
| **`fix/<nombre>`** | **Corrección de Bugs.** Ejemplo: `fix/tooltip-zindex`, `fix/audio-oscillator`. | Se crea desde `develop` (o `main` si es hotfix crítico). |
| **`release/vX.Y.Z`** | **Congelación de Release.** Para pulir documentación, changelog y tipados antes de mergear a `main`. | Se mergea tanto a `main` como a `develop`. |

---

## 📝 3. Convención de Commits (Conventional Commits)

Los mensajes de commit determinan automáticamente el tipo de versión a incrementar:

* `feat(atoms): add ArcaneKnob component` *(Genera MINOR)*
* `fix(reactor): resolve particle vortex memory leak on unmount` *(Genera PATCH)*
* `feat(tokens)!: remove legacy cyberdark colors in favor of void tokens` *(Genera MAJOR por el `!`)*
* `docs(storybook): add interactive telemetry story examples` *(No incrementa versión)*
* `refactor(audio): optimize web audio oscillator reuse` *(Genera PATCH)*

---

## 🚀 4. Flujo de Trabajo para Publicar una Nueva Versión

### Paso 1: Preparar la versión en local
```bash
# Cambiar a la rama main actualizada
git checkout main
git pull origin main

# Incrementar versión según corresponda (actualiza package.json y crea git tag)
npm run release:patch   # ej: 1.0.0 -> 1.0.1
# o
npm run release:minor   # ej: 1.0.0 -> 1.1.0
# o
npm run release:major   # ej: 1.0.0 -> 2.0.0
```

### Paso 2: Subir el commit y el tag a GitHub
```bash
git push origin main --follow-tags
```

### Paso 3: Automatización de GitHub Actions (`release.yml`)
Al detectar un nuevo tag `v*`, el workflow de GitHub Actions:
1. Valida tipados con `tsc --noEmit`.
2. Compila los bundles de producción con `tsup` (`dist/`).
3. Compila el Storybook estático (`storybook-static/`).
4. Genera automáticamente el **GitHub Release** con las notas del changelog y assets descargables.

---

## 📌 5. Cómo consumir versiones específicas desde otros proyectos

En el `package.json` de tus aplicaciones consumidoras (como **Grimorium Dashboard**):

```json
{
  "dependencies": {
    "@aetheria/ui": "github:Ali-09/aetheria#v1.0.0"
  }
}
```

### Ejemplos de Targets:
* **Fijar a una versión exacta (Recomendado en Producción):**
  ```bash
  npm install "github:Ali-09/aetheria#v1.0.0"
  ```
* **Usar la última versión estable:**
  ```bash
  npm install "github:Ali-09/aetheria#main"
  ```
* **Usar la versión en desarrollo:**
  ```bash
  npm install "github:Ali-09/aetheria#develop"
  ```
* **Actualizar a una versión específica:**
  ```bash
  npm install "github:Ali-09/aetheria#v1.1.0"
  ```
