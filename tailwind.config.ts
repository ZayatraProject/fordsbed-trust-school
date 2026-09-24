import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { ink: '#102B40', navy: '#0F2537', gold: '#D97706', plum: '#532136', cream: '#FAF7F0' },
      fontFamily: { sans: ['var(--font-plus-jakarta)', 'sans-serif'], display: ['var(--font-playfair)', 'serif'] },
      boxShadow: { soft: '0 18px 50px rgba(15, 37, 55, 0.08)' },
    },
  },
  plugins: [],
};
export default config;
