/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'wallet-cardBlue': "url('/src/assets/img/wallet-card1.png')",
        'wallet-cardGgreen': "url('/src/assets/img/wallet-card2.png')",
        'wave2': "url('/src/assets/img/wave2.png')",
      },
      spacing: {
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '48px': '48px',
        '50px': '50px',
        "50%": "50%"
      },
      colors: {
        primaryDark: "#01B489",
        primaryLight: "#1BE59D",
        textSecondary: "#444F55",
        accent: "rgba(68, 79, 85, 1)",
        accentLight: "#444F55",
        bgAccent: "#F8F8F8",
        muted: "#7D7C7C",
        inputBg: "#EBEBEB"


      },
      fontFamily: {
        // primary: ['Roboto', 'sans-serif'],
      },
    },
    screens: {
      xs: '320px',
      sm: "480px",
      md: "768px",
      // ipad: '830px',
      lg: "1200px",
      // minixl: '1200px',
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
  },
  plugins: [],
};
