import type { Config } from 'tailwindcss';

export const aetheriaPreset: Partial<Config> = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pearlbg: '#e9eef5',
        pearlcard: 'rgba(248, 250, 252, 0.88)',
        cyberblack: '#060913',
        cyberdark: '#0c1222',
        cybercard: '#10182f',
        cyberborder: '#1e2c4f',
        lumigold: '#fbbf24',
        fireorb: '#f43f5e',
        waterorb: '#0284c7',
        earthorb: '#10b981',
        plasmaorb: '#a855f7',
        // Elemental Core Tokens
        lumi: {
          light: '#fbbf24',
          DEFAULT: '#f59e0b',
          dark: '#b45309'
        },
        plasm: {
          light: '#c084fc',
          DEFAULT: '#a855f7',
          dark: '#7e22ce'
        },
        hydro: {
          light: '#38bdf8',
          DEFAULT: '#06b6d4',
          dark: '#0284c7'
        },
        ignis: {
          light: '#fb7185',
          DEFAULT: '#f43f5e',
          dark: '#e11d48'
        },
        geo: {
          light: '#34d399',
          DEFAULT: '#10b981',
          dark: '#059669'
        }
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace']
      },
      backdropBlur: {
        '24px': '24px',
        '16px': '16px'
      }
    }
  }
};

export default aetheriaPreset;
