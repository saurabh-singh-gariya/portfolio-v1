import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-9 sm:py-12">
      <Reveal className="mb-8 text-center">
        <p className="font-mono text-xs tracking-[0.25em] text-muted uppercase">{eyebrow}</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {title}
          <span className="text-accent">.</span>
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
