import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/Blocks";
import { PageHero } from "@/components/ui";
import { getPage, getSectionPages, pages, sectionMeta } from "@/data/pages";
import type { Page } from "@/lib/content-types";

type Params = { section: string; slug: string };

export function generateStaticParams(): Params[] {
  return pages.map((p) => ({ section: p.section, slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { section, slug } = await params;
  const page = getPage(section, slug);
  if (!page) return {};
  return { title: page.title, description: page.lede };
}

export default async function ContentPage({ params }: { params: Promise<Params> }) {
  const { section, slug } = await params;
  const page = getPage(section, slug);
  if (!page) notFound();

  const meta = sectionMeta[page.section];
  const siblings = getSectionPages(page.section as Page["section"]);

  return (
    <>
      <PageHero title={page.title} lede={page.lede} crumbs={[{ label: meta.label, href: meta.href }, { label: page.title }]} />

      <div className="container-x grid gap-14 py-16 lg:grid-cols-[1fr_17rem] lg:py-20">
        <article>
          {page.draft && process.env.NODE_ENV !== "production" && (
            <p className="mb-8 rounded-md border border-brand px-4 py-2 text-sm text-brand">
              Draft copy — to be confirmed by the school (shown in development only).
            </p>
          )}
          <Blocks blocks={page.blocks} />
        </article>

        <aside className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="font-sans text-sm font-semibold text-ink-900">{meta.label}</h2>
          <ul className="mt-3 border-l border-line">
            {siblings.map((s) => {
              const active = s.slug === page.slug;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/${s.section}/${s.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={`-ml-px block border-l-2 py-2 pl-4 text-[0.92rem] transition-colors ${
                      active
                        ? "border-brand font-semibold text-brand"
                        : "border-transparent text-ink-600 hover:border-brand hover:text-brand"
                    }`}
                  >
                    {s.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </>
  );
}
