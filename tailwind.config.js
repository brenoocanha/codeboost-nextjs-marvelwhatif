/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: '0px',
      // => @media (min-width: 768px) { ... }

      tablet: '768px',
      // => @media (min-width: 768px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      full: '1920',
      // => @media (min-width: 1920px) { ... }

      ultrawide: '2560',
      // => @media (min-width: 2560px) { ... }
    },
    extend: {
      colors: {
        "red9": "var(--red-9)",
        "red8": "var(--red-8)",
        "gray9": "var(--gray-9)",
        "gray8": "var(--gray-8)",
        "gray7": "var(--gray-7)",
        "gray6": "var(--gray-6)",
        "gray5": "var(--gray-5)",
        "gray4": "var(--gray-4)",
        "gray2": "var(--gray-2)",
        "gray1": "var(--gray-1)",
      },
      backgroundImage: {

      },
    },
  },
  plugins: [],
}