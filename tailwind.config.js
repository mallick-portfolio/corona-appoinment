module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mygreen: "#03922B",
        hotPink: "#FF7594",
        orangePeach: "#FF7C65",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#646F75",
          secondary: "#2E1619",
          accent: "#8A8686",
          neutral: "#E0E0E0",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
