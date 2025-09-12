import { useMutation } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import useHintStore, { Hints } from "./useHintStore";

import { Pokemon } from "@/data/pokemonData";

export interface PokemonResponse {
  correct: boolean;
  hints: Hints;
}

const useGuessHandler = () => {
  const addHint = useHintStore((state) => state.addHint);
  const setCorrect = useHintStore((state) => state.setCorrect);

  const mutation = useMutation<PokemonResponse, Error, number>({
    mutationFn: (pokemonId: number) =>
      apiClient
        .post<PokemonResponse>(`/api/v1/guesses/${pokemonId}`)
        .then((res) => res.data),
    onSuccess: (data: PokemonResponse) => {
      addHint(data.hints);
      setCorrect(data.correct);
    },
    onError: (error) => {
      console.error("Error sending guess:", error);
    },
  });

  const submitGuess = (pokemon: Pokemon) => {
    if (mutation.isPending) return;
    mutation.mutate(pokemon.id);
  };

  return {
    submitGuess,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};

export default useGuessHandler;
