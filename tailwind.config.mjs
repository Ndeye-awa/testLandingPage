/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], // Utiliser DM Sans comme police par défaut
      },
      colors: {
        customPurple: '#8D448B',
        background: "var(--background)", // Variable pour le fond
        foreground: "var(--foreground)", // Variable pour la couleur du texte
        primary: "#0F2137", // Ta couleur principale
        secondary: "#8D448B", // Ta couleur secondaire
        secondaryDark: '#7A3A9B',
      },
    },
  },
  plugins: [],
};
