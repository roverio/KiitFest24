/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dashboard-sidebar': 'linear-gradient(90deg, #110D26 0%, rgba(24, 17, 70, 0.61) 51%, rgba(17, 13, 38, 0.19) 89.44%)',
        'dashboard-user-details': 'linear-gradient(74deg, #0D0A17 1.28%, #181146 42.54%, #0D0A17 88.34%)',
        'dashboard-coundown' : 'linear-gradient(180deg, #0D0A17 -15.4%, #181146 47.05%, #0D0A17 116.35%)',
        'about-background' : 'linear-gradient(74deg, #0D0A17 1.28%, #181146 42.54%, #0D0A17 88.34%)',
        'about-details-section' : 'linear-gradient(67deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 96.06%)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      screens: {
        'xs': '300px',
        '950': "950px",
        'sidebar': '1120px',
      }
    },
  },
  plugins: [],
}
