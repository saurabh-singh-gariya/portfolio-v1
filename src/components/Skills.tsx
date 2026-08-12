import { Braces, Cloud, Database, Layout, Server, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skillGroups } from '../data/profile';
import { Reveal } from './Reveal';
import { Section } from './Section';

const icons: Record<string, LucideIcon> = {
  Languages: Braces,
  Frontend: Layout,
  Backend: Server,
  'Data & Messaging': Database,
  'Cloud & DevOps': Cloud,
  'AI & Tools': Sparkles,
};

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.label] ?? Braces;

          return (
            <Reveal key={group.label} delayMs={i * 60}>
              <div className="h-full rounded-2xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-accent/50">
                <h3 className="flex items-center gap-2 font-mono text-xs tracking-wider text-muted uppercase">
                  <Icon className="size-4 text-accent" aria-hidden />
                  {group.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
