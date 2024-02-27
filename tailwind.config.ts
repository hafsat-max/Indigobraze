import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        grey:'#1E1E1E',
        primary:'#000080',
        secondary:'#0D0D2A'
      },
      fontSize:{
        18:'clamp(16px,1.125vw,18px)',
        72:'clamp(32px,4.5vw,72px)'
      },
      gap:{
        32:'clamp(16px,2vw,32px)',
        '20p':'clamp(20px,4vw,80px)',
        48:'clamp(24px,3vw,48px)'
      }
    },
  },
  plugins: [],
};
export default config;
