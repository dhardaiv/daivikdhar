import type { Metadata } from "next";
import Header from "../components/header";
import ProjectGrid from "../components/projectGrid";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected research, engineering, and product work by Daivik Dhar.",
};

export default function WorkPage() {
  return (
    <div className="page page--work">
      <div className="work-shell">
        <Header active="work" />

        <main id="main-content">
          <header className="work-intro">
            <h1>Work</h1>
            <p>Research, projects, and writing.</p>
          </header>

          <ProjectGrid projects={projects} />
        </main>
      </div>
    </div>
  );
}
