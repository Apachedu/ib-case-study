/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          DEFAULT: '#1E40AF',   // blue-800 equivalent
          light: '#DBEAFE',     // blue-100 equivalent
          dark: '#1E3A8A',      // blue-900 equivalent
        },
        brandGray: {
          DEFAULT: '#374151',   // gray-700 equivalent
          light: '#6B7280',     // gray-500 equivalent
        },
        brandGreen: {
          DEFAULT: '#16A34A',   // green-600 equivalent
          dark: '#15803D',      // green-700 equivalent
        }
      },
      fontSize: {
        base: '1.125rem', // 18px default base text
        lg: '1.25rem',    // 20px
        xl: '1.5rem',     // 24px
        '2xl': '1.875rem',// 30px
        '3xl': '2.25rem', // 36px
      },
      spacing: {
        18: '4.5rem',  // for bigger padding/margin if needed
        28: '7rem',
        32: '8rem',
      }
    },
  },
  plugins: [],
};

