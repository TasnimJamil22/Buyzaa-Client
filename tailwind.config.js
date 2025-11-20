// import { heroui } from "@heroui/theme";
import { heroui } from "@heroui/react";
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        accent: "oklch(83.7% 0.128 66.29)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
