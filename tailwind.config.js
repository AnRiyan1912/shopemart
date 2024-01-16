const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "/home/user/BATCH14/FRONT END/live-code/anri-ecommerce/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "/home/user/BATCH14/FRONT END/live-code/anri-ecommerce/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
