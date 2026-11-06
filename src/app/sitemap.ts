import type { MetadataRoute } from "next";
import { pages } from "@/data/pages";
import { news } from "@/lib/news";

const base = "https://www.christurajamhss.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/admissions", "/news", "/gallery", "/alumni", "/contact"];
  return [
    ...fixed.map((p) => ({ url: `${base}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...pages.map((p) => ({ url: `${base}/${p.section}/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
    ...news.map((n) => ({ url: `${base}/news/${n.slug}`, lastModified: new Date(n.date), changeFrequency: "yearly" as const, priority: 0.4 })),
  ];
}
