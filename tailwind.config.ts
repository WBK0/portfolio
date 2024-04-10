import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#0c0c0c",
        red: "#DB0A40",
        redHover: "#C50134"
      },
      borderWidth: {
        3: "3px"
      },
      fontFamily: {
        Chakra: ["ChakraPetch", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
