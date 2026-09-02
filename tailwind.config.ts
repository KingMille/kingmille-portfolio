import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6B6B",
          light: "#FF8E8E",
          dark: "#E55B5B",
        },
        secondary: {
          DEFAULT: "#4ECDC4",
          light: "#6CD9D1",
        },
        accent: {
          DEFAULT: "#FFD93D",
          light: "#FFE066",
        },
        dark: {
          DEFAULT: "#0F0F23",
          800: "#1A1A33",
          700: "#232345",
          600: "#2E2E5E",
        },
        light: {
          DEFAULT: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "glow": "0 0 20px rgba(255, 107, 107, 0.3)",
        "glow-secondary": "0 0 20px rgba(78, 205, 196, 0.3)",
        "card": "0 4px 6px rgba(0,0,0,0.1)",
        "card-hover": "0 10px 30px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
