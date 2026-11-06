"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button, Placeholder } from "@/components/ui";
import { site } from "@/data/site";

/**
 * The one orchestrated moment on the site: headline words rise, the rule
 * draws, and the photo collage settles into place.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-word]", { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.08 })
        .from("[data-hero-rule]", { scaleX: 0, duration: 0.6, transformOrigin: "left" }, "-=0.5")
        .from("[data-hero-copy]", { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.4")
        .from(
          "[data-hero-photo]",
          { y: 60, opacity: 0, rotate: (i: number) => (i === 1 ? 0 : i === 0 ? -6 : 6), duration: 1, stagger: 0.12 },
          "-=0.8",
        );
    },
    { scope: root },
  );

  const words = ["Knowledge", "is", "to", "serve."];

  return (
    <section ref={root} className="relative overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(70%_60%_at_80%_0%,var(--brand-50),transparent_70%)]"
      />
      <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div>
          <p data-hero-copy className="text-sm font-semibold text-brand-600">
            Christuraja Matriculation Higher Secondary School · Marthandam · since 1971
          </p>
          <h1 className="mt-5 text-[clamp(2.9rem,7vw,5.6rem)] leading-[0.98] text-brand-900">
            {words.map((w) => (
              <span key={w} className="inline-block overflow-hidden pb-[0.08em] pr-[0.2em] align-top">
                <span data-hero-word className="inline-block">{w}</span>
              </span>
            ))}
          </h1>
          <span data-hero-rule className="motto-rule mt-6 block" aria-hidden="true" />
          <p data-hero-copy className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            A Daughters of Mary school in the heart of Marthandam — Pre-KG to Class XII, 3,000 students,
            and more than five decades of cent percent board results. Children leave here as good human
            beings first, and professionals after.
          </p>
          <div data-hero-copy className="mt-8 flex flex-wrap gap-3">
            <Button href="/admissions">Apply for admission</Button>
            <Button href="/about/history" variant="secondary">Our story since 1971</Button>
          </div>
          <dl data-hero-copy className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
            <div>
              <dt className="text-sm text-ink-600">Founded</dt>
              <dd className="font-display text-2xl text-brand-900">1971</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-600">Students</dt>
              <dd className="font-display text-2xl text-brand-900">3,000+</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-600">Classes</dt>
              <dd className="whitespace-nowrap font-display text-2xl text-brand-900">Pre-KG to XII</dd>
            </div>
          </dl>
        </div>

        {/* Photo collage */}
        <div className="relative mx-auto h-[26rem] w-full max-w-[32rem] sm:h-[30rem] lg:h-[34rem]">
          <div data-hero-photo className="absolute left-0 top-6 w-[58%] rounded-[var(--radius-lg)] shadow-[0_30px_60px_-30px_rgba(15,31,77,0.6)] overflow-hidden">
            <Placeholder label="Morning assembly" ratio="aspect-[4/5]" />
          </div>
          <div data-hero-photo className="absolute right-0 top-0 w-[48%] rounded-[var(--radius-lg)] shadow-[0_30px_60px_-30px_rgba(15,31,77,0.6)] overflow-hidden">
            <Placeholder label="Science lab" ratio="aspect-square" />
          </div>
          <div data-hero-photo className="absolute bottom-0 right-[6%] w-[52%] rounded-[var(--radius-lg)] shadow-[0_30px_60px_-30px_rgba(15,31,77,0.6)] overflow-hidden">
            <Placeholder label="Sports Day" ratio="aspect-[4/3]" />
          </div>
          <div
            data-hero-copy
            className="absolute bottom-6 left-0 max-w-[14rem] rounded-[var(--radius-md)] border border-line bg-paper p-4 shadow-[0_20px_50px_-28px_rgba(15,31,77,0.5)]"
          >
            <p className="font-display text-3xl text-brand-900">100%</p>
            <p className="mt-1 text-sm leading-snug text-ink-600">
              Class X & XII board results, year after year, with state ranks.
            </p>
          </div>
        </div>
      </div>

      <p className="sr-only">{site.motto}</p>
    </section>
  );
}
