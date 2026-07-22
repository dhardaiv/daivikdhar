import Link from "next/link";

interface HeaderProps {
  active?: "home" | "work";
}

export default function Header({ active }: HeaderProps) {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Daivik Dhar, home">
        Daivik Dhar
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/" aria-current={active === "home" ? "page" : undefined}>
          Home
        </Link>
        <Link href="/work?type=writing">Writing</Link>
        <Link
          href="/work"
          aria-current={active === "work" ? "page" : undefined}
        >
          Work
        </Link>
        <a
          href="https://x.com/dhardaiv"
          target="_blank"
          rel="noreferrer"
        >
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
    </header>
  );
}