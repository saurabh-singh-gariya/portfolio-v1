import { FileText } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm transition-colors hover:text-accent">
          saurabh<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-2 sm:gap-5">
          <ul className="hidden items-center gap-5 text-sm sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted transition-colors hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            <FileText className="size-3.5" aria-hidden />
            Résumé
          </a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
