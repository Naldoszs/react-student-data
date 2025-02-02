/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "black-text-100": "rgba(12, 12, 13, 1)",
        "black-text-90": "rgba(12, 12, 13, 0.9)",
        "black-text-80": "rgba(12, 12, 13, 0.8)",
        "black-text-70": "rgba(12, 12, 13, 0.7)",
        "black-text-60": "rgba(12, 12, 13, 0.6)",
        "black-text-50": "rgba(12, 12, 13, 0.5)",
        "black-text-40": "rgba(12, 12, 13, 0.4)",
        "black-text-30": "rgba(12, 12, 13, 0.3)",
        "black-text-20": "rgba(12, 12, 13, 0.2)",
        "black-text-15": "rgba(12, 12, 13, 0.15)",
        "black-text-10": "rgba(12, 12, 13, 0.1)",
        foreground: "rgba(216, 216, 233, 1)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
