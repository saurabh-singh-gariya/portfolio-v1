import { ArrowUpRight, FileText, Mail, MapPin } from 'lucide-react';
import type { CSSProperties } from 'react';
import { profile } from '../data/profile';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { Portrait } from './Portrait';

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" className="py-10 sm:py-14">
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        <div className="w-full">
          <p
            className="rise flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] text-accent uppercase"
            style={delay(0)}
          >
            <MapPin className="size-3.5" aria-hidden />
            {profile.location}
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            <span className="rise block" style={delay(80)}>
              Hi, I am
            </span>
            <span className="rise mt-1 block text-accent" style={delay(160)}>
              Saurabh
            </span>
          </h1>

          <p className="rise mt-5 text-xl text-muted sm:text-2xl" style={delay(240)}>
            {profile.title} — <span className="text-fg">{profile.tagline}</span>
          </p>

          <p className="rise mt-6 max-w-xl leading-relaxed text-muted text-pretty" style={delay(320)}>
            {profile.summary}
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3" style={delay(400)}>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-transform duration-200 hover:-translate-y-0.5"
            >
              <FileText className="size-4" aria-hidden />
              Check résumé
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="size-4" aria-hidden />
              Get in touch
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
              <ArrowUpRight
                className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </div>
        </div>

        <div className="rise shrink-0" style={delay(200)}>
          <Portrait />
        </div>
      </div>
    </section>
  );
}
