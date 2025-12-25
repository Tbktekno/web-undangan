/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wedding-green": "#84A98C",
        "wedding-dark-green": "#52796F",
        "wedding-gold": "#D4AF37",
        "wedding-cream": "#FDFCF0",
        "wedding-sand": "#EAE0D5",
        'wedding-burgundy': '#800020',
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Lato"', "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2070&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
};
