module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(26, 100%, 55%)',
        secondary: 'hsl(25, 100%, 94%)',
        'secondary-dark': 'hsl(223, 64%, 98%)',
        tertiary: 'hsl(220, 13%, 13%)',
        'tertiary-light': 'hsl(219, 9%, 45%)',
        'tertiary-dark': 'hsl(220, 14%, 75%)',
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
