import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
            white: "#f5f5f5",
            black: "#262626",
            primary: "#f5f5f5",
            secondary: "#7DFF97",
            tertiary: "#04E762",
          } as any,
        },
        dark: {
          colors: {
            absolute_white: "#ffffff",
            absolute_black: "#000000",
            danger: "#FA6178",
            white: "#f5f5f5",
            black: "#262626",
            primary: "#171717",
            secondary: "#7DFF97",
            tertiary: "#04E762",
          } as any,
        },
      },
    }),
  ],
};
export default config;
