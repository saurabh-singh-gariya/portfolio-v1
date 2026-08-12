import { useState } from 'react';
import { profile } from '../data/profile';

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('');

export function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative shrink-0">
      <div aria-hidden className="glow absolute -inset-6 rounded-full" />
      {failed ? (
        <div
          aria-hidden
          className="relative grid size-28 place-items-center rounded-full border border-line bg-surface font-mono text-2xl text-accent sm:size-32"
        >
          {initials}
        </div>
      ) : (
        <img
          src="/portrait.jpg"
          alt={profile.name}
          width={128}
          height={128}
          onError={() => setFailed(true)}
          className="relative size-28 rounded-full border border-line object-cover sm:size-32"
        />
      )}
    </div>
  );
}
