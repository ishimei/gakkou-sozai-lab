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
  const words = query.toLowerCase().trim().split(" ");

  return searchIndex
    .filter((item) => words.every((w) => item.keywords.includes(w)))
    .map((item) => map.get(item.slug))
    .filter((item): item is Illustration => !!item);
}
