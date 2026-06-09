/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        'zapier-orange': '#FF4F00',
        'zapier-black': '#2D2E2E',
        'zapier-beige': '#FDF8F4',
        'zapier-stone': '#F4F4F4',
        primary: '#FF4F00', // Map primary to Zapier Orange
        secondary: '#2D2E2E', // Map secondary to Zapier Black
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Override serif to use Inter as well, just in case
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
