/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'azul-escuro': '#0A0E1A',
        'azul-medio': '#0D1B3E',
        'azul-royal': '#1A3A8C',
        'azul-eletrico': '#2563EB',
        'azul-brilho': '#3B82F6',
        'cinza-claro': '#E2E8F0',
        'cinza-texto': '#94A3B8',
        'accent-vermelho': '#E11919',
        'vermelho-escuro': '#B91C1C',
        'dourado': '#F59E0B',
        'cinza-metal': '#CBD5E1',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        sub: ['Barlow', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
