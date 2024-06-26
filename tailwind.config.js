/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "3rem",
        xl: "6rem",
        "2xl": "8rem",
      },
    },
    screens: {
      xxs: "375px",
      xs: "425px",
      sm: "768px",
      md: "960px",
      lg: "1024px",
      touch: "1200px",
      xl: "1440px",
    },
    fontFamily: {
      inter: "var(--font-inter)",
      montserrat: "var(--font-montserrat)",
    },
    fontWeight: {
      regular: "400",
      "semi-bold": "600",
      bold: "700",
    },
    extend: {
      colors: {
        primary: "#477DC0",
        secondary: "#CEDCEE",
        info: "#2F80ED",
        warning: "#27AE60",
        success: "#E2B93B",
        danger: "#EB5757",
        black: "#282828",
        white: "#FFFFFF",
        "grey-1": "#333333",
        "grey-2": "#4F4F4F",
        "grey-3": "#828282",
        "grey-4": "#BDBDBD",
        "grey-5": "#E0E0E0",
        "tertiary-1": "#80A4D3",
        "tertiary-2": "#A6BFE0",
      },
      fontSize: {
        h1: [
          "3.5rem",
          {
            lineHeight: "3.85rem",
            fontWeight: "700",
          },
        ],
        h2: [
          "3rem",
          {
            lineHeight: "3.3rem",
            fontWeight: "700",
          },
        ],
        h3: [
          "2.5rem",
          {
            lineHeight: "2.75rem",
            fontWeight: "700",
          },
        ],
        h4: [
          "2rem",
          {
            lineHeight: "2.2rem",
            fontWeight: "700",
          },
        ],
        h5: [
          "1.5rem",
          {
            lineHeight: "1.65rem",
            fontWeight: "700",
          },
        ],
        h6: [
          "1.25rem",
          {
            lineHeight: "1.375rem",
            fontWeight: "700",
          },
        ],
        sm: ["0.875rem", "1.225rem"],
        base: ["1rem", "1.4rem"],
        md: ["1.125rem", "1.575rem"],
        lg: ["1.25rem", "1.75rem"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
