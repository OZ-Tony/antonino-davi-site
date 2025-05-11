/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Blues
        'blue': {
          '50': '#f0f4fe', 
          '100': '#d9e4fd', 
          '200': '#baccfc', 
          '300': '#8eabf9', 
          '400': '#5e83f4', 
          '500': '#3b62ee', 
          '600': '#2c46e3', 
          '700': '#2537d2', 
          '800': '#2330aa', 
          '900': '#233287',
          '950': '#131c50',
        },
        // Purples
        'purple': {
          '50': '#f6f3ff', 
          '100': '#ede9fe', 
          '200': '#ddd1fe', 
          '300': '#c4adfb', 
          '400': '#a37ff7', 
          '500': '#8b5cf6', 
          '600': '#7c3aed', 
          '700': '#6d28d9', 
          '800': '#5b21b6', 
          '900': '#4c1d95',
          '950': '#2e1165',
        },
        // Teals
        'teal': {
          '50': '#edfef9', 
          '100': '#d2fef2', 
          '200': '#a8fbe5', 
          '300': '#68f3d2', 
          '400': '#2fe5bd', 
          '500': '#14cbaa', 
          '600': '#0aa58a', 
          '700': '#0c8371', 
          '800': '#0e665b', 
          '900': '#0f554c',
          '950': '#043139',
        },
        // Neutrals
        'neutral': {
          '50': '#f9fafb',
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '300': '#d1d5db',
          '400': '#9ca3af',
          '500': '#6b7280',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#1f2937',
          '900': '#111827',
          '950': '#030712',
        },
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['var(--font-manrope)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        'mono': ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}