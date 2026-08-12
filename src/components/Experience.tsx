import { Building2 } from 'lucide-react';
import { roles } from '../data/profile';
import { iconFor } from './icons/techIcons';
import { Reveal } from './Reveal';
import { RichText } from './RichText';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" eyebrow="What I have done so far" title="Work experience">
      <div className="relative">
        <span
          aria-hidden
          className="absolute top-2 left-[7px] h-full w-px bg-line md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-8">
          {roles.map((role, i) => {
            const cardFirst = i % 2 === 0;

            return (
              <Reveal key={role.company}>
                <div className="relative pl-10 md:grid md:grid-cols-2 md:items-start md:gap-x-12 md:pl-0">
                  <span
                    aria-hidden
                    className="absolute top-6 left-0 size-3.5 rounded-full border-4 border-bg bg-accent md:left-1/2 md:-translate-x-1/2"
                  />

                  <p
                    className={`mb-4 font-mono text-sm text-muted md:mb-0 md:pt-6 ${
                      cardFirst ? 'md:order-2 md:pl-2' : 'md:order-1 md:pr-2 md:text-right'
                    }`}
                  >
                    {role.period}
                  </p>

                  <article
                    className={`rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/50 ${
                      cardFirst ? 'md:order-1' : 'md:order-2'
                    }`}
                  >
                    <h3 className="flex items-start gap-2 font-semibold">
                      <Building2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-accent">
                      {role.company} <span className="text-muted">· {role.location}</span>
                    </p>

                    <ul className="mt-5 space-y-3">
                      {role.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent/60" />
                          <span>
                            <RichText text={highlight} />
                          </span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {role.stack.map((tech) => {
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
                  </article>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
