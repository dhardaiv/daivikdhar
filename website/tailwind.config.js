/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '56': '56rem', // 896px
      },
      spacing: {
        '24': '24px',
        '32': '32px',
        '64': '64px',
      }
    },
  },
  plugins: [],
}