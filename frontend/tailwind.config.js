/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Raleway', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        gold: {
          300: '#f5d782',
          400: '#f0c040',
          500: '#e8a800',
          600: '#c98a00',
        },
        navy: {
          900: '#03071e',
          800: '#05103a',
          700: '#0a1952',
          600: '#0f2370',
        },
        violet: {
          900: '#1a0533',
          800: '#2d0a5e',
          700: '#3d1080',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'ticker': 'ticker 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232,168,0,0.4)' },
          '50%': { boxShadow: '0 0 60px rgba(232,168,0,0.8)' },
        },
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        glow: {
          'from': { textShadow: '0 0 10px rgba(232,168,0,0.5)' },
          'to': { textShadow: '0 0 30px rgba(232,168,0,1), 0 0 60px rgba(232,168,0,0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(90deg, #c98a00 0%, #f0c040 25%, #f5d782 50%, #f0c040 75%, #c98a00 100%)',
      }
    },
  },
  plugins: [],
}
