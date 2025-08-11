import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "var(--brand)",
        accent: "var(--accent)",
        text: "var(--text)",
        light: "var(--light)",
      },
      borderRadius: {
        '2xl': '1.25rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
