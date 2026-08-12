import { ArrowUpRight, FileText, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { Reveal } from './Reveal';
import { Section } from './Section';

const channels = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail, external: false },
  { href: profile.linkedin, label: 'linkedin.com/in/sgariya', icon: LinkedInIcon, external: true },
  { href: profile.resumeUrl, label: 'Résumé (PDF)', icon: FileText, external: true },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Say hello" title="Get in touch">
      <Reveal>
        <p className="mx-auto max-w-xl text-center text-lg leading-relaxed text-muted text-pretty">
          Open to full-stack roles and interesting problems. The fastest way to reach me is email — I read
          everything.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {channels.map(({ href, label, icon: Icon, external }) => (
            <li key={href}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
              >
                <Icon className="size-4 shrink-0 text-accent" aria-hidden />
                <span className="truncate">{label}</span>
                <ArrowUpRight
                  className="ml-auto size-3.5 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
