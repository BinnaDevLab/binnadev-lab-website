export interface NavLink {
  label: string;
  href: string;
}

export const mainNavigation: NavLink[] = [
  { label: "Lab", href: "/" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Research", href: "/research" },
  { label: "Culture", href: "/culture" },
  { label: "Collaborate", href: "/collaborate" },
];

export const footerNavigation = {
  academy: [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Books", href: "/curriculum" },
    { label: "Methodology", href: "/philosophy" },
    { label: "The Architect", href: "/architect" },
  ],
  laboratory: [
    { label: "Research", href: "/research" },
    { label: "Publications", href: "/research#publications" },
    { label: "Culture", href: "/culture" },
    { label: "Collaborate", href: "/collaborate" },
    { label: "Services", href: "/collaborate#services" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/obinnafranklinduru", icon: "github" },
    { label: "X (Twitter)", href: "#", icon: "twitter" },
    { label: "Discord", href: "#", icon: "discord" },
  ]
};
