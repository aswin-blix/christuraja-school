"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/** Vertical timeline whose blue line draws as the reader scrolls. */
export function Timeline({ items }: { items: { year: string; title: string; text?: string }[] }) {
  const root = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        "[data-line]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 70%", scrub: true },
        },
      );
      gsap.utils.toArray<HTMLElement>("[data-item]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: -16,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <ol ref={root} className="relative ml-3 border-l border-line pl-8 sm:ml-6 sm:pl-12">
      <span data-line aria-hidden="true" className="absolute -left-px top-0 h-full w-0.5 bg-brand" />
      {items.map((it) => (
        <li key={`${it.year}-${it.title}`} data-item className="relative pb-10 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-[2.55rem] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-brand bg-paper sm:-left-[3.55rem]"
          />
          <p className="font-display text-xl text-brand">{it.year}</p>
          <h3 className="mt-1 font-sans text-lg font-semibold text-ink-900">{it.title}</h3>
          {it.text && <p className="mt-1.5 max-w-xl leading-relaxed text-ink-600">{it.text}</p>}
        </li>
      ))}
    </ol>
  );
}
