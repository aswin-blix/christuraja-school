import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

/* Self-hosted variable fonts (Fraunces "soft" axis, Manrope) — no runtime request to Google. */
const fraunces = localFont({
  src: [
    { path: "../fonts/fraunces-latin-soft-normal.woff2", style: "normal" },
    { path: "../fonts/fraunces-latin-soft-italic.woff2", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = localFont({
  src: "../fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.christurajamhss.com"),
  title: {
    default: `${site.name}, Marthandam`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Christuraja Matriculation Higher Secondary School, Marthandam — founded in 1971 by the Daughters of Mary. Pre-KG to Class XII, 3,000+ students, consistent state-board results. Motto: Knowledge is to serve.",
  keywords: [
    "Christuraja Matriculation Higher Secondary School",
    "CMHSS Marthandam",
    "school in Marthandam",
    "matriculation school Kanyakumari",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.shortName,
    title: `${site.name}, Marthandam`,
    description: "Founded 1971. Pre-KG to Class XII. Knowledge is to serve.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
