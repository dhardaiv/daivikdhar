import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page page--home">
      <div className="notice-banner">
        🚧 This site is under construction
      </div>
      <div className="home-shell">
        <main id="main-content">
          <section className="home-intro" aria-labelledby="home-title">
            <div className="home-top">
              <h1 id="home-title">Daivik Dhar</h1>
              <nav className="top-links" aria-label="Links">
                <Link href="/notes">Notes</Link>
                <a href="mailto:vikdai217@gmail.com">Email</a>
                <a
                  href="https://www.linkedin.com/in/daivik-dhar"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a href="https://x.com/dhardaiv" target="_blank" rel="noreferrer">
                  X
                </a>
                <a
                  href="https://github.com/dhardaiv"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </nav>
            </div>
            <div className="home-intro__copy">
              <p>
                I'm a Robotics Engineering student at the University of Toronto,
                working at the intersection of robots and reinforcement
                learning.
              </p>
              <p>
                Currently, I'm building multimodal agents with assurance teams
                at{" "}
                <a href="https://www.bdo.ca/" target="_blank" rel="noreferrer">
                  BDO
                </a>
                .
              </p>
              <p>
                Previously, I researched reinforcement learning for therapist
                agents at{" "}
                <a
                  href="https://unityhealth.to/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Unity Health
                </a>
                . I'm most curious about multimodal models, coding agents, and
                systems that learn by interacting with the world.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
