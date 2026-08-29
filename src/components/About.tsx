import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-4 text-base leading-relaxed text-foreground/90">
        {profile.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        {profile.location ? (
          <p className="text-sm text-muted">📍 {profile.location}</p>
        ) : null}
      </div>
    </Section>
  );
}
