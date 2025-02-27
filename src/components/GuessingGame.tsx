import { VStack } from "@chakra-ui/react";
import { useState } from "react";

import HintCard from "./HintCard";

import { Pokemon } from "@/data/pokemonData";
import useSendGuess, { Hints, PokemonResponse } from "@/hooks/useSendGuess";
import GuessInput from "./GuessInput";

const GuessingGame = () => {
  const { sendGuess } = useSendGuess();
  const [hints, setHints] = useState<Hints[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const handleSelection = async (selected: Pokemon) => {
    console.log("User selected Pokemon ID:", selected.id);
    const result: PokemonResponse | undefined = await sendGuess(selected.id);
    if (!result) return;

    console.log("Backend response:", result);

    if (result.correct) {
      setGameOver(true);
      return;
    }
    setHints((prevHints) => [...prevHints, result.hints]);
  };

  return (
    <VStack width="100%">
      <GuessInput onSelect={handleSelection} />
      {hints.map((hints, index) => (
        <HintCard key={index} hints={hints} />
      ))}
    </VStack>
  );
};

export default GuessingGame;
