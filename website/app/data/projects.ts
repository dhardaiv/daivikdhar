export type Artwork = "therapy" | "agents" | "agriculture" | "array";

export interface Project {
  title: string;
  organization: string;
  period: string;
  description: string;
  category: "Project" | "Writing" | "Research";
  href: string;
  artwork: Artwork;
  featured?: boolean;
}

/** Selected public work represented across the home and work pages. */
export const projects: Project[] = [
  {
    title: "Adaptive psychotherapy systems",
    organization: "University Health Network",
    period: "Current",
    description:
      "Researching reinforcement learning for therapist agents and adaptive psychotherapy.",
    category: "Research",
    href: "https://www.uhn.ca/",
    artwork: "therapy",
    featured: true,
  },
  {
    title: "Enterprise multimodal agents",
    organization: "BDO Canada",
    period: "2025",
    description:
      "Built enterprise-specific multimodal agents for complex business workflows.",
    category: "Project",
    href: "https://www.bdo.ca/",
    artwork: "agents",
    featured: true,
  },
  {
    title: "Crop intelligence tools",
    organization: "U of T Hatchery",
    period: "2025",
    description:
      "Developed crop-intelligence tools for farmers through the University of Toronto Hatchery.",
    category: "Project",
    href: "https://hatchery.engineering.utoronto.ca/",
    artwork: "agriculture",
    featured: true,
  },
  {
    title: "Carbon Array",
    organization: "U of T Hatchery",
    period: "2025",
    description:
      "Built a team venture through the U of T Hatchery and presented it as a pitch-competition finalist.",
    category: "Project",
    href: "https://hatchery.engineering.utoronto.ca/",
    artwork: "array",
  },
];