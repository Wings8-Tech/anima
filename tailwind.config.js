/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        mobile: "640px",
        tablet: "1024px",
        desktop: "1440px",
      },
    },
    extend: {
      // Design tokens WINGS8 Technology + Google Meet 2025
      colors: {
        // Primary (WINGS8 Violet - replaces Google Blue)
        primary: {
          50: "#EEF2F8",
          100: "#D6E0EE",
          200: "#B8C7DD", // Lavande pâle WINGS8
          300: "#8FA6C7",
          400: "#4C6B9B",
          500: "#0B1F4B", // Violet primaire WINGS8 (main)
          600: "#081A3E", // Violet accent WINGS8
          700: "#061533",
          800: "#051129",
          900: "#040D1F",
        },
        // Secondary (Violet-Bleu clair WINGS8)
        secondary: {
          400: "#8FA6C7",
          500: "#4C6B9B",
          600: "#0B1F4B",
        },
        // Neutral (Dark Mode - Keep from Meet)
        neutral: {
          50: "#FFFFFF",
          100: "#E8EAED",
          400: "#9AA0A6",
          600: "#3C3C3C",
          700: "#2D2D2D",
          800: "#1F1F1F",
          900: "#0F0F0F", // Main dark background
        },
        // Surface (Light Mode - WINGS8)
        surface: {
          bg: "#F0F2F5", // Fond clair WINGS8 (replaces white)
          card: "#FFFFFF",
          elevated: "#FFFFFF",
          border: "#E0E2E5",
        },
        // Semantic colors
        danger: {
          400: "#F28B82",
          500: "#EA4335", // Google Red (keep for disconnect)
        },
        success: {
          500: "#34A853", // Google Green
        },
        warning: {
          400: "#F5C042",
          500: "#FBBC04", // Google Yellow
        },
        accent: {
          orange: "#E69138", // Orange brûlé WINGS8
          purple: "#6E60E8", // Alias for primary
        },
      },
      fontFamily: {
        primary: ["Inter", "Google Sans", "Roboto", "system-ui", "sans-serif"],
        secondary: ["Inter", "Roboto", "system-ui", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      fontSize: {
        display: "36px",
        headline: "24px",
        title: "20px",
        "body-lg": "16px",
        body: "14px",
        label: "12px",
        caption: "11px",
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "24px",
        6: "32px",
        8: "48px",
        10: "64px",
        12: "96px",
      },
      borderRadius: {
        sm: "8px",
        md: "12px", // WINGS8: Augmenté de 8px à 12px
        lg: "16px", // WINGS8: Augmenté de 12px à 16px
        xl: "20px", // WINGS8: Augmenté de 16px à 20px
        "2xl": "24px",
        full: "9999px",
      },
      boxShadow: {
        // WINGS8: Ombres plus subtiles
        sm: "0 2px 8px rgba(0, 0, 0, 0.04)",
        card: "0 4px 16px rgba(0, 0, 0, 0.06)",
        elevated: "0 8px 24px rgba(0, 0, 0, 0.08)",
        modal: "0 12px 32px rgba(0, 0, 0, 0.12)",
        // Ombres spécifiques WINGS8 violet
        primary: "0 2px 8px rgba(110, 96, 232, 0.2)",
        "primary-hover": "0 4px 12px rgba(110, 96, 232, 0.3)",
      },
      animation: {
        "duration-instant": "100ms",
        "duration-fast": "150ms",
        "duration-normal": "200ms", // WINGS8: Réduit de 250ms à 200ms
        "duration-slow": "300ms", // WINGS8: Réduit de 350ms à 300ms
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.4, 0, 0.2, 1)",
        enter: "cubic-bezier(0, 0, 0.2, 1)",
        exit: "cubic-bezier(0.4, 0, 1, 1)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "10px",
        lg: "15px",
        xl: "20px", // WINGS8: Pour glassmorphism
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
