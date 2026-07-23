export type Artwork = "therapy" | "agents";

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
    title: "Enterprise multimodal agents",
    organization: "BDO Canada",
    period: "Current",
    description:
      "Building multimodal agents with assurance teams for complex business workflows.",
    category: "Project",
    href: "https://www.bdo.ca/",
    artwork: "agents",
    featured: true,
  },
  {
    title: "Adaptive psychotherapy systems",
    organization: "Unity Health",
    period: "2025",
    description:
      "Researched reinforcement learning for therapist agents and adaptive psychotherapy.",
    category: "Research",
    href: "https://unityhealth.to/",
    artwork: "therapy",
    featured: true,
  },
];
