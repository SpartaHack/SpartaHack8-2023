import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const baseConfig: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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

const nextUiConfig: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/helpers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/functions/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            absolute_white: "#ffffff",
            absolute_black: "#000000",
            danger: "#FA6178",
            white: "#f3f4f6",
            black: "#0F0F0F",
            primary: "#f3f4f6",
            secondary: "#7DFF97",
            tertiary: "#6FFF8B",
          } as any,
        },
        dark: {
          colors: {
            absolute_white: "#ffffff",
            absolute_black: "#000000",
            danger: "#FA6178",
            white: "#f3f4f6",
            black: "#0F0F0F",
            primary: "#171717",
            secondary: "#7DFF97",
            tertiary: "#6FFF8B",
          } as any,
        },
      },
    }),
  ],
};

const mergedConfig: Config = {
  ...baseConfig,
  ...nextUiConfig,
};

export default mergedConfig;
