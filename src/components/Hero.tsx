import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-16 sm:pt-24">
      <p className="mb-4 font-mono text-sm text-accent">Hi, I&apos;m {profile.name.split(" ")[0]} 👋</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {profile.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">{profile.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition hover:opacity-90"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
        >
          Get in Touch
        </a>
        {profile.resumeUrl ? (
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            Download Resume
          </a>
        ) : null}
      </div>
    </section>
  );
}
