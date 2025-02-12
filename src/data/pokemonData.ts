import pokemon151 from "./pokemon151.json";

export interface Pokemon {
  id: number;
  name: string;
}

export const pokemonList: Pokemon[] = Object.entries(pokemon151).map(
  ([key, name]) => ({
    id: Number(key),
    name: name as string,
  })
);
