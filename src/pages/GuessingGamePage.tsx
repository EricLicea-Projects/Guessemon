import { VStack } from "@chakra-ui/react";

import GuessInput from "../components/GuessInput";
import HintCard from "../components/HintCard";
import HintCardContainer from "@/components/HintCardContainer";
import PokeRevelation from "@/components/PokeRevelation";
import useGetPokeOfDay from "@/hooks/useGetPokeOfDay";
import useGuessHandler from "@/hooks/useGuessHandler";
import useHintStore from "@/hooks/useHintStore";
import CountdownTimer from "@/components/CountdownTimer";
import { useEffect } from "react";

const GuessingGamePage = () => {
  const { pokemonOfTheDay } = useGetPokeOfDay();
  const { submitGuess } = useGuessHandler();
  const hints = useHintStore((state) => state.hints);
  const hasWon = useHintStore((state) => state.correct);
  const resetGame = useHintStore((state) => state.reset);
  const setCurrentPokemon = useHintStore((state) => state.setCurrentPokemon);
  const storedPokemon = useHintStore((state) => state.currentPokemon);

  useEffect(() => {
    if (
      pokemonOfTheDay &&
      (!storedPokemon || storedPokemon !== pokemonOfTheDay.id)
    ) {
      resetGame();
      setCurrentPokemon(pokemonOfTheDay.id);
    }
  }, [pokemonOfTheDay, storedPokemon, resetGame, setCurrentPokemon]);

  return (
    <VStack py={4} width="100%" height="100%" justifyContent="space-between">
      <PokeRevelation
        pokemonOfTheDay={pokemonOfTheDay}
        numOfGuesses={hints.length}
      />
      {hasWon ? <CountdownTimer /> : <GuessInput onSelect={submitGuess} />}
      <HintCardContainer>
        {[...hints].reverse().map((hint, index) => (
          <HintCard key={index} hints={hint} />
        ))}
      </HintCardContainer>
    </VStack>
  );
};

export default GuessingGamePage;
