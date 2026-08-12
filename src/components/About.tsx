import { Cloud, Layout, Server, Sparkles, type LucideIcon } from 'lucide-react';
import { disciplines } from '../data/profile';
import { Reveal } from './Reveal';
import { Section } from './Section';

const icons: Record<string, LucideIcon> = {
  'Front-End Engineer': Layout,
  'Back-End Engineer': Server,
  'AI Engineer': Sparkles,
  Platform: Cloud,
};

export function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="What I do">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {disciplines.map((discipline, i) => {
          const Icon = icons[discipline.label] ?? Layout;

          return (
            <Reveal key={discipline.label} delayMs={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
                <Icon className="size-7 text-accent" aria-hidden />
                <h3 className="mt-5 font-semibold">{discipline.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">{discipline.blurb}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
