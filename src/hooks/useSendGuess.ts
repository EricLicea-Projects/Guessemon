import { useState } from "react";
import apiClient from "@/services/api-client";

export interface AttributeHint {
  is_correct: boolean;
  guess: string;
}

export interface TypesHint {
  shared: string[];
  guess: string[];
  guess_single: boolean;
  correct_single: boolean;
  both_single: boolean;
}

export interface Hints {
  id: number;
  types: TypesHint;
  color: AttributeHint;
  generation: AttributeHint;
  shape: AttributeHint;
  height: string;
  weight: string;
}

export interface PokemonResponse {
  correct: boolean;
  hints: Hints;
}

const useSendGuess = () => {
  const [guessResponse, setguessResponse] = useState<PokemonResponse>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const sendGuess = async (pokemonId: number) => {
    setLoading(true);
    setError("");
    try {
      const response = await apiClient.get<PokemonResponse>(
        `/pokemon/${pokemonId}`
      );
      setguessResponse(response.data);
      return response.data;
    } catch (err: any) {
      setError(err.message);
      return undefined;
    } finally {
      setLoading(false);
    }
  };

  return { guessResponse, error, loading, sendGuess };
};

export default useSendGuess;
