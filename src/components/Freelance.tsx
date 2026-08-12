import { Briefcase } from 'lucide-react';
import { freelanceProjects } from '../data/profile';
import { iconFor } from './icons/techIcons';
import { Reveal } from './Reveal';
import { RichText } from './RichText';
import { Section } from './Section';

export function Freelance() {
  return (
    <Section id="freelance" eyebrow="On the side" title="Freelance work">
      <div className="space-y-5">
        {freelanceProjects.map((project, i) => (
          <Reveal key={project.name} delayMs={i * 70}>
            <article className="rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/60 sm:grid sm:grid-cols-[15rem_1fr] sm:gap-x-10 sm:p-7">
              <header className="sm:self-start">
                <Briefcase className="size-6 text-accent" aria-hidden />
                <h3 className="mt-4 font-semibold">{project.name}</h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  {project.role} · {project.period}
                </p>
              </header>

              <div className="mt-5 sm:mt-0">
                <p className="leading-relaxed text-muted text-pretty">{project.blurb}</p>

                <ul className="mt-4 space-y-2.5">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent/60" />
                      <span>
                        <RichText text={highlight} />
                      </span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => {
                    const Icon = iconFor(tech);

                    return (
                      <li
                        key={tech}
                        className="flex items-center gap-1.5 rounded-lg border border-line bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {Icon ? <Icon className="size-3.5 text-accent" /> : null}
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
