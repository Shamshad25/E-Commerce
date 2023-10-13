/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    extend: {
      colors: {
        yellow: "#FFE475",
        darkBlue: "#100E3A",
        black: "#000",
        white: "#fff",
        sideblue: "#5DA9E9",
        lightgray: "#B6BAC3",
        brightgray: '#EDEDED',
        btnGreen: "#40D589",
      },
    },
  },
  plugins: [],
});
