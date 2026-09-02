# 🎨 STYLEGUIDE.md // Guía de Estilo Oficial de Aetheria

## 1. Tipografía

- **Titulares & Logotipo:** `'Cinzel Decorative'`, `'Plus Jakarta Sans'`, `sans-serif` (con degradados de texto mediante `bg-clip-text text-transparent`).
- **Cuerpo y UI:** `'Plus Jakarta Sans'`, `-apple-system`, `sans-serif`.
- **Telemetría & Código:** `'JetBrains Mono'`, `'Fira Code'`, `monospace`.

## 2. Elevación y Sombras Neomórficas
- `shadow-2xl`: `0 25px 50px -12px rgba(0, 0, 0, 0.7)`
- `glow-purple`: `drop-shadow(0 0 15px rgba(168, 85, 247, 0.6))`
- `glow-cyan`: `drop-shadow(0 0 15px rgba(6, 182, 212, 0.6))`
- `glow-gold`: `drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))`

## 3. Clases de Cristal Neomórfico (`styles.css`)
```css
.theme-card {
  background: rgba(8, 14, 34, 0.82);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(168, 85, 247, 0.28);
}
```
