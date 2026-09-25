/** Farben & Schriften zentral hier ändern, danach `npm run build`. */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        brand:     '#D9822B', // Ziegel-/Bau-Orange (Primär)
        branddark: '#B96A1C', // Hover
        brandsoft: '#FBF3EA', // helle Fläche
        ink:       '#1F2428', // Anthrazit (Text/Kontrast)
        ink2:      '#4A5157',
        line:      '#ECE6DE',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['"Open Sans"', 'sans-serif'],
      },
    },
  },
};
