import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { emerald: '#0A4D3C', gold: '#D4AF37', ivory: '#FFFEF9' }, fontFamily: { serif: ['Georgia','serif'], display: ['Georgia','serif'], arabic: ['serif'] } } },
  plugins: []
};
export default config;
