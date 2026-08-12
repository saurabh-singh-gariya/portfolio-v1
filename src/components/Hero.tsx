import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import type { CSSProperties } from 'react';
import { profile } from '../data/profile';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { Portrait } from './Portrait';

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" className="py-16 sm:py-24">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p
            className="rise flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] text-accent uppercase"
            style={delay(0)}
          >
            <MapPin className="size-3.5" aria-hidden />
            {profile.location}
          </p>

          <h1
            className="rise mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            style={delay(80)}
          >
            {profile.name}
          </h1>

          <p className="rise mt-3 text-lg sm:text-xl" style={delay(160)}>
            {profile.title}
            <span className="text-muted"> — {profile.tagline}</span>
          </p>
        </div>

        <div className="rise" style={delay(120)}>
          <Portrait />
        </div>
      </div>

      <p className="rise mt-6 max-w-xl leading-relaxed text-muted text-pretty" style={delay(240)}>
        {profile.summary}
      </p>

      <div className="rise mt-9 flex flex-wrap gap-3" style={delay(320)}>
        <a
          href={`mailto:${profile.email}`}
          className="group flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
        >
          <Mail className="size-4" aria-hidden />
          Get in touch
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          <LinkedInIcon className="size-4" />
          LinkedIn
          <ArrowUpRight
            className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </a>
      </div>
    </section>
  );
}
