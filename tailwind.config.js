/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        card: "var(--color-card)",
        accent: "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)",
        terminal: "var(--color-terminal)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        line: "var(--color-line)",
        onaccent: "var(--color-on-accent)",
        track: "var(--color-track)",
        "surface-hover": "var(--color-surface-hover)",
      },
      fontFamily: {
        sans: ["JetBrains Mono", "ui-monospace", "monospace"],
        display: ["\"Plus Jakarta Sans\"", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        "glow-sm": "var(--shadow-glow-sm)",
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmer 2s linear infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        "mesh-shift": "meshShift 18s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        meshShift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2%, -2%) scale(1.05)" },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("light-mode", ".light-mode &");
    },
  ],
};
