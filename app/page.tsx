import Link from "next/link";
import { projects } from "./data/projects";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="page page--home">
      <div className="home-shell">
        <main id="main-content">
          <section className="home-intro" aria-labelledby="home-title">
            <h1 id="home-title">Daivik Dhar</h1>
            <div className="home-intro__copy">
              <p>
                I’m a Robotics Engineering student at the University of Toronto,
                working at the intersection of robots and reinforcement
                learning.
              </p>
              <p>
                Currently, I research reinforcement learning for therapist
                agents at{" "}
                <a href="https://www.uhn.ca/" target="_blank" rel="noreferrer">
                  University Health Network
                </a>
                .
              </p>
              <p>
                Previously, I built enterprise-specific multimodal agents at{" "}
                <a href="https://www.bdo.ca/" target="_blank" rel="noreferrer">
                  BDO
                </a>{" "}
                and crop-intelligence tools for farmers through the{" "}
                <a
                  href="https://hatchery.engineering.utoronto.ca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  U of T Hatchery
                </a>
                . I’m most curious about multimodal models, coding agents, and
                systems that learn by interacting with the world.
              </p>
            </div>

            <nav className="profile-links" aria-label="Profile links">
              <a
                href="https://github.com/dhardaiv"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/daivik-dhar"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://curius.app/daivik-dhar"
                target="_blank"
                rel="noreferrer"
              >
                Curius <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </section>

          <section className="selected-work" aria-labelledby="selected-title">
            <h2 id="selected-title">Selected work</h2>

            <ol className="work-list">
              {featuredProjects.map((project) => (
                <li key={project.title}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} at ${project.organization} (opens in a new tab)`}
                  >
                    <span className="work-list__content">
                      <span className="work-list__title-row">
                        <strong>{project.title}</strong>
                        <span>
                          {project.organization} · {project.period}
                        </span>
                      </span>
                      <span className="work-list__description">
                        {project.description}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>

            <Link className="more-work" href="/work">
              More work
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}