module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    },
    colors: {
      lightGrey: '#3b3738',
      darkGrey: '#231f20',
      white: '#ffffff',
    },
    extend: {
      backgroundImage: {
        'hero': "url(/img/jared-dirt-merchant.jpg)"
      },
    },
  },
  plugins: [],
}
