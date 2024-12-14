import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#808080",
        secondary: "#caadab",
        dark: "#2c2c2c",
        accent: "#c3adc8",
      },
      fontFamily: {
        heading: '"Noto Serif Display", serif',
      },
      fontSize: {
        base: "calc(14px + 0.2vw)", // Custom base font size
      },
    },
  },
  plugins: [],
} satisfies Config;
