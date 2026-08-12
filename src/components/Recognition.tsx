import { GraduationCap, Trophy } from 'lucide-react';
import { awards, education } from '../data/profile';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function Recognition() {
  return (
    <Section id="recognition" title="Education & Recognition">
      <div className="grid gap-4 sm:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-line bg-surface p-5">
            <h3 className="flex items-center gap-2 font-mono text-xs tracking-wider text-muted uppercase">
              <GraduationCap className="size-4 text-accent" aria-hidden />
              Education
            </h3>
            <p className="mt-3 font-medium">{education.institution}</p>
            <p className="mt-1 text-sm text-muted">
              {education.degree} — {education.detail}
            </p>
            <p className="mt-1 font-mono text-xs text-muted">
              {education.period} · {education.location}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="h-full rounded-2xl border border-line bg-surface p-5">
            <h3 className="flex items-center gap-2 font-mono text-xs tracking-wider text-muted uppercase">
              <Trophy className="size-4 text-accent" aria-hidden />
              Recognition
            </h3>
            <ul className="mt-3 space-y-2">
              {awards.map((award) => (
                <li key={award} className="text-sm text-muted">
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
