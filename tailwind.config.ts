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
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        'ppnew' : '#9C71F6',
        'pinknew' : '#F56565',
        'pinktext' : '#FF9393',
        'rednew' : '#FF3939',
        'graynew': '#848484',
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
    require('tailwindcss-textshadow')
    // ...
  ],
};
export default config;
