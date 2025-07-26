import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--color-border) !important",
        input: "var(--color-input) !important",
        ring: "var(--color-ring) !important",
        background: "var(--color-background) !important",
        foreground: "var(--color-foreground) !important",

        primary: "var(--color-primary) !important",
        "primary-foreground": "var(--color-primary-foreground) !important",

        secondary: "var(--color-secondary) !important",
        "secondary-foreground": "var(--color-secondary-foreground) !important",

        destructive: "var(--color-destructive) !important",
        "destructive-foreground":
          "var(--color-destructive-foreground) !important",

        muted: "var(--color-muted) !important",
        "muted-foreground": "var(--color-muted-foreground) !important",

        accent: "var(--color-accent) !important",
        "accent-foreground": "var(--color-accent-foreground) !important",

        popover: "var(--color-popover) !important",
        "popover-foreground": "var(--color-popover-foreground) !important",

        card: "var(--color-card) !important",
        "card-foreground": "var(--color-card-foreground) !important",
      },

      borderRadius: {
        lg: "var(--radius)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
