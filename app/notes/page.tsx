import type { Metadata } from "next";
import Link from "next/link";
import { notes } from "../data/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes and unfinished drafts by Daivik Dhar.",
};

function formatNoteDate(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${month}/${day}/${year}`;
}

export default function NotesPage() {
  return (
    <div className="page page--notes">
      <div className="home-shell">
        <main id="main-content">
          <header className="notes-heading">
            <Link href="/" aria-label="Back to home">
              {"<"}
            </Link>
            <h1>Notes</h1>
          </header>
          <p className="notes-intro">
            my scratchpad for drafts and half-formed thoughts. 
          </p>
          <ul className="note-list">
            {notes.map((note) => (
              <li key={note.slug}>
                <Link href={`/notes/${note.slug}`}>
                  <span>{note.title}</span>
                  <time dateTime={note.date}>{formatNoteDate(note.date)}</time>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
