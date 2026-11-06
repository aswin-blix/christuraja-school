import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui";
import { formatDate, getNews, news } from "@/lib/news";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const item = getNews((await params).slug);
  return item ? { title: item.title, description: item.summary } : {};
}

export default async function NewsItemPage({ params }: { params: Promise<Params> }) {
  const item = getNews((await params).slug);
  if (!item) notFound();

  const others = news.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <>
      <PageHero title={item.title} crumbs={[{ label: "News & events", href: "/news" }, { label: item.title }]} />
      <div className="container-x grid gap-14 py-16 lg:grid-cols-[1fr_17rem] lg:py-20">
        <article>
          <p className="text-sm text-ink-600">
            <span className="font-semibold text-brand">{item.category}</span> ·{" "}
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </p>
          <div className="prose-school mt-6">
            <p className="text-ink-900 text-xl leading-relaxed">{item.summary}</p>
            <p>{item.body}</p>
          </div>
        </article>
        <aside>
          <h2 className="font-sans text-sm font-semibold text-ink-900">More news</h2>
          <ul className="mt-3 space-y-4">
            {others.map((n) => (
              <li key={n.slug}>
                <Link href={`/news/${n.slug}`} className="block text-[0.95rem] leading-snug text-ink-600 hover:text-brand">
                  <time dateTime={n.date} className="block text-xs text-ink-400">{formatDate(n.date)}</time>
                  {n.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}
