# Portfolio

```
yarn create react-app my-app --template typescript
```

### Set up Tailwind

```
yarn add -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

```
index.css

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./src/**/\*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}
```

```
tailwind.config.js

@tailwind base;
@tailwind components;
@tailwind utilities;
```
