export interface Note {
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  paragraphs: string[];
}

/** Scratchpad entries, newest first. */
export const notes: Note[] = [];
