/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
        },
        primary: {
          50: '#c0bee3',
          100: '#b3b1dd',
          200: '#a7a4d8',
          300: '#9a97d2',
          400: '#8e8acd',
          500: '#817dc7',
          600: '#7471b3',
          700: '#67649f',
          800: '#5a588b',
          900: '#4d4b77',
        },
        secondary: {
          50: '#fcf7eb',
          100: '#efcc86',
          200: '#ecc472',
          300: '#e9bb5d',
          400: '#e7b349',
          500: '#e4aa35',
          600: '#cd9930',
          700: '#b6882a',
          800: '#a07725',
          900: '#896620',
        },
        green: {
          50: '#e8f5ed',
          100: '#b9e2c8',
          200: '#8acfa3',
          300: '#5bbc7e',
          400: '#2ca959',
          500: '#159f46',
          600: '#138f3f',
          700: '#117f38',
          800: '#0f6f31',
          900: '#0d5f2a',
        },
        darker: {
          50: '#ebebec',
          100: '#c2c2c7',
          200: '#9999a1',
          300: '#70707b',
          400: '#474756',
          500: '#323243',
          600: '#282836',
          700: '#1e1e28',
          800: '#14141b',
          900: '#0a0a0d',
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        xxs: ['0.75rem', { lineHeight: '1rem'}],
        xs: ['1.063rem', { lineHeight: '1.25rem'}],
        sm: ['1rem', { lineHeight: '1.5rem'}],
        base: ['1.125rem', { lineHeight: '1.75rem'}],
        lg: ['1.25rem', { lineHeight: '1.75rem'}],
        xl: ['1.5rem', { lineHeight: '2rem'}],

      },
      backgroundImage: {
        'index-bg': "url('./lady-with-laptop')",        
      }     
    },
  },
  plugins: [require("tailwindcss-animate")],
}