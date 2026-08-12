import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-20 sm:py-24">
      <Reveal>
        <h2 className="mb-10 font-mono text-xs tracking-[0.2em] text-muted uppercase">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
