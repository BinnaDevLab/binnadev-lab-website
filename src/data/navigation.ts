import { socialLinks } from "./social";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNavigation: NavLink[] = [
  { label: "Philosophy", href: "/philosophy" },
  { label: "Cohorts", href: "/cohorts" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "Community", href: "/culture" },
];

export const mobileNavigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Cohorts", href: "/cohorts" },
  { label: "Architect", href: "/architect" },
  { label: "Research", href: "/research" },
  { label: "Community", href: "/culture" },
];

export const footerNavigation = {
  lab: [
    { label: "Philosophy", href: "/philosophy" },
    { label: "The Architect", href: "/architect" },
    { label: "Research", href: "/research" },
    { label: "Community", href: "/culture" },
  ],
  services: [
    { label: "Collaborate", href: "/collaborate" },
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

