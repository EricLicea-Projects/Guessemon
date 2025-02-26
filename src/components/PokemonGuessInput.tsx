import { VStack } from "@chakra-ui/react";
import { useState } from "react";

import HintCard from "./HintCard";

import { Pokemon } from "@/data/pokemonData";
import useSendGuess from "@/hooks/useSendGuess";
import GuessInput from "./GuessInput";

const PokemonGuessInput = () => {
  const { sendGuess } = useSendGuess();

  const handleSelection = async (selected: Pokemon) => {
    console.log("User selected Pokemon ID:", selected.id);
    const result = await sendGuess(selected.id);
    console.log("Backend response:", result);
  };

  return (
    <VStack width="100%">
      <GuessInput onSelect={handleSelection} />
      <HintCard />
    </VStack>
  );
};

export default PokemonGuessInput;
