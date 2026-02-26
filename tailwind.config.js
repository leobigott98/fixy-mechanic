// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",

        card: "hsl(var(--card))",
        "card-fg": "hsl(var(--card-fg))",

        muted: "hsl(var(--muted))",
        "muted-fg": "hsl(var(--muted-fg))",

        border: "hsl(var(--border))",

        brand: "hsl(var(--brand))",
        "brand-2": "hsl(var(--brand-2))",
        "brand-fg": "hsl(var(--brand-fg))",

        ring: "hsl(var(--ring))",
      },
    },
  },
};