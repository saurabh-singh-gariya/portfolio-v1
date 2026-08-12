import { skillGroups } from '../data/profile';
import { iconFor } from './icons/techIcons';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills" eyebrow="What I learnt" title="Tech skills">
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delayMs={i * 70}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <h3 className="text-center text-lg font-semibold">{group.label}</h3>

              <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
                {group.items.map((item) => {
                  const Icon = iconFor(item);

                  return (
                    <li key={item}>
                      <span className="flex items-center gap-2 rounded-xl border border-line bg-bg px-3 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60">
                        {Icon ? <Icon className="size-4 shrink-0 text-accent" /> : null}
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
