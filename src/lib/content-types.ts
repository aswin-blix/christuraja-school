export type Block =
  | { type: "paragraphs"; text: string[] }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[]; columns?: 1 | 2 }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | {
      type: "cards";
      items: { title: string; text?: string; items?: string[] }[];
    }
  | {
      type: "people";
      items: { name: string; role: string; note?: string }[];
    }
  | {
      type: "timeline";
      items: { year: string; title: string; text?: string }[];
    }
  | { type: "quote"; text: string; by?: string }
  | { type: "acrostic"; word: string; meanings: string[] }
  | { type: "verse"; lines: string[] }
  | { type: "imageGrid"; labels: string[] }
  | { type: "callout"; title: string; text: string; href?: string; cta?: string };

export type Page = {
  section: "about" | "academics" | "facilities";
  slug: string;
  title: string;
  lede: string;
  /** Copy written for the redesign and not yet confirmed by the school. */
  draft?: boolean;
  blocks: Block[];
};
