import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        theme: {
          black: {
            1: '#0D0D0D',
            2: '#000000',
          },
          blue: {
            1: '#0554F2',
            2: '#076DF2',
            3: '#3889F2',
            4: '#579FFD',
          },
          white: {
            1: '#F2F2F2',
            2: '#FFFFFF',
          },
          gray: {
            1: '#B7B7B7',
          },
        },
      },
      fontFamily: {
        content: ['Dark Grotesque', 'Poppins', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        base: '5px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
      },
    },
  },
  plugins: [],
};
export default config;
