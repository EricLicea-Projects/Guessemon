import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface PokeOfTheDay {
  id: number;
  name: string;
  flavor_text: string;
}

const useGetPokeOfDay = () => {
  const query = useQuery({
    queryKey: ["pokemonOfTheDay"],
    queryFn: () =>
      apiClient
        .get<PokeOfTheDay>("api/v1/pokemon_of_day")
        .then((res) => res.data),
    initialData: null,
  });

  return {
    ...query,
    pokemonOfTheDay: query.data,
  };
};

export default useGetPokeOfDay;
