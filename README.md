# Getting Started with Create React App


yarn create react-app my-app --template typescript

set up tailwind

yarn add -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


@tailwind base;
@tailwind components;
@tailwind utilities;