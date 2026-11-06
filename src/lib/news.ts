import newsData from "@/data/news.json";

export type NewsItem = {
  slug: string;
  date: string;
  category: "News" | "Events" | string;
  title: string;
  summary: string;
  body: string;
  draft?: boolean;
};

export const news: NewsItem[] = [...(newsData as NewsItem[])].sort((a, b) =>
  a.date < b.date ? 1 : -1,
);

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function getNews(slug: string) {
  return news.find((n) => n.slug === slug);
}
