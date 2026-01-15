import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wii: {
          blue: '#3b7dd9',
          lightBlue: '#88c0e8',
          white: '#f5f5f5',
          gray: '#e8e8e8',
          dark: '#333333',
        },
      },
      boxShadow: {
        'wii-subtle': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'wii-medium': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'wii-glow': '0 0 20px rgba(59, 125, 217, 0.4)',
      },
      animation: {
        'pulse-border': 'pulseBorder 2s ease-in-out infinite',
      },
      keyframes: {
        pulseBorder: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(59, 125, 217, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(59, 125, 217, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
