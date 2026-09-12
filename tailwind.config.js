/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#0B0F17",
          900: "#161C24",
        },
        neon: {
          cyan: "#00F0FF",
          purple: "#A855F7",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        mono: ["'Fira Code'", "'Courier New'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(0deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "50px 50px",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0, 240, 255, 0.3)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.3)",
      },
      animation: {
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(16, 185, 129, 0.6)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
}