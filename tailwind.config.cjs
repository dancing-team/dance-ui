/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/components/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
