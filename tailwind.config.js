// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      top: {
        '48': '16.4rem',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      lineHeight: {
        'extra-loose': '1.75', // Custom line height
        'double': '2',         // Double line height for reference
      },
      colors: {
        primary: '#1E3A8A', // Example primary color
        'primary-dark': '#172B4D', // Custom dark primary color
        secondary: '#F43F5E', // Example secondary color
        accent: '#7C3AED', // Example accent color
        muted: '#6B7280', // Example muted color
        // blue:'blue'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example custom font family
        serif: ['Merriweather', 'serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      spacing: {
        '128': '32rem', // Custom spacing
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
