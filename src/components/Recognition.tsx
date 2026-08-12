import { GraduationCap, Trophy } from 'lucide-react';
import { awards, education } from '../data/profile';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function Recognition() {
  return (
    <Section id="education" eyebrow="Where I studied" title="Education & recognition">
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <GraduationCap className="size-5 text-accent" aria-hidden />
              {education.institution}
            </h3>
            <p className="mt-3 text-sm text-muted">
              {education.degree} — {education.detail}
            </p>
            {/* Pinned to the card foot so the shorter card matches its taller neighbour. */}
            <p className="mt-auto pt-4 font-mono text-xs text-muted">
              {education.period} · {education.location}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80} className="h-full">
          <div className="h-full rounded-2xl border border-line bg-surface p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <Trophy className="size-5 text-accent" aria-hidden />
              Recognition
            </h3>
            <ul className="mt-3 space-y-2">
              {awards.map((award) => (
                <li key={award} className="flex gap-3 text-sm text-muted">
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent/60" />
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
