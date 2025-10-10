import { useEffect } from "react";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import useHintStore from "@/hooks/useHintStore";

export interface PokeOfTheDay {
  id: number;
  name: string;
  flavor_text: string;
  height: number;
  weight: number;
}

const useGetPokeOfDay = () => {
  const query = useQuery<PokeOfTheDay>({
    queryKey: ["pokemonOfTheDay"],
    queryFn: ({ signal }) =>
      apiClient
        .get<PokeOfTheDay>("/api/v1/pokemon_of_day", { signal })
        .then((res) => res.data),

    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (!query.data) return;

    const hintStore = useHintStore.getState();
    if (hintStore.currentPokemon !== query.data.id) {
      hintStore.reset();
      hintStore.setCurrentPokemon(query.data.id);
    }
  }, [query.data]);

  return { ...query, pokemonOfTheDay: query.data };
};

export default useGetPokeOfDay;
