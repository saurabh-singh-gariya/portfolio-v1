import { profile } from '../data/profile';

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('');

export function Portrait() {
  return (
    <div className="relative shrink-0">
      <div aria-hidden className="glow absolute -inset-10 rounded-full" />

      <div className="relative grid size-52 place-items-center overflow-hidden rounded-full border-2 border-accent/40 bg-surface sm:size-72">
        <span
          aria-hidden
          className="bg-gradient-to-br from-accent to-accent/40 bg-clip-text pt-1 text-6xl font-extrabold tracking-tight text-transparent select-none sm:text-8xl"
        >
          {initials}
        </span>
      </div>

      {/* Photo is parked, not deleted. Restore by swapping this in for the monogram above:
      <div className="relative size-52 overflow-hidden rounded-full border-2 border-accent/40 sm:size-72">
        <img
          src="/portrait.webp"
          alt={profile.name}
          width={288}
          height={288}
          className="size-full origin-center -translate-x-[6%] scale-115 object-cover"
        />
      </div>
      */}
    </div>
  );
}
