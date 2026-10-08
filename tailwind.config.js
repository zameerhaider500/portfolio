/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "rgb(var(--c-primary-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--c-primary) / <alpha-value>)",
          strong: "rgb(var(--c-primary-strong) / <alpha-value>)",
        },
        accent: {
          light: "rgb(var(--c-accent-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--c-accent) / <alpha-value>)",
          strong: "rgb(var(--c-accent-strong) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -50px) scale(1.15)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        blob: "blob 14s infinite",
        "blob-slow": "blob 20s infinite reverse",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};