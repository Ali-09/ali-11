import aetheriaPreset from './src/preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [aetheriaPreset],
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: []
};
