/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// con este codigo vamos a decirle en que archivos o donde vamos a escribir clases de tailwindcss
// en el segunoo item del content. le estoy diciendo que busque todos las carpetas y/o archivos con las extensiones mencionadas; dentro del src, que usaran clases de tailwind

