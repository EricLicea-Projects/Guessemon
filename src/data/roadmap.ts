export type RoadmapStatus = "in-progress" | "planned" | "idea";

export interface RoadmapItem {
  key: string;
  title: string;
  description: string;
}

export const ROADMAP: RoadmapItem[] = [
  {
    key: "targeted-search",
    title: "Targeted Search",
    description:
      "Targeted Search lets you find Pokemon by type, region, color, or shape",
  },
  {
    key: "pokécalendar",
    title: "PokéCalendar",
    description:
      "History Calendar shows every Pokémon of the Day. Jump to any date to revisit past answers.",
  },
  {
    key: "wild-encounter",
    title: "Wild Encounter",
    description:
      "Instanced, seed-based encounters assign each user a unique target.",
  },
];

export default ROADMAP;
