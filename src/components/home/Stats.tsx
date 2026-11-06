"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function Stats() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const els = gsap.utils.toArray<HTMLElement>("[data-count]");
      els.forEach((el) => {
        const target = Number(el.dataset.count);
        if (reduce) {
          el.textContent = target.toLocaleString("en-IN");
          return;
        }
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toLocaleString("en-IN");
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="container-x">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line lg:grid-cols-4">
        {site.stats.map((s) => (
          <div key={s.label} className="bg-paper px-6 py-8 sm:px-8">
            <dd className="font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-brand-900">
              <span data-count={s.value}>0</span>
              <span className="text-brand-500">{s.suffix}</span>
            </dd>
            <dt className="mt-2 text-sm text-ink-600">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
