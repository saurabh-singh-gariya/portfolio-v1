import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name} — built with React, TypeScript and Tailwind.
      </p>
    </footer>
  );
}
