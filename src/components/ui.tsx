import Link from "next/link";
import type { ReactNode } from "react";
import { ImageIcon } from "lucide-react";

/** Photo placeholder. Replace with <Image> once the school supplies photos. */
export function Placeholder({
  label,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div className={`ph ${ratio} ${className}`} role="img" aria-label={`${label} (photo placeholder)`}>
      <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[0.72rem] font-medium text-white backdrop-blur">
        <ImageIcon size={12} aria-hidden="true" />
        {label}
      </div>
    </div>
  );
}

export function SectionTitle({
  title,
  lede,
  align = "left",
  onDark = false,
}: {
  title: string;
  lede?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="motto-rule" aria-hidden="true" />
      <h2 className={`mt-4 text-[clamp(1.9rem,3.6vw,2.75rem)] ${onDark ? "text-white" : "text-brand-900"}`}>
        {title}
      </h2>
      {lede && (
        <p className={`mt-4 text-lg leading-relaxed ${onDark ? "text-white/75" : "text-ink-600"}`}>{lede}</p>
      )}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  className?: string;
}) {
  const styles = {
    primary: "bg-brand-600 text-white hover:bg-brand-700",
    secondary: "border border-brand-600 text-brand-700 hover:bg-brand-50",
    ghost: "border border-white/30 text-white hover:bg-white/10",
    onDark: "bg-brand-500 text-white hover:bg-brand-100 hover:text-brand-900",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

export function PageHero({
  title,
  lede,
  crumbs,
}: {
  title: string;
  lede?: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-brand-500/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
      />
      <div className="container-x relative py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="text-sm text-white/65">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {c.href && i < crumbs.length - 1 ? (
                  <Link href={c.href} className="hover:text-white">{c.label}</Link>
                ) : (
                  <span aria-current="page" className="text-white">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-6 max-w-3xl text-[clamp(2.2rem,5vw,3.75rem)]">{title}</h1>
        {lede && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{lede}</p>}
      </div>
    </section>
  );
}
