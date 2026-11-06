import type { Metadata } from "next";
import { Play } from "lucide-react";
import { PageHero, Placeholder } from "@/components/ui";
import gallery from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and videos from the Christuraja MHSS campus, Marthandam.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        lede="A look around the campus — classrooms, laboratories, celebrations and sports days."
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="container-x py-16 lg:py-20">
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] text-brand-900">Photo albums</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.albums.map((a) => (
            <li key={a.slug} className="group">
              <div className="overflow-hidden rounded-[var(--radius-md)]">
                <Placeholder label={a.title} ratio="aspect-[4/3]" className="transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <h3 className="font-sans text-lg font-semibold text-ink-900">{a.title}</h3>
                <span className="text-sm text-ink-600">{a.count} photos</span>
              </div>
              <p className="mt-1 text-[0.95rem] text-ink-600">{a.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-brand-900 py-16 text-white lg:py-20">
        <div className="container-x">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">Campus tour videos</h2>
          <p className="mt-3 max-w-xl text-white/75">Short walk-throughs of the blocks, labs, library and grounds.</p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.videos.map((v) => (
              <li key={v.title} className="relative overflow-hidden rounded-[var(--radius-md)]">
                <Placeholder label={v.title} ratio="aspect-video" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-brand-900 shadow-lg">
                    <Play size={22} className="ml-0.5" aria-hidden="true" />
                  </span>
                </span>
                <span className="absolute right-3 top-3 rounded bg-brand-900/70 px-2 py-0.5 text-xs">{v.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
