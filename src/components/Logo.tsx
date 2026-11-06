import Link from "next/link";
import { site } from "@/data/site";

/**
 * Text + emblem logo. Replace the <svg> with the school's crest
 * (public/images/logo.png) once supplied — keep the Link wrapper.
 */
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.shortName} home`}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M22 2 40 9v12c0 10-7.6 17.5-18 21C11.6 38.5 4 31 4 21V9z"
          fill={onDark ? "#ffffff" : "var(--brand-600)"}
        />
        <path
          d="M22 6.5 36 12v9c0 8-5.9 14-14 17-8.1-3-14-9-14-17v-9z"
          fill={onDark ? "var(--brand-900)" : "#ffffff"}
          opacity={onDark ? 1 : 0.14}
        />
        <path d="M20.6 13h2.8v6h6v2.8h-6v9h-2.8v-9h-6V19h6z" fill="var(--gold-500)" />
      </svg>
      <span className="whitespace-nowrap leading-tight">
        <span
          className={`block font-display text-[1.05rem] font-semibold tracking-tight ${
            onDark ? "text-white" : "text-brand-900"
          }`}
        >
          Christuraja
        </span>
        <span
          className={`block text-[0.68rem] font-medium tracking-wide ${
            onDark ? "text-white/70" : "text-ink-600"
          }`}
        >
          Matric. Hr. Sec. School · Marthandam
        </span>
      </span>
    </Link>
  );
}
