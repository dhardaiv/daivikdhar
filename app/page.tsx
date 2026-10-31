import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page page--home">
      <div className="home-shell">
        <main id="main-content">
          <section className="home-intro" aria-labelledby="home-title">
            <div className="home-top">
              <h1 id="home-title">Daivik Dhar</h1>
              <nav className="top-links" aria-label="Links">
                <Link href="/notes">Notes</Link>
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
                . Outside of work, I am always up for a semi-long bike ride, hike or some tennis. 
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
