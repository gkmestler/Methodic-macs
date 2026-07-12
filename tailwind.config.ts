import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        paper: "#FFFFFF",
        offwhite: "#F7F7F5",
        richblack: "#1A1A1A",
        deepblue: "#4A7FA8",
        skyblue: "#89B4D4",
        iceblue: "#C5DCF0",
        slate: "#6B7280",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        h1: ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        h2: ["1.75rem", { lineHeight: "1.2" }],
      },
      maxWidth: {
        prose: "42rem",
        content: "68rem",
      },
      transitionTimingFunction: {
        "ease-out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
