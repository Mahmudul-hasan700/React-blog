// tailwind.config.js

import flowbitePlugin from 'flowbite/plugin-windicss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin(),
  ],
}