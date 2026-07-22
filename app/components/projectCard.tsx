import { Artwork, Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      className="project-card"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title} at ${project.organization} (opens in a new tab)`}
    >
      <ProjectArtwork artwork={project.artwork} />

      <div className="project-card__body">
        <h2>{project.title}</h2>
        <p className="project-card__meta">
          <span>{project.period}</span>
          <span aria-hidden="true">·</span>
          <span>{project.category}</span>
        </p>
        <p className="project-card__description">{project.description}</p>
      </div>
    </a>
  );
}

function ProjectArtwork({ artwork }: { artwork: Artwork }) {
  return (
    <div
      className={`project-art project-art--${artwork}`}
      aria-hidden="true"
    >
      {artwork === "therapy" && (
        <div className="therapy-study">
          <p>adaptive session</p>
          <div className="therapy-study__exchange">
            <span className="therapy-study__prompt">
              <i />
              <i />
              <i />
            </span>
            <span className="therapy-study__response">
              <i />
              <i />
            </span>
          </div>
          <div className="therapy-study__orbit">
            <span />
            <span />
            <span />
          </div>
          <small>policy update · 04</small>
        </div>
      )}

      {artwork === "agents" && (
        <div className="agent-system">
          <div className="agent-system__header">
            <span>multimodal system</span>
            <i />
          </div>
          <div className="agent-system__flow">
            <div className="agent-system__inputs">
              <span>text</span>
              <span>vision</span>
              <span>data</span>
            </div>
            <div className="agent-system__line" />
            <div className="agent-system__core">
              <span>agent</span>
              <i />
            </div>
            <div className="agent-system__line" />
            <div className="agent-system__output">action</div>
          </div>
          <div className="agent-system__status">
            <span />
            workflow ready
          </div>
        </div>
      )}

      {artwork === "agriculture" && (
        <div className="field-study">
          <div className="field-study__topline">
            <span>field intelligence</span>
            <span>plot 07</span>
          </div>
          <div className="field-study__map">
            {Array.from({ length: 18 }, (_, index) => (
              <i key={index} />
            ))}
            <span className="field-study__target" />
          </div>
          <div className="field-study__legend">
            <span>
              <i /> healthy
            </span>
            <span>
              <i /> review
            </span>
          </div>
        </div>
      )}

      {artwork === "array" && (
        <div className="array-study">
          <div className="array-study__title">
            <span>carbon</span>
            <span>array</span>
          </div>
          <div className="array-study__grid">
            {Array.from({ length: 30 }, (_, index) => (
              <i key={index} />
            ))}
          </div>
          <p>venture system / 2025</p>
        </div>
      )}

    </div>
  );
}