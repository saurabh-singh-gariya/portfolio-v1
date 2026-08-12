import { Building2 } from 'lucide-react';
import { roles } from '../data/profile';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12">
        {roles.map((role, i) => (
          <Reveal key={role.company} delayMs={i * 80}>
            <article className="group rounded-2xl border border-transparent p-5 transition-colors duration-300 hover:border-line hover:bg-surface sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-x-6">
              <p className="flex items-center gap-1.5 self-start pt-1 font-mono text-xs text-muted">
                <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                {role.period}
              </p>

              <div className="mt-4 sm:mt-0">
                <h3 className="flex flex-wrap items-center gap-x-2 text-base font-medium">
                  <Building2 className="size-4 text-accent" aria-hidden />
                  {role.title}
                  <span className="text-muted">·</span>
                  <span className="text-accent">{role.company}</span>
                </h3>
                <p className="mt-1 text-sm text-muted">{role.location}</p>

                <ul className="mt-5 space-y-3">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 leading-relaxed text-muted text-pretty">
                      <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-line" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
