import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors based on Aster Intel
        primary: {
          DEFAULT: "#00162F", // Deep navy for text
          light: "#003366",
          dark: "#000A14",
        },
        accent: {
          DEFAULT: "#00D9FF", // Electric blue/cyan for accents
          light: "#33E1FF",
          dark: "#00B8D9",
          soft: "#7DB3D3", // Softer blue for buttons (more blue, less intense, not white)
        },
        teal: {
          DEFAULT: "#00C9A7", // Teal/green for highlights
          light: "#33D4B8",
          dark: "#00A68F",
        },
        background: {
          DEFAULT: "#1a2332", // Dark blue-gray background
          light: "#1e2a3a", // Slightly lighter dark background
          muted: "#243447", // Muted dark background
        },
        text: {
          DEFAULT: "#00162F", // Dark navy
          secondary: "#4A5568", // Grey for secondary text
          muted: "#718096",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
