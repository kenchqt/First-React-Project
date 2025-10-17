/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#00ffff',
        charcoal: '#0d0d0d',
        graylight: '#e0e0e0',
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(0,255,255,0.15) inset, 0 12px 32px rgba(0,255,255,0.12)',
      },
    },
  },
  plugins: [],
}


