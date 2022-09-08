/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '2000px',
    },
    maxWidth: {
      '8xl': '90rem',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
};
export const plugins = [];
