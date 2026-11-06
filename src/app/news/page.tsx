import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { formatDate, news } from "@/lib/news";

export const metadata: Metadata = {
  title: "News and events",
  description: "Announcements, competitions and events at Christuraja MHSS, Marthandam.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News and events"
        lede="Announcements, competitions and celebrations from the Christuraja campus."
        crumbs={[{ label: "News & events" }]}
      />
      <div className="container-x py-16 lg:py-20">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <li key={n.slug}>
              <Link
                href={`/news/${n.slug}`}
                className="group flex h-full flex-col rounded-[var(--radius-md)] border border-line bg-paper p-6 transition-colors hover:border-brand-500 hover:bg-brand-50"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-brand-600">{n.category}</span>
                  <time dateTime={n.date} className="text-ink-600">{formatDate(n.date)}</time>
                </div>
                <h2 className="mt-4 font-sans text-lg font-semibold leading-snug text-ink-900 group-hover:text-brand-700">{n.title}</h2>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">{n.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
