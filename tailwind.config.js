/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#000000",
        secondary: "#666666",
        muted: "#999999",
      },
      fontFamily: {
        sans: ["var(--font-geist-mono)", "monospace"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
};
