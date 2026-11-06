import Link from "next/link";
import {
  Beaker,
  BookOpen,
  Bus,
  Dumbbell,
  GraduationCap,
  Laptop,
  Music,
  Users,
} from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Reveal } from "@/components/Reveal";
import { Button, Placeholder, SectionTitle } from "@/components/ui";
import { news, formatDate } from "@/lib/news";
import { site } from "@/data/site";

const why = [
  { icon: Beaker, title: "Hi-tech laboratories", text: "Physics, Chemistry, Botany, Zoology, Computer, Maths and Language labs for hands-on learning.", href: "/about/infrastructure" },
  { icon: GraduationCap, title: "Results that last", text: "Cent percent in Class X and XII year after year, with zonal, district and state ranks.", href: "/academics/curriculum" },
  { icon: Users, title: "Experienced faculty", text: "Teachers who know every child by name and stay with them through the board years.", href: "/academics/faculties" },
  { icon: Laptop, title: "E-campus", text: "A web-based learning system with teaching and learning resources for every class.", href: "/facilities/salient-features" },
  { icon: Dumbbell, title: "Sport for everyone", text: "Volleyball, basketball, shuttle, table tennis, chess, athletics and inter-house meets.", href: "/facilities/sports-music" },
  { icon: Music, title: "Music & dance from LKG", text: "Vocal, guitar, keyboard, classical, western and cinematic dance.", href: "/facilities/sports-music" },
  { icon: BookOpen, title: "Computerised library", text: "2,000+ books, journals, magazines and daily newspapers.", href: "/about/infrastructure" },
  { icon: Bus, title: "Safe campus & transport", text: "CCTV, security at the gates, and buses across Marthandam and nearby villages.", href: "/facilities/medical-transport" },
];

const levels = [
  { name: "Kindergarten", classes: "Pre-KG · LKG · UKG", text: "Play-based learning, music and dance from the very first year." },
  { name: "Primary", classes: "Standards I – V", text: "Strong foundations in English, Tamil, mathematics and science, with the literary association and clubs." },
  { name: "Middle school", classes: "Standards VI – VIII", text: "Labs, projects, aptitude tests and the first inter-school competitions." },
  { name: "High school", classes: "Standards IX – X", text: "Focused board preparation with weekly, monthly and term tests." },
  { name: "Higher secondary", classes: "Standards XI – XII", text: "Maths–Computer Science, Maths–Biology and Pure Science groups." },
];

export default function HomePage() {
  const latest = news.slice(0, 3);

  return (
    <>
      <Hero />

      {/* News ticker */}
      <div className="border-y border-line bg-paper-tint">
        <div className="container-x flex items-center gap-6 overflow-hidden py-3 text-sm">
          <span className="shrink-0 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">Latest</span>
          <div className="relative flex-1 overflow-hidden">
            <div className="marquee flex w-max gap-12">
              {[...latest, ...latest].map((n, i) => (
                <Link key={`${n.slug}-${i}`} href={`/news/${n.slug}`} className="whitespace-nowrap text-ink-600 hover:text-brand">
                  <span className="text-brand">{formatDate(n.date)}</span> — {n.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionTitle
              title="On 10 August 1971, twenty-three children started our journey."
              lede="The Christuraja Matriculation and Higher Secondary School was founded by the D.M. Convent of St. Joseph's Province to serve children drawn mainly from the rural society around Marthandam."
            />
            <div className="prose-school mt-6">
              <p>
                In fifty-five years the school has grown more than a hundredfold, and has produced civil servants,
                doctors, scientists, journalists, engineers, teachers, professors and business people spread across
                the globe. Above all, it has produced citizens who cherish human values.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about/history" variant="secondary">Read the full history</Button>
              <Button href="/about/principal-desk" variant="secondary">Principal&apos;s message</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <Placeholder label="The campus at Christurajapuram" ratio="aspect-[5/4]" className="rounded-[var(--radius-lg)]" />
            <div className="absolute -bottom-6 right-4 max-w-[22rem] rounded-[var(--radius-md)] border-2 border-white bg-brand p-5 text-white shadow-xl sm:-right-6">
              <p className="text-sm text-white">Four blocks named after</p>
              <ul className="mt-1 font-display text-lg leading-snug">
                {["St. Francis of Assisi", "Msgr. Joseph Kuzhinjalil", "Mother Mary Kallarackal", "St. Little Therese"].map((b) => (
                  <li key={b} className="whitespace-nowrap">{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />

      {/* Why Christuraja */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              title="Why families choose Christuraja"
              lede="Everything a child needs to learn well — in one campus, under one motto."
            />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={Math.min(i * 0.05, 0.3)}>
                <li className="h-full">
                  <Link
                    href={w.href}
                    className="group flex h-full flex-col rounded-[var(--radius-md)] border border-line bg-paper p-6 transition-colors hover:border-brand"
                  >
                    <w.icon className="h-7 w-7 text-brand" aria-hidden="true" />
                    <h3 className="mt-5 font-sans text-[1.05rem] font-semibold text-ink-900">{w.title}</h3>
                    <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-600">{w.text}</p>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Levels */}
      <section className="bg-brand py-20 text-white md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              onDark
              title="Pre-KG to Class XII, in five levels"
              lede="Each level has its own rhythm of tests, prizes and activities, and every child is known by name as they move up."
            />
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-lg)] bg-white md:grid-cols-5">
            {levels.map((l, i) => (
              <li key={l.name} className="bg-brand p-6">
                <span className="font-display text-sm text-white">Level {["I", "II", "III", "IV", "V"][i]}</span>
                <h3 className="mt-3 text-xl">{l.name}</h3>
                <p className="mt-1 text-sm font-medium text-white">{l.classes}</p>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-white">{l.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Button href="/academics/curriculum" variant="onDark">See the curriculum and grading</Button>
          </div>
        </div>
      </section>

      {/* Principal */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[2fr_3fr]">
          <Reveal>
            <Placeholder label="Rev. Sr. Preema Kurian D.M." ratio="aspect-[4/5]" className="rounded-[var(--radius-lg)] max-w-sm" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="motto-rule" aria-hidden="true" />
            <blockquote className="mt-6">
              <p className="font-display text-[clamp(1.5rem,2.6vw,2.1rem)] leading-snug text-brand">
                “Our school takes students on a voyage of discovery towards excellence. It strives first to make good
                human beings, and then professionals — that is our priority.”
              </p>
              <footer className="mt-6 text-ink-600">
                <strong className="font-semibold text-ink-900">Rev. Sr. Preema Kurian D.M.</strong> · Principal, ninth in a
                line of Daughters of Mary since 1971
              </footer>
            </blockquote>
            <div className="mt-8">
              <Button href="/about/principal-desk" variant="secondary">Read the full message</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* News + gallery */}
      <section className="bg-paper-tint py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[3fr_2fr]">
          <div>
            <Reveal>
              <SectionTitle title="News and events" />
            </Reveal>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {latest.map((n) => (
                <li key={n.slug}>
                  <Link href={`/news/${n.slug}`} className="group grid gap-2 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
                    <time dateTime={n.date} className="text-sm text-ink-600">{formatDate(n.date)}</time>
                    <div>
                      <span className="text-xs font-semibold text-brand">{n.category}</span>
                      <h3 className="mt-1 font-sans text-lg font-semibold text-ink-900 group-hover:text-brand">{n.title}</h3>
                      <p className="mt-1 text-[0.95rem] text-ink-600">{n.summary}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/news" variant="secondary">All news and events</Button>
            </div>
          </div>
          <div>
            <Reveal>
              <SectionTitle title="Life on campus" />
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <Placeholder label="Annual Day" ratio="aspect-square" className="rounded-[var(--radius-md)]" />
              <Placeholder label="Chemistry lab" ratio="aspect-square" className="rounded-[var(--radius-md)]" />
              <Placeholder label="Kindergarten" ratio="aspect-square" className="rounded-[var(--radius-md)]" />
              <Placeholder label="Scouts & Guides" ratio="aspect-square" className="rounded-[var(--radius-md)]" />
            </div>
            <div className="mt-6">
              <Button href="/gallery" variant="secondary">Open the gallery</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-brand px-8 py-14 text-white md:px-16 md:py-20">
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)]">Admissions for 2026–27 are open</h2>
                <p className="mt-4 max-w-xl text-lg text-white">
                  Pre-KG to Standard IX and Standard XI. The academic year begins in June. Admission is open to all,
                  irrespective of caste, creed or status.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/admissions" variant="onDark">Apply online</Button>
                <Button href={site.phoneHref} variant="ghost">Call {site.phone}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
