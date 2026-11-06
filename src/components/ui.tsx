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
      <h2 className={`mt-4 text-[clamp(1.9rem,3.6vw,2.75rem)] ${onDark ? "text-white" : "text-brand"}`}>
        {title}
      </h2>
      {lede && (
        <p className={`mt-4 text-lg leading-relaxed ${onDark ? "text-white" : "text-ink-600"}`}>{lede}</p>
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
    primary: "border border-brand bg-brand text-white hover:bg-white hover:text-brand",
    secondary: "border border-brand text-brand hover:bg-brand hover:underline",
    ghost: "border border-white text-white hover:bg-white hover:text-brand",
    onDark: "border border-white bg-white text-brand hover:bg-transparent hover:underline",
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
    <section className="relative overflow-hidden bg-brand text-white">
      <div className="container-x relative py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="text-sm text-white">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {c.href && i < crumbs.length - 1 ? (
                  <Link href={c.href} className="hover:underline">{c.label}</Link>
                ) : (
                  <span aria-current="page" className="text-white">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-6 max-w-3xl text-[clamp(2.2rem,5vw,3.75rem)]">{title}</h1>
        {lede && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white">{lede}</p>}
      </div>
    </section>
  );
}
