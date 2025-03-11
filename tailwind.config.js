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
        secondary: "#333333",
        tertiary: "#666666",
        muted: "#999999",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      cursor: {
        custom: 'url("/cursor.svg"), auto',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 0.6, transform: 'scale(1.2)' },
        }
      },
      animation: {
        twinkle: 'twinkle var(--twinkle-duration, 3s) ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
