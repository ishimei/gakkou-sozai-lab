import { illustrations } from "../illustrations";
import type { Illustration } from "@/types/illustration";

export const searchIndex = illustrations.map((item) => ({
  slug: item.slug,
  category: item.category,

  // 🔥 検索用テキストまとめ
  keywords: [
    item.title,
    item.description,
    item.character,
    item.emotion,
    item.pose,
    item.action,
    ...(item.tags || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase(),
}));
const map = new Map(illustrations.map((i) => [i.slug, i]));

export function searchIllustrations(query: string) {
  if (!query) return [];

  const q = query.toLowerCase().trim();

  const terms = q.split(/\s+/).filter(Boolean);

  return searchIndex
    .filter((item) => terms.every((term) => item.keywords.includes(term)))
    .map((item) => map.get(item.slug))
    .filter((item): item is Illustration => !!item);
}
