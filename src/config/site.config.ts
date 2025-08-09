export const siteConfig = {
  name: "GRACJA",
  shortName: "GRACJA",
  tagline: "Pokoje gościnne i apartamenty przy plaży",
  description:
    "GRACJA – komfortowe pokoje i apartamenty w Rogowie, kilka kroków od plaży. Idealne dla par i rodzin.",
  locale: "pl-PL",
  themeColor: "#081c4c",
  contact: {
    phone: "+48 799 042 755",
    email: "info@gracjarogowo.pl",
    bookingUrl: "#kontakt",
  },
  links: {
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2336.683801623893!2d15.329147676889193!3d54.15024977253344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47006dfe2b37c343%3A0x907e3320572f761a!2sGRACJA%20-%20Pokoje%20go%C5%9Bcinne%20i%20apartamenty%20przy%20pla%C5%BCy!5e0!3m2!1spl!2spl!4v1754753952433!5m2!1spl!2spl",
    siteUrl: "https://gracjarogowo.pl",
    facebook: "https://facebook.com/GracjaRogowo",
    instagram: "",
  },
  address: { line1: "Rogowo 46", line2: "72-330 Rogowo" },
  og: { image: "/og-gracja-1200x630.jpg", alt: "GRACJA – Rogowo" },
} as const;

export type SiteConfig = typeof siteConfig;
