import PrimeUI from 'tailwindcss-primeui';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],

  // ─── Dark Mode Strategy ────────────────────────────────────────────────────
  // 'class'  → toggled manually via Angular service (adds/removes .dark on <html>)
  // 'media'  → follows OS preference automatically
  // We use 'class' so the user can toggle AND we can still respect OS preference
  // via an Angular theme service (best of both worlds)
  darkMode: 'class',

  theme: {
    // ─── Override defaults entirely (not extend) ───────────────────────────
    fontFamily: {
      display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      sans: ['"DM Sans"', 'Helvetica Neue', 'Arial', 'sans-serif'],
      mono: ['"Bebas Neue"', 'monospace'],
    },

    extend: {
      // ─── Color Palette ────────────────────────────────────────────────────
      colors: {
        // ── Light Mode: Warm Neutral Scale ───────────────────────────────
        // Usage: bg-maison-cream  text-maison-ink  border-maison-stone
        maison: {
          white: '#FAFAF8', // page background — warm off-white, never #fff
          cream: '#F2EFE9', // section backgrounds, card fills
          stone: '#E5E0D8', // borders, dividers, input outlines
          mist: '#C8C2B8', // placeholders, disabled text
          ash: '#8C8680', // secondary / supporting text
          charcoal: '#3A3834', // primary body text
          ink: '#1A1916', // headings, emphasis
          black: '#0D0C0B', // absolute black — high contrast moments
        },

        // ── Dark Mode: Warm Dark Scale ───────────────────────────────────
        // Inverted mirror of maison.* — still warm, never cold/blue.
        // Usage: dark:bg-dark-base  dark:text-dark-primary  dark:border-dark-border
        dark: {
          base: '#0D0C0B', // page background — deepest warm black
          surface: '#1A1916', // cards, nav, sidebars
          elevated: '#252320', // modals, dropdowns, popovers
          border: '#3A3834', // dividers, input outlines
          muted: '#8C8680', // disabled, hint, placeholder
          secondary: '#C8C2B8', // secondary text
          primary: '#F2EFE9', // body text
          heading: '#FAFAF8', // headings, hero display text
        },

        // ── Accent — Champagne Gold (works on BOTH themes) ───────────────
        // One accent color only. Luxury brands never shout.
        accent: {
          DEFAULT: '#B89A6A', // warm champagne gold
          light: '#D4B896', // hover / lighter tint
          dark: '#8C7248', // pressed / darker tint
        },
      },

      // ─── Typography Scale ─────────────────────────────────────────────────
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.15em' }],
        xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.12em' }],
        sm: ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '0.04em' }],
        base: ['1rem', { lineHeight: '1.75rem', letterSpacing: '0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        '7xl': ['4.5rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        '8xl': ['6rem', { lineHeight: '0.9', letterSpacing: '-0.05em' }],
        '9xl': ['8rem', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
      },

      // ─── Spacing ──────────────────────────────────────────────────────────
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        42: '10.5rem',
        50: '12.5rem',
        54: '13.5rem',
        58: '14.5rem',
        62: '15.5rem',
        66: '16.5rem',
        70: '17.5rem',
        128: '32rem',
        144: '36rem',
      },

      // ─── Border Radius ────────────────────────────────────────────────────
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        pill: '9999px',
      },

      // ─── Box Shadows ──────────────────────────────────────────────────────
      boxShadow: {
        // Light mode — warm ink tones
        'luxe-sm': '0 1px 3px 0 rgba(26,25,22,0.06), 0 1px 2px -1px rgba(26,25,22,0.06)',
        luxe: '0 4px 16px -2px rgba(26,25,22,0.10), 0 2px 6px -2px rgba(26,25,22,0.06)',
        'luxe-md': '0 8px 32px -4px rgba(26,25,22,0.12), 0 4px 12px -4px rgba(26,25,22,0.08)',
        'luxe-lg': '0 20px 60px -8px rgba(26,25,22,0.16), 0 8px 24px -8px rgba(26,25,22,0.10)',
        'luxe-xl': '0 32px 80px -12px rgba(26,25,22,0.20)',
        // Dark mode — deeper, more atmospheric
        'dark-sm': '0 1px 3px 0 rgba(0,0,0,0.30)',
        dark: '0 4px 16px -2px rgba(0,0,0,0.40)',
        'dark-md': '0 8px 32px -4px rgba(0,0,0,0.50)',
        'dark-lg': '0 20px 60px -8px rgba(0,0,0,0.60)',
        // Gold glow — works on both themes
        accent: '0 0 0 3px rgba(184,154,106,0.30)',
        none: 'none',
      },

      // ─── Transitions ──────────────────────────────────────────────────────
      transitionDuration: {
        0: '0ms',
        150: '150ms',
        250: '250ms',
        350: '350ms',
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },

      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'luxe-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'luxe-out': 'cubic-bezier(0, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      // ─── Letter Spacing ───────────────────────────────────────────────────
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.03em',
        tight: '-0.01em',
        normal: '0em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em',
        ultra: '0.3em',
      },

      // ─── Max Widths ───────────────────────────────────────────────────────
      maxWidth: {
        xxs: '16rem',
        xs: '20rem',
        'prose-sm': '45ch',
        prose: '65ch',
        'prose-lg': '75ch',
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
      },

      // ─── Aspect Ratios ────────────────────────────────────────────────────
      aspectRatio: {
        product: '3 / 4',
        hero: '16 / 9',
        editorial: '4 / 5',
        square: '1 / 1',
        wide: '21 / 9',
      },

      // ─── Z-Index ──────────────────────────────────────────────────────────
      zIndex: {
        below: '-1',
        base: '0',
        raised: '10',
        overlay: '20',
        drawer: '30',
        modal: '71',
        toast: '50',
        tooltip: '60',
        nav: '70',
      },

      // ─── Grid Columns ─────────────────────────────────────────────────────
      gridTemplateColumns: {
        'products-sm': 'repeat(2, minmax(0, 1fr))',
        'products-md': 'repeat(3, minmax(0, 1fr))',
        'products-lg': 'repeat(4, minmax(0, 1fr))',
        editorial: '2fr 1fr',
        'editorial-r': '1fr 2fr',
        feature: '1fr 1fr 1fr',
      },

      // ─── Gradients ────────────────────────────────────────────────────────
      backgroundImage: {
        // ── Light mode ───────────────────────────────────────────────────
        'gradient-parchment': 'linear-gradient(135deg, #FAFAF8 0%, #F2EFE9 50%, #EAE5DC 100%)',
        'gradient-linen': 'linear-gradient(180deg, #F2EFE9 0%, #E5E0D8 100%)',
        'gradient-vignette':
          'radial-gradient(ellipse at center, transparent 40%, rgba(13,12,11,0.35) 100%)',
        'gradient-gold':
          'linear-gradient(90deg, #8C7248 0%, #B89A6A 40%, #D4B896 80%, #B89A6A 100%)',
        'gradient-scrim':
          'linear-gradient(to top, rgba(13,12,11,0.80) 0%, rgba(13,12,11,0.30) 40%, transparent 100%)',
        'gradient-spotlight':
          'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(212,184,150,0.18) 0%, transparent 70%)',

        // ── Dark mode ────────────────────────────────────────────────────
        'gradient-obsidian': 'linear-gradient(135deg, #0D0C0B 0%, #1A1916 50%, #252320 100%)',
        'gradient-surface': 'linear-gradient(180deg, #1A1916 0%, #252320 100%)',
        'gradient-gold-dark':
          'linear-gradient(90deg, #6B5535 0%, #8C7248 40%, #B89A6A 80%, #8C7248 100%)',
        'gradient-ember':
          'radial-gradient(ellipse 70% 50% at 25% 60%, rgba(184,154,106,0.12) 0%, transparent 65%)',
        'gradient-scrim-dark':
          'linear-gradient(to top, rgba(13,12,11,0.90) 0%, rgba(13,12,11,0.40) 40%, transparent 100%)',

        // ── Universal ────────────────────────────────────────────────────
        // Diagonal warm-to-cool for section breaks
        'gradient-editorial':
          'linear-gradient(120deg, #F2EFE9 0%, #E5E0D8 35%, #D4B896 65%, #B89A6A 100%)',
        // Horizontal gold band — dividers, progress bars
        'gradient-band':
          'linear-gradient(90deg, transparent 0%, #B89A6A 30%, #D4B896 50%, #B89A6A 70%, transparent 100%)',
        // Soft fade to transparent — section edge fades
        'gradient-fade-r': 'linear-gradient(90deg, transparent 0%, rgba(242,239,233,0.95) 100%)',
        'gradient-fade-l': 'linear-gradient(270deg, transparent 0%, rgba(242,239,233,0.95) 100%)',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    PrimeUI,
  ],
};
