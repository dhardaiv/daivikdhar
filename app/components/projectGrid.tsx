import type { Project } from "../data/projects";
import ProjectCard from "./projectCard";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <ul className="project-grid" aria-label="Selected work">
      {projects.map((project) => (
        <li key={project.title}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}