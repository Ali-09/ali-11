import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Styleguide/1. Tokens & Colors',
  parameters: { layout: 'padded' }
};
export default meta;

export const ElementalPalette: StoryObj = {
  render: () => {
    const palette = [
      { name: 'Obsidian Dark Void', hex: '#040711', desc: 'Fondo maestro cósmico' },
      { name: 'Deep Cyber Navy', hex: '#080e24', desc: 'Fondos secundarios y HUD panels' },
      { name: 'Lumi (Solar Gold)', hex: '#fbbf24', desc: 'Aceleración Hardware (RTX 5080)' },
      { name: 'Plasm (Arcane Purple)', hex: '#a855f7', desc: 'Razonamiento Lógico (DeepSeek-R1)' },
      { name: 'Hydro (Electric Cyan)', hex: '#06b6d4', desc: 'Flujo Vectorial y Memoria RAG' },
      { name: 'Therm (Crimson Rose)', hex: '#f43f5e', desc: 'Difusión Visual (Flux.1 / SDXL)' },
      { name: 'Geo (Emerald Sentinel)', hex: '#10b981', desc: 'Seguridad y Modo Gaming' }
    ];

    return (
      <div className="p-6 bg-[#040711] text-white rounded-3xl font-mono space-y-6">
        <div>
          <h2 className="text-xl font-heading font-black tracking-wider text-cyan-300">
            AETHERIA MAGITECH COLOR SYSTEM
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Paleta alquímica de alta fidelidad inspirada en interfaces Cyberpunk, Nova Glass y Hologramas Cuánticos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {palette.map((p) => (
            <div key={p.name} className="p-4 rounded-2xl bg-[#090f26] border border-white/10 space-y-2">
              <div className="h-16 rounded-xl shadow-lg border border-white/10" style={{ backgroundColor: p.hex }} />
              <div>
                <h4 className="font-bold text-sm text-slate-200">{p.name}</h4>
                <span className="text-xs text-cyan-400 font-bold block">{p.hex}</span>
                <p className="text-[10px] text-slate-400 mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
