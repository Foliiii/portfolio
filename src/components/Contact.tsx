import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="max-w-xl">
        <p className="text-base text-muted">
          I&apos;m open to full-time software engineering opportunities. The fastest way to
          reach me is email — feel free to reach out.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
