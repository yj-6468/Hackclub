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
        purple: {
          DEFAULT: "#7C3AED",
          light: "#9F67FF",
          dark: "#5B21B6",
        },
        green: {
          neon: "#10B981",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          card: "#111111",
          border: "#1A1A1A",
        },
      },
      fontFamily: {
        grotesk: ["var(--font-space-grotesk)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        glitch: "glitch 3s infinite",
        "glitch-2": "glitch-2 3s infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
      keyframes: {
        glitch: {
          "0%, 90%, 100%": { transform: "translate(0)" },
          "91%": { transform: "translate(-2px, 1px)" },
          "93%": { transform: "translate(2px, -1px)" },
          "95%": { transform: "translate(-1px, 2px)" },
          "97%": { transform: "translate(1px, -1px)" },
        },
        "glitch-2": {
          "0%, 90%, 100%": { clipPath: "inset(0 0 100% 0)", opacity: "0" },
          "91%": { clipPath: "inset(20% 0 60% 0)", opacity: "1" },
          "93%": { clipPath: "inset(50% 0 20% 0)", opacity: "1" },
          "95%": { clipPath: "inset(10% 0 80% 0)", opacity: "1" },
          "97%": { clipPath: "inset(70% 0 10% 0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(124, 58, 237, 0.8)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "purple-glow":
          "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
