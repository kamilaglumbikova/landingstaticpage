/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#343D48',
        content: '#02073E',
        darkGreen: '#0A8080',
        heading: '#0F2137',
        browndLight: 'rgba(255,245,237,0.5)',
        lightGray: '#7589A1',
        graybg: '#F9FAFC',
        link: '#4F96FF',
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
}
