import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cat: {
          yellow: "#FFC400",
          black: "#1A1A1A",
          gray: "#2D2D2D",
          "gray-light": "#3A3A3A",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-roboto-condensed)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulseSlow 2.4s ease-in-out infinite",
        "spin-slow": "spin 1.4s linear infinite",
        "float-spark": "floatSpark linear infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(255, 196, 0, 0.55)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 0 18px rgba(255, 196, 0, 0)",
            transform: "scale(1.03)",
          },
        },
        floatSpark: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": {
            transform: "translateY(-120px) translateX(20px)",
            opacity: "0",
          },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        "card-hover":
          "0 20px 40px -10px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,196,0,0.3)",
        "yellow-glow": "0 0 30px rgba(255, 196, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
