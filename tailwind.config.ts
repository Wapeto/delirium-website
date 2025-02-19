import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rose : {
          DEFAULT: '#F193A2',
          light: '#EBAAB4',
          dark: '#B7727D'
        },
        bleu : {
          DEFAULT: '#22AED1',
          light: '#33AFCE',
          dark: '#1F99B7'
        },
        background: '#28262C',
        beige : '#FCEFEF'
      },
      fontFamily: {
        titillium: ["var(--font-titillium-web)", "sans-serif"],
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
        spaceGrotesk: ["var(--font-space-grotesk)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
