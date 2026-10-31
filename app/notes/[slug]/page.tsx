import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "../../data/notes";

interface NotePageProps {
  params: Promise<{ slug: string }>;
}

function formatNoteDate(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${month}/${day}/${year}`;
}

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);

  if (!note) {
    return { title: "Note" };
  }

  return {
    title: note.title,
    description: note.paragraphs[0],
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="page page--notes">
      <div className="home-shell">
        <main id="main-content">
          <header className="notes-heading">
            <Link href="/notes" aria-label="Back to notes">
              {"<"}
            </Link>
            <h1>{note.title}</h1>
          </header>
          <p className="note-date">
            <time dateTime={note.date}>{formatNoteDate(note.date)}</time>
          </p>
          <div className="note-body">
            {note.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
