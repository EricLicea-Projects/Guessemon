import { VStack } from "@chakra-ui/react";

import GuessInput from "../components/GuessInput";
import PokeRevelation from "@/components/PokeRevelation";
import useGetPokeOfDay from "@/hooks/useGetPokeOfDay";
import useGuessHandler from "@/hooks/useGuessHandler";
import useHintStore from "@/hooks/useHintStore";
import CountdownTimer from "@/components/CountdownTimer";
import { useEffect } from "react";
import PokeballHintGrid from "@/components/PokeballHintGrid";
import HintCard from "@/components/HintCard";

const GuessingGamePage = () => {
  const { pokemonOfTheDay } = useGetPokeOfDay();
  const { submitGuess } = useGuessHandler();
  const hints = useHintStore((state) => state.hints);
  const hasWon = useHintStore((state) => state.correct);
  const resetGame = useHintStore((state) => state.reset);
  const setCurrentPokemon = useHintStore((state) => state.setCurrentPokemon);
  const storedPokemon = useHintStore((state) => state.currentPokemon);
  const hasLost = !hasWon && hints.length > 5;
  const gameOver = hasWon || hasLost;

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
    <VStack
      pt={{ base: 3, md: 4, lg: 5 }}
      width="100%"
      height="100%"
      spacing={{ base: 4, md: 5, lg: 6 }}
    >
      <PokeRevelation
        pokemonOfTheDay={pokemonOfTheDay}
        numOfGuesses={hints.length}
        gameOver={gameOver}
      />
      {hasWon || hasLost ? (
        <CountdownTimer gameStatus={hasWon ? "won" : "lost"} />
      ) : (
        <GuessInput onSelect={submitGuess} />
      )}
      <PokeballHintGrid />
      <HintCard />
    </VStack>
  );
};

export default GuessingGamePage;
