import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050507",
        foreground: "#f9fafb",
        muted: "#9ca3af"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.5rem"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0,0,0,0.75)"
      }
    }
  },
  plugins: []
};

export default config;
