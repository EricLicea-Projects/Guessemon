import { VStack } from "@chakra-ui/react";
import { useShallow } from "zustand/shallow";

import HintCard from "@/components/hintCard/HintCard";
import GuessInput from "../components/GuessInput";
import CountdownTimer from "@/components/CountdownTimer";
import PokeRevelation from "@/components/PokeRevelation";
import PokeballHintGrid from "@/components/PokeballHintGrid";

import useGuessHandler from "@/hooks/useGuessHandler";
import useHintStore from "@/hooks/useHintStore";
import useGetPokeOfDay from "@/hooks/useGetPokeOfDay";

const MAX_GUESSES = 6;

const GuessingGamePage = () => {
  const { pokemonOfTheDay } = useGetPokeOfDay();
  const { submitGuess } = useGuessHandler();
  const { hints, hasWon } = useHintStore(
    useShallow((state) => ({
      hints: state.hints,
      hasWon: state.correct,
    }))
  );

  const tries = hints.length;
  const hasLost = !hasWon && tries >= MAX_GUESSES;
  const gameOver = hasWon || hasLost;

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
      {gameOver ? (
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
