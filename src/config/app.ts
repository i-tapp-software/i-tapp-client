const { env } = require("@/lib/env");

export const app = {
  name: env("app_name", "ITAPP"),
  title: "ITAPP",
  description: "",
  logo_url: "/logo.png",
  favicon_url: "/favicon.png",
  nav_links: [
    {
      title: "Homepage",
      href: "/",
      text: "Home",
    },
    {
      title: "About Us - Know our purpose, vision, mission and the team.",
      href: "/about-us",
      text: "About Us",
    },
    {
      title: "Contact Us - We are avaliable 24/7 via all support channels.",
      href: "/contact-us",
      text: "Contact Us",
    },
  ],
  links: {
    signin: "/signin",
    signup: "/student/signup",
  },

  footer_links: [
    {
      title: "Info",
      links: [
        { href: "/", title: "Formats" },
        { href: "/", title: "Compression" },
        { href: "/", title: "Pricing" },
        { href: "/", title: "FAQ" },
        { href: "/", title: "Status" },
      ],
    },

    {
      title: "Resources",
      links: [
        { href: "/", title: "Developer API" },
        { href: "/", title: "Tools" },
        { href: "/", title: "Blog" },
      ],
    },

    {
      title: "Company",
      links: [
        { href: "/", title: "About Us" },
        { href: "/", title: "Sustainability" },
        { href: "/", title: "Terms of Service" },
        { href: "/", title: "Privacy" },
      ],
    },
  ],
};
