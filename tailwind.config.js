/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Allows class-based dark mode toggle
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#083C75',   /* #083C75 (Dark Blue text & base "Y" graphic) */
          orange: '#F18805', /* #F18805 (Vibrant Orange arrow & accent line) */
          gray: '#A6A6A6',   /* #A6A6A6 (Light Gray swoosh accent) */
        },
        // Layout theme mapping variables
        appBg: 'var(--bg-color)',
        appText: 'var(--text-color)',
        appBorder: 'var(--border-color)',
        appCard: 'var(--card-bg)',
      },
    },
  },
  plugins: [],
}
