import { VStack, HStack, useBreakpointValue } from "@chakra-ui/react";
import { useShallow } from "zustand/shallow";

import GuessInput from "../components/GuessInput";
import CountdownTimer from "@/components/CountdownTimer";
import PokeRevelation from "@/components/PokeRevelation";
import PokeballHintGrid from "@/components/PokeballHintGrid";

import useGuessHandler from "@/hooks/useGuessHandler";
import useHintStore from "@/hooks/useHintStore";
import useGetPokeOfDay from "@/hooks/useGetPokeOfDay";
import HintStack from "@/components/HintStack";
import HintTracker from "@/components/HintTracker";
import SelectedHintCard from "@/components/SelectedHintCard";

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

  const isMobile = useBreakpointValue({ base: true, xl: false }) ?? false;

  return (
    <HStack p={0} w="100%" justify="space-evenly">
      <VStack spacing={{ base: 4, md: 5, lg: 6 }} w="100%">
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
        {isMobile ? (
          <>
            <PokeballHintGrid />
            <SelectedHintCard />
          </>
        ) : (
          <HintTracker />
        )}
      </VStack>
      {!isMobile && (
        <>
          <HintStack start={0} />
          <HintStack start={3} />
        </>
      )}
    </HStack>
  );
};

export default GuessingGamePage;
