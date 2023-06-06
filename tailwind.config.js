/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'hehe': 'morph 6s ease-in-out infinite alternate',
        keyframes: { blob: { "0%": { transform: "translate(0px, 0px) scale(1)", }, "33%": { transform: "translate(30px, -50px) scale(1.3)", }, "66%": { transform: "translate(-20px, 20px) scale(0.7)", }, "100%": { transform: "tranlate(0px, 0px) scale(1)", }, }, },
      },
      plugins: [],
      backgroundImage: {
        'hero-pattern': "url('/profilpic.jpg')",
      },
    },
    variants: {
      extend: {
        width: ['group-hover'],
        height: ['group-hover'],
        block: ['group-hover'],
      },
    },
  }
}
