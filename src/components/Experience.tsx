import Section from "./Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-8 border-l border-border pl-6">
        {experience.map((item) => (
          <li key={`${item.role}-${item.organization}`} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-semibold">{item.role}</h3>
              <span className="font-mono text-xs text-muted">{item.period}</span>
            </div>
            <p className="text-sm text-accent">{item.organization}</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
