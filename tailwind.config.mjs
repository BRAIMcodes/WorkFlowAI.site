/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  // Safelist any classes constructed dynamically at runtime
  safelist: [
    'category-card-sales',
    'category-card-marketing',
    'category-card-recruiting',
    'category-card-customer-support',
    'category-card-operations',
    'difficulty-beginner',
    'difficulty-intermediate',
    'difficulty-advanced',
    'badge-indigo',
    'badge-emerald',
    'badge-amber',
    'badge-rose',
    'badge-slate',
  ],
  theme: {
    extend: {
      colors: {
        // Surface system
        surface: {
          0: '#070A13',
          1: '#0B0F19',
          2: '#0F1525',
          3: '#141C2E',
          4: '#1A2238',
        },
        // Brand
        brand: {
          indigo: '#6366F1',
          violet: '#7C3AED',
          purple: '#A855F7',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-indigo': '0 0 40px -10px rgba(99, 102, 241, 0.4)',
        'glow-violet': '0 0 40px -10px rgba(124, 58, 237, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

