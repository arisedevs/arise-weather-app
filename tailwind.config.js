/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "divBase": "#eeeeee",
        "divBaseNight": "#121f36",

      },
      screens: {
        "sm": "425px",
      }
    },
  },
  daisyui: {
    themes:[
      "cupcake",
      "night"
      // {
      //   mytheme: {
      //     "primary": "#F8494F",
      //     "secondary": "#EB9921",
      //     "accent": "#18A0FB",
      //     "neutral": "#59595c",
      //     "base-100": "#e5e5e5",
      //   }
      // }
    ]
  },
  plugins: [daisyui],
};
