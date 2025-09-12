import { useMemo } from "react";
import type { Pokemon } from "@/data/pokemonData";

export const usePokemonSuggestions = (
  query: string,
  data: Pokemon[],
  maxResults = 10
) =>
  useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const starts: Pokemon[] = [];
    const includes: Pokemon[] = [];

    for (const p of data) {
      const nameLower = p.name.toLowerCase();
      if (nameLower.startsWith(q)) {
        starts.push(p);
      } else if (nameLower.includes(q)) {
        includes.push(p);
      }
    }

    return [...starts, ...includes].slice(0, maxResults);
  }, [query, data, maxResults]);
