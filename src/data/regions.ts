export type RegionName =
  | "Kanto"
  | "Johto"
  | "Hoenn"
  | "Sinnoh"
  | "Unova"
  | "Kalos"
  | "Alola"
  | "Galar"
  | "Paldea";

export const GEN_TO_REGION: Record<number, RegionName> = {
  1: "Kanto",
  2: "Johto",
  3: "Hoenn",
  4: "Sinnoh",
  5: "Unova",
  6: "Kalos",
  7: "Alola",
  8: "Galar",
  9: "Paldea",
};
