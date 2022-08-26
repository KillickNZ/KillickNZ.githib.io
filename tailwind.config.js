module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    },
    colors: {
      lightestGray: '#948B89',
      lightGray: '#3b3738',
      darkGray: '#231f20',
      white: '#ffffff',
    },
    extend: {
      backgroundImage: {
        'hero': "url(/img/seb-nasa.jpg)"
      },
    },
  },
  plugins: [],
}
