/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-text)",
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-eggshell)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-text)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-eggshell)",
        },
        muted: {
          DEFAULT: "var(--color-text-light)",
          foreground: "var(--color-text)",
        },
        card: {
          DEFAULT: "var(--color-eggshell)",
          foreground: "var(--color-text)",
        },
        popover: {
          DEFAULT: "var(--color-eggshell)",
          foreground: "var(--color-text)",
        },
        // Legacy color mappings for compatibility
        "primary-dark": "#B8801F",
        "text-primary": "var(--color-text)",
        "text-secondary": "var(--color-text-light)",
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-base)",
        sm: "calc(var(--radius-base) - 2px)",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        light: "var(--shadow-light)",
        medium: "var(--shadow-medium)",
        heavy: "var(--shadow-heavy)",
      },
    },
  },
  plugins: [],
};