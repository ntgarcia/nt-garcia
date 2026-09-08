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
        border: "#eeeeee",
        divider: "#dddddd",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        serif: ["Georgia", "Times New Roman", "Times", "serif"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
};
