/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend:{
      fontFamily : {
        sans : ['Barlow', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        lilita: ['Lilita One', 'cursive']
      },
      colors : {
        'gunmetal': "#1b232c",
        'flash-white': "#f4f5f8",
        'slate-grey': '#808997',
        'light-white': '#FAFCFF',
        'medium-blue': '#3026B9',
        'davy-grey': '#4A4E55',
        'persian-rose': '#FC2EB0',
        'brown': '#90722C',
        'light-brown': '#FCF2D9',
        'green': '#2E6638',
        'light-green': '#DCEEDE',
        'blue': '#101749',
        'light-blue': '#EAE8F7',
        'purple': '#7A4C7A',
        'light-purple': '#FCE9FC',
        'pine-green': '#19746A',
        'light-pine-green': '#E7FBF9',
        'pigment-green': '#4DAA5D',
        gray : {
          100 : '#E0E6E9',
          500: '#ABBBC2',
          700: '#393C49',
          900: '#1F1D2B',
          800: '#252836',
        },
        primary : '#EB966A',
        accent : {
          blue: '#65B0F6',
          orange: '#FFB572',
          red: '#FF7CA3',
          green: '#50D1AA',
          purple : '#9290FE'
        }
      },
      screens: {
        'xs': '420px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1400px'
      },
      boxShadow : {
        'tab-item': 'rgba(0, 0, 0, 0.1) 0px 3px 5px',
        'tab-item-hover': 'rgba(0, 0, 0, 0.2) 0px 3px 8px',
        'nav': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        primary : '0px 8px 24px rgba(234, 124, 105, 0.32)',
        'inverse-top' : '4px 4px 0 #252836',
        'inverse-bottom' : '4px -4px 0 #252836'
      }
    },
  },
  plugins: [],
}

