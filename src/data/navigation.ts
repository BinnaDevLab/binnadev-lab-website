import { socialLinks } from "./social";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNavigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Architect", href: "/architect" },
  { label: "Methodology", href: "/philosophy" },
  { label: "Cohorts", href: "/cohorts" },
  { label: "Research", href: "/research" },
  { label: "Culture", href: "/culture" },
  { label: "Collaborate", href: "/collaborate" },
];

export const footerNavigation = {
  lab: [
    { label: "Methodology", href: "/philosophy" },
    { label: "The Architect", href: "/architect" },
    { label: "Research", href: "/research" },
    { label: "Culture", href: "/culture" },
  ],
  services: [
    { label: "Collaborate", href: "/collaborate" },
    { label: "Services", href: "/collaborate#services" },
    { label: "Cohorts", href: "/cohorts" },
  ],
  socials: [
    { label: "YouTube", href: socialLinks.youtube, icon: "youtube" },
    { label: "GitHub", href: socialLinks.github, icon: "github" },
    { label: "X (Twitter)", href: socialLinks.twitter, icon: "twitter" },
    { label: "Discord", href: socialLinks.discord, icon: "discord" },
    { label: "Telegram", href: socialLinks.telegram, icon: "telegram" },
  ],
};

