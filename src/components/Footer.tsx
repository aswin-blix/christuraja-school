import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

function Facebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.3h2.8V22h3.4z" />
    </svg>
  );
}

function Youtube({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
    </svg>
  );
}
import { nav, site } from "@/data/site";
import { Logo } from "./Logo";
import { Year } from "./Year";

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo onDark />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed">
            Founded on {site.founded} by the {site.management}. From 23 children to more than 3,000 —
            still growing, still serving.
          </p>
          <p className="mt-6 font-display text-xl text-brand-100">“{site.motto}”</p>
          <div className="mt-6 flex gap-3">
            <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-brand-100 hover:text-brand-100">
              <Facebook size={18} />
            </a>
            <a href={site.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-brand-100 hover:text-brand-100">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <FooterCol title="About" links={nav[0].children!} />
        <FooterCol
          title="Quick links"
          links={[
            { label: "Admission policy", href: "/academics/admission-policy" },
            { label: "Apply online", href: "/admissions" },
            { label: "Curriculum", href: "/academics/curriculum" },
            { label: "School timing", href: "/academics/timing-anthem" },
            { label: "News & events", href: "/news" },
            { label: "Gallery", href: "/gallery" },
            { label: "Alumni association", href: "/alumni" },
          ]}
        />

        <div>
          <h3 className="font-sans text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-[0.95rem]">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-100" aria-hidden="true" />
              <span>
                {site.name}
                <br />
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-brand-100" aria-hidden="true" />
              <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-brand-100" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a>
            </li>
          </ul>
          <p className="mt-5 text-sm text-white/60">
            Mon–Fri {site.timings.weekdays}
            <br />
            Sat {site.timings.saturday}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© <Year /> {site.name}, Marthandam. All rights reserved.</p>
          <p>
            <a href={site.staffLogin} target="_blank" rel="noreferrer" className="hover:text-white">Staff login</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-sans text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-[0.95rem]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
