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
        red: {
          hack: "#EC3750",
          light: "#FEE2E8",
        },
        amber: {
          accent: "#F59E0B",
          light: "#FEF3C7",
        },
        purple: {
          accent: "#8B5CF6",
          light: "#EDE9FE",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "spin-slow": "spin 8s linear infinite",
        "pizza-fall": "fall 1s ease-in forwards",
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-100px) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(110vh) rotate(360deg)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
