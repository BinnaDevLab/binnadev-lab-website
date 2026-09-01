import { socialLinks } from "./social";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  isCTA?: boolean;
}

export const mainNavigation: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Cohorts", href: "/cohorts" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "Community", href: "/community" },
  { label: "Support Lab", href: "/donate", isCTA: true },
];

export const mobileNavigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Cohorts", href: "/cohorts" },
  { label: "Architect", href: "/architect" },
  { label: "Research", href: "/research" },
  { label: "Community", href: "/community" },
];

export const footerNavigation = {
  lab: [
    { label: "About", href: "/about" },
    { label: "The Architect", href: "/architect" },
    { label: "Research", href: "/research" },
    { label: "Community", href: "/community" },
  ],
  services: [
    { label: "Collaborate", href: "/collaborate" },
    { label: "Cohorts", href: "/cohorts" },
    { label: "Support Lab", href: "/donate" },
  ],
  socials: [
    { label: "YouTube", href: socialLinks.youtube, icon: "youtube" },
    { label: "GitHub", href: socialLinks.github, icon: "github" },
    { label: "X (Twitter)", href: socialLinks.twitter, icon: "twitter" },
    { label: "Discord", href: socialLinks.discord, icon: "discord" },
    { label: "Telegram", href: socialLinks.telegram, icon: "telegram" },
  ],
};
