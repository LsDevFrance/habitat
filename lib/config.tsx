export const siteConfig = {
  name: "Habita",
  description: "Habitat Azure",
  cta: "Contactez-nous",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["Habitat Azure", "Habitat Azure"],
  links: {
    email: "support@calai.app",
    twitter: "https://twitter.com/calaiapp",
    discord: "https://discord.gg/calaiapp",
    github: "https://github.com/calaiapp",
    instagram: "https://instagram.com/calaiapp",
  },
  nav: {
    links: [
      { id: 1, name: "Accueil", href: "#hero" },
      { id: 2, name: "Propriétés", href: "#properties" },
      { id: 3, name: "À propos", href: "#about" },
      { id: 4, name: "Avis", href: "#review" },
    ],
  },
  footerLinks: [
    {
      title: "Company",
      links: [
        { id: 1, title: "About", url: "#" },
        { id: 2, title: "Contact", url: "#" },
        { id: 3, title: "Blog", url: "#" },
        { id: 4, title: "Story", url: "#" },
      ],
    },
    {
      title: "Products",
      links: [
        { id: 5, title: "Company", url: "#" },
        { id: 6, title: "Product", url: "#" },
        { id: 7, title: "Press", url: "#" },
        { id: 8, title: "More", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 9, title: "Press", url: "#" },
        { id: 10, title: "Careers", url: "#" },
        { id: 11, title: "Newsletters", url: "#" },
        { id: 12, title: "More", url: "#" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
