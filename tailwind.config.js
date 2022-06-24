module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '391px',
      // => @media (min-width: 390px) { ... }

      'md': '834px',
      // => @media (min-width: 834px) { ... }

      'lg': '1512px',
     // => @media (min-width: 1512px) { ... }
    },
    extend: {
      colors: {
        primary: "#646F75",
        secondary: "#2E1619",
        accent: "#8A8686",
        neutral: "#E0E0E0",
        mygreen: "#03922B",
        hotPink: "#FF7594",
        orangePeach: "#FF7C65",
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#646F75",
  //         secondary: "#2E1619",
  //         accent: "#8A8686",
  //         neutral: "#E0E0E0",
  //         "base-100": "#ffffff",
  //       },
  //     },
  //     "dark",
  //     "cupcake",
  //   ],
  // },
};
