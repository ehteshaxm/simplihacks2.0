/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'heading': ['Space Grotesk', 'sans-serif'],
      'body': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'app-yellow': '#FFF033',
        'app-green': {
          100: '#DDFAED',
          200: '#22B573',
          300: '#226F54',
          400: '#002F32',
        }
      },
    },
  },
  plugins: [],
};
