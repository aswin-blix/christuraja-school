import Link from "next/link";
import type { Block } from "@/lib/content-types";
import { Placeholder } from "./ui";
import { Timeline } from "./Timeline";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-12">
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "heading":
      return <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] text-brand-900">{block.text}</h2>;

    case "paragraphs":
      return (
        <div className="prose-school">
          {block.text.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
      );

    case "list":
      return (
        <ul className={`grid gap-3 ${block.columns === 2 ? "md:grid-cols-2" : ""}`}>
          {block.items.map((it) => (
            <li key={it} className="flex gap-3 text-[1.02rem] leading-relaxed text-ink-600">
              <span aria-hidden="true" className="mt-[0.7em] h-2 w-2 shrink-0 rounded-full bg-gold-500" />
              {it}
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-[var(--radius-md)] border border-line">
          <table className="w-full min-w-[28rem] text-left text-[0.98rem]">
            {block.caption && (
              <caption className="bg-paper-tint px-5 py-3 text-left font-sans text-sm font-semibold text-brand-900">
                {block.caption}
              </caption>
            )}
            <thead className="bg-brand-50 text-sm text-brand-900">
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col" className="px-5 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {block.rows.map((r, i) => (
                <tr key={i} className="odd:bg-paper even:bg-paper-tint/60">
                  {r.map((c, j) => (
                    <td key={j} className={`px-5 py-3 ${j === 0 ? "font-medium text-ink-900" : "text-ink-600"}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "cards":
      return (
        <div className={`grid gap-5 ${block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {block.items.map((c) => (
            <div key={c.title} className="rounded-[var(--radius-md)] border border-line bg-paper p-6">
              <h3 className="font-sans text-[1.05rem] font-semibold text-brand-900">{c.title}</h3>
              {c.text && <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-600">{c.text}</p>}
              {c.items && (
                <ul className="mt-3 space-y-2">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[0.95rem] leading-snug text-ink-600">
                      <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      );

    case "people":
      return (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((p, i) => (
            <li key={`${p.name}-${i}`} className="flex gap-4 rounded-[var(--radius-md)] border border-line bg-paper p-5">
              <div className="ph h-16 w-16 shrink-0 rounded-full" aria-hidden="true" />
              <div>
                <p className="font-sans font-semibold text-ink-900">{p.name}</p>
                <p className="text-sm text-brand-600">{p.role}</p>
                {p.note && <p className="mt-1.5 text-sm leading-snug text-ink-600">{p.note}</p>}
              </div>
            </li>
          ))}
        </ul>
      );

    case "timeline":
      return <Timeline items={block.items} />;

    case "quote":
      return (
        <blockquote className="border-l-4 border-gold-500 pl-6">
          <p className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-snug text-brand-900">“{block.text}”</p>
          {block.by && <footer className="mt-3 text-ink-600">{block.by}</footer>}
        </blockquote>
      );

    case "acrostic":
      return (
        <ol className="grid grid-cols-7 gap-2 sm:gap-3">
          {block.word.split("").map((ch, i) => (
            <li key={i} className="rounded-[var(--radius-sm)] bg-brand-900 p-2 text-center text-white sm:p-4">
              <span className="block font-display text-[clamp(1.4rem,4vw,2.6rem)] text-gold-400">{ch}</span>
              <span className="mt-1 block text-[0.6rem] leading-tight sm:text-xs">{block.meanings[i]}</span>
            </li>
          ))}
        </ol>
      );

    case "verse":
      return (
        <div className="rounded-[var(--radius-lg)] bg-paper-tint px-8 py-10 md:px-14">
          <p className="font-display text-[clamp(1.15rem,2vw,1.45rem)] leading-[1.8] text-brand-900">
            {block.lines.map((l, i) => (
              <span key={i} className="block">{l}</span>
            ))}
          </p>
        </div>
      );

    case "imageGrid":
      return (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {block.labels.map((l) => (
            <Placeholder key={l} label={l} className="rounded-[var(--radius-md)]" />
          ))}
        </div>
      );

    case "callout":
      return (
        <div className="flex flex-col gap-5 rounded-[var(--radius-lg)] bg-brand-600 p-8 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl">{block.title}</h3>
            <p className="mt-2 max-w-xl text-white/85">{block.text}</p>
          </div>
          {block.href && (
            <Link
              href={block.href}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-gold-500 px-6 py-3 font-semibold text-brand-900 hover:bg-gold-400"
            >
              {block.cta ?? "Learn more"}
            </Link>
          )}
        </div>
      );
  }
}
