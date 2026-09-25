/** Farben & Schriften zentral hier ändern, danach `npm run build`. */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        brand:     '#D9822B', // Ziegel-Orange (Primär)
        branddark: '#B96A1C', // Hover
        ink:       '#16191C', // Anthrazit
        ink2:      '#4B5258', // Fließtext
        concrete:  '#F3F1EE', // helle Betonfläche
        line:      '#E2DDD6', // Linien
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
