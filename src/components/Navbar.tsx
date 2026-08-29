import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur supports-backdrop-blur:bg-background/60">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-mono text-sm font-semibold tracking-tight">
          {profile.name}
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-muted sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
