import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
    gradients: {
      'red-blue': ['#FFD2D2', '#E2B4E7 63%', '#C08EFF 100%']
      // ...
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
    require('flowbite/plugin'),

    // ...
  ],
};
export default config;
