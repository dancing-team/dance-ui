/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dd-primary': '#3b82f6', // blue-500
        'dd-danger': '#ef4444', // red-500
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
