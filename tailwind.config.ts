import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          raised: "rgb(var(--ink-raised) / <alpha-value>)",
          line: "rgb(var(--ink-line) / <alpha-value>)",
        },
        ember: {
          DEFAULT: "rgb(var(--ember) / <alpha-value>)",
          deep: "rgb(var(--ember-deep) / <alpha-value>)",
        },
        cream: {
          DEFAULT: "rgb(var(--cream) / <alpha-value>)",
          dim: "rgb(var(--cream-dim) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["Big Shoulders Display", "Impact", "sans-serif"],
        body: ["Newsreader", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        colossal: ["clamp(3rem, 10vw, 9rem)", { lineHeight: "0.84" }],
        huge: ["clamp(2rem, 5vw, 4.25rem)", { lineHeight: "0.92" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
