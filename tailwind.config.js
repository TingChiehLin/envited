module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-purple': '#C346D5',
        'dark-purple': '#501FC1',
      },
      backgroundImage: {
        'landing-background': "url('/src/imgs/bg_01.png')",
      }
    },
  },
  plugins: [],
}
